<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ManagedContent;
use App\Models\TourismNews;
use App\Services\TelegramAlertService;
use App\Services\BlogArticleData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ContentController extends Controller
{
    public function index(Request $request, string $kind)
    {
        $this->checkKind($kind);
        $items = ManagedContent::where('kind', $kind)->orderByDesc('created_at')->orderByDesc('id')->get()->pluck('data');
        if ($kind === 'blog') $items = $items->map(fn ($article) => BlogArticleData::normalize($article))
            ->sortByDesc(fn ($article) => BlogArticleData::publicationTimestamp($article))->values();
        return response()->json(['success' => true, 'data' => $items]);
    }

    public function publicIndex(string $kind)
    {
        $this->checkKind($kind);
        abort_if($kind === 'settings', 404);
        $items = ManagedContent::where('kind', $kind)->orderByDesc('created_at')->orderByDesc('id')->get()->pluck('data')->filter(function ($item) use ($kind) {
            return match ($kind) {
                'blog' => ($item['status'] ?? 'published') === 'published',
                'reviews' => ($item['status'] ?? '') === 'approved' && ($item['isFeatured'] ?? false),
                'fleet' => ($item['status'] ?? '') !== 'maintenance',
            };
        })->map(function ($item) use ($kind) {
            if ($kind === 'fleet') unset($item['licensePlate']);
            if ($kind === 'reviews') $item += ['author' => $item['authorName'], 'headline' => $item['reviewTitle'], 'text' => $item['reviewText'], 'country' => $item['authorCountry'] ?? ''];
            return $item;
        })->values();
        if ($kind === 'blog') $items = $items->map(fn ($article) => BlogArticleData::normalize($article))
            ->sortByDesc(fn ($article) => BlogArticleData::publicationTimestamp($article))->values();
        return response()->json(['success' => true, 'data' => $items]);
    }

    public function save(Request $request, string $kind, ?string $key = null)
    {
        $this->checkKind($kind);
        abort_if($kind === 'settings', 404);
        $rules = match ($kind) {
            'blog' => [
                'slug' => 'required|alpha_dash:ascii|max:191', 'title' => 'required|string|max:255',
                'subtitle' => 'nullable|string|max:500', 'excerpt' => 'required|string|max:2000',
                'metaTitle' => 'nullable|string|max:255', 'metaDescription' => 'nullable|string|max:2000',
                'category' => 'required|in:Wildlife,Culture,Safari Tips,Destinations', 'readTime' => 'required|string|max:50',
                'publishedDate' => 'required|string|max:100', 'author' => 'required|array',
                'author.name' => 'required|string|max:255', 'author.role' => 'nullable|string|max:255', 'author.image' => 'nullable|string|max:2048',
                'featuredImage' => 'nullable|string|max:2048', 'featured' => 'boolean',
                'status' => 'required|in:published,draft,archived', 'sections' => 'required|array|min:1|max:100',
                'sections.*.heading' => 'nullable|string|max:500', 'sections.*.paragraphs' => 'required|array|max:100',
                'sections.*.paragraphs.*' => 'string|max:20000', 'sections.*.quote' => 'nullable|string|max:5000',
                'sections.*.tips' => 'nullable|array', 'sections.*.tips.*' => 'string|max:5000',
                'sections.*.image' => 'nullable|string|max:2048', 'sections.*.imageCaption' => 'nullable|string|max:500',
                'sections.*.imagePosition' => 'nullable|string|max:100',
                'tags' => 'present|array|max:50', 'tags.*' => 'string|max:100',
                'linkedPackage' => 'nullable|array', 'faqs' => 'nullable|array',
            ],
            'fleet' => [
                'id' => 'nullable|string|max:191', 'name' => 'required|string|max:255',
                'category' => 'required|in:4x4_safari_land_cruiser,safari_van,super_custom,coaster_bus,rav4',
                'capacityPassengers' => 'required|integer|min:1|max:100',
                'dailyRateSelfDriveUSD' => 'required|numeric|min:0', 'dailyRateWithDriverUSD' => 'required|numeric|min:0',
                'features' => 'present|array|max:50', 'features.*' => 'string|max:500',
                'status' => 'required|in:available,on_safari,maintenance', 'licensePlate' => 'nullable|string|max:50',
                'imageUrl' => 'nullable|string|max:2048',
            ],
            'reviews' => [
                'id' => 'nullable|string|max:191', 'authorName' => 'required|string|max:255',
                'authorCountry' => 'nullable|string|max:100', 'rating' => 'required|integer|between:1,5',
                'source' => 'required|string|max:100', 'safariTaken' => 'nullable|string|max:255',
                'reviewTitle' => 'required|string|max:255', 'reviewText' => 'required|string|max:10000',
                'isFeatured' => 'required|boolean', 'status' => 'required|in:approved,pending,rejected',
                'date' => 'required|string|max:100', 'tripadvisorReviewUrl' => 'nullable|url:http,https|max:2048',
            ],
        };
        $data = $request->validate($rules);
        if ($kind === 'blog') $data = BlogArticleData::normalize($data);
        $newKey = $kind === 'blog' ? $data['slug'] : ($key ?? (($data['id'] ?? null) ?: (string) Str::uuid()));
        if ($key) ManagedContent::where('kind', $kind)->where('key', $key)->firstOrFail();
        if (!$key || $newKey !== $key) {
            abort_if(ManagedContent::where('kind', $kind)->where('key', $newKey)->exists(), 422, 'This identifier is already in use.');
        }
        if ($kind !== 'blog') $data['id'] = $newKey;
        ManagedContent::updateOrCreate(['kind' => $kind, 'key' => $key ?? $newKey], ['key' => $newKey, 'data' => $data]);
        Cache::forget('admin_dashboard_stats');
        return response()->json(['success' => true, 'data' => $data]);
    }

    public function destroy(string $kind, string $key)
    {
        $this->checkKind($kind);
        abort_if($kind === 'settings', 404);
        ManagedContent::where('kind', $kind)->where('key', $key)->firstOrFail()->delete();
        Cache::forget('admin_dashboard_stats');
        return response()->json(['success' => true]);
    }

    public function settings()
    {
        return response()->json(['success' => true, 'data' => ManagedContent::where('kind', 'settings')->where('key', 'business')->firstOrFail()->data]);
    }

    public function saveSettings(Request $request)
    {
        $data = $request->validate([
            'companyName' => 'required|string|max:255', 'tagline' => 'required|string|max:500',
            'primaryEmail' => 'required|email|max:150', 'phoneDisplay' => 'required|string|max:50',
            'phoneRaw' => ['required', 'regex:/^\+?[0-9]{7,15}$/'], 'whatsappDisplay' => 'required|string|max:50',
            'whatsappRaw' => ['required', 'regex:/^\+?[0-9]{7,15}$/'], 'physicalAddress' => 'required|string|max:500',
            'city' => 'required|string|max:100', 'country' => 'required|string|max:100',
            'currencyRates' => 'required|array:USD_TO_UGX,USD_TO_EUR,USD_TO_GBP',
            'currencyRates.USD_TO_UGX' => 'required|numeric|gt:0', 'currencyRates.USD_TO_EUR' => 'required|numeric|gt:0',
            'currencyRates.USD_TO_GBP' => 'required|numeric|gt:0', 'licenses' => 'present|array', 'licenses.*' => 'string|max:255',
            'socials' => 'required|array:facebook,instagram,tripadvisor', 'socials.*' => 'nullable|url:http,https|max:2048',
        ]);
        ManagedContent::updateOrCreate(['kind' => 'settings', 'key' => 'business'], ['data' => $data]);
        return response()->json(['success' => true, 'data' => $data]);
    }

    public function news()
    {
        return response()->json(['success' => true, 'data' => TourismNews::orderByDesc('published_at')->get()]);
    }

    public function updateNews(Request $request, int $id)
    {
        $data = $request->validate(['is_featured' => 'sometimes|boolean', 'is_active' => 'sometimes|boolean']);
        $news = TourismNews::findOrFail($id);
        $news->update($data);
        return response()->json(['success' => true, 'data' => $news]);
    }

    public function health()
    {
        DB::select('SELECT 1');
        return response()->json(['success' => true, 'data' => [
            'database' => true, 'storageWritable' => is_writable(storage_path('app')),
            'mailConfigured' => config('mail.default') !== 'log' && config('mail.default') !== 'array',
            'telegramConfigured' => (bool) config('services.telegram.bot_token') && (bool) config('services.telegram.chat_id'),
        ]]);
    }

    public function testTelegram()
    {
        $sent = TelegramAlertService::sendSafariInquiryAlert(['firstName' => 'Dashboard', 'lastName' => 'Test', 'message' => 'Staff requested a connectivity test.']);
        return response()->json(['success' => $sent, 'message' => $sent ? 'Telegram accepted the test alert.' : 'Telegram did not accept the alert. Check server configuration and logs.'], $sent ? 200 : 502);
    }

    private function checkKind(string $kind): void
    {
        abort_unless(in_array($kind, ['blog', 'fleet', 'reviews', 'settings'], true), 404);
    }
}
