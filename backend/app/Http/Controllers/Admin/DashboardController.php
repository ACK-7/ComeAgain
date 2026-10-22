<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Inquiry;
use App\Models\Subscriber;
use App\Models\TourismNews;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class DashboardController extends Controller
{
    /**
     * Return high-level aggregated KPI metrics for the executive dashboard.
     * Cached for 30 seconds for sub-10ms response times.
     */
    public function stats(Request $request): JsonResponse
    {
        $stats = Cache::remember('admin_dashboard_stats', 30, function () {
            $totalInquiries = Inquiry::count();
            $activeLeads = Inquiry::whereNotIn('status', ['completed', 'lost'])->count();
            $confirmedBookings = Inquiry::where('status', 'confirmed')->count();

            // Calculate estimated pipeline from active leads
            $pipelineUSD = 0;
            $activeInquiries = Inquiry::whereNotIn('status', ['completed', 'lost'])->get();
            foreach ($activeInquiries as $inq) {
                if ($inq->estimated_budget) {
                    // Extract first dollar amount like $3,800 or $12,000
                    if (preg_match('/\$?([0-9,]+)/', $inq->estimated_budget, $matches)) {
                        $cleaned = (int) str_replace(',', '', $matches[1]);
                        $pipelineUSD += $cleaned;
                    }
                }
            }

            $totalSubscribers = Subscriber::where('is_active', true)->count();


            $publishedArticlesCount = \App\Models\ManagedContent::where('kind', 'blog')->get()->filter(fn ($row) => ($row->data['status'] ?? 'published') === 'published')->count();

            $packagesCount = \App\Models\SafariPackage::count();

            return [
                'totalInquiries' => $totalInquiries,
                'activeLeads' => $activeLeads,
                'confirmedBookings' => $confirmedBookings,
                'estimatedPipelineUSD' => $pipelineUSD,
                'totalSubscribers' => $totalSubscribers,
                'packagesCount' => $packagesCount,
                'fleetCount' => \App\Models\ManagedContent::where('kind', 'fleet')->count(),
                'publishedArticlesCount' => $publishedArticlesCount,
                'generatedAt' => now()->toIso8601String(),
            ];
        });

        return response()->json([
            'success' => true,
            'data' => $stats,
        ]);
    }

    /**
     * Return recent inquiries feed for the dashboard preview.
     */
    public function recentInquiries(Request $request): JsonResponse
    {
        $recent = Inquiry::orderBy('created_at', 'desc')
            ->take(5)
            ->get()
            ->map(fn (Inquiry $inq) => $inq->toFrontendArray());

        return response()->json([
            'success' => true,
            'data' => $recent,
        ]);
    }
}
