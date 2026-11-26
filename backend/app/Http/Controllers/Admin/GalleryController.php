<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ManagedContent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GalleryController extends Controller
{
    private function gallery(): ManagedContent
    {
        return ManagedContent::firstOrCreate(['kind' => 'gallery', 'key' => 'main'], ['data' => ['items' => config('gallery')]]);
    }

    private function payload(ManagedContent $gallery): array
    {
        // MySQL can reorder JSON object keys; list order remains meaningful.
        $normalize = function (array $value) use (&$normalize): array {
            if (!array_is_list($value)) {
                ksort($value);
            }
            foreach ($value as &$entry) {
                if (is_array($entry)) {
                    $entry = $normalize($entry);
                }
            }
            unset($entry);
            return $value;
        };
        return ['items' => $gallery->data['items'], 'revision' => hash('sha256', json_encode($normalize($gallery->data)))];
    }

    private function page(Request $request, array $items, array $extra = []): array
    {
        $request->validate(['page' => 'sometimes|integer|min:1', 'per_page' => 'sometimes|integer|min:1|max:48', 'type' => 'sometimes|in:all,image,video', 'q' => 'sometimes|nullable|string|max:255']);
        $counts = ['photos' => count(array_filter($items, fn ($i) => $i['type'] === 'image')), 'videos' => count(array_filter($items, fn ($i) => $i['type'] === 'video')), 'published' => count(array_filter($items, fn ($i) => $i['active']))];
        $type = $request->input('type', 'all');
        $query = mb_strtolower($request->input('q') ?? '');
        $items = array_values(array_filter($items, fn ($i) => ($type === 'all' || $i['type'] === $type) && str_contains(mb_strtolower($i['title'].' '.($i['description'] ?? '')), $query)));
        $size = (int) $request->input('per_page', 12);
        $last = max(1, (int) ceil(count($items) / $size));
        $page = min((int) $request->input('page', 1), $last);
        return array_merge($extra, ['items' => array_slice($items, ($page - 1) * $size, $size), 'page' => $page, 'last_page' => $last, 'total' => count($items), 'counts' => $counts]);
    }

    public function index(Request $request)
    {
        $payload = $this->payload($this->gallery());
        return response()->json(['success' => true, 'data' => $request->has('page') ? $this->page($request, $payload['items'], ['revision' => $payload['revision']]) : $payload]);
    }

    public function publicIndex(Request $request)
    {
        $items = array_values(array_filter($this->gallery()->data['items'], fn ($item) => $item['active']));
        return response()->json(['success' => true, 'data' => $request->has('page') ? $this->page($request, $items) : $items]);
    }

    public function save(Request $request)
    {
        $mediaUrl = function ($attribute, $value, $fail) {
            if ($value !== null && $value !== '' && !preg_match('~^(https?://[^\s]+|/(?!/)[^\r\n]*)$~', $value)) {
                $fail('Use an HTTP(S) media link or a website path.');
            }
        };
        $operation = $request->input('operation');
        $request->validate(['operation' => 'sometimes|in:upsert,delete,move', 'id' => 'required_with:operation|string', 'direction' => 'required_if:operation,move|in:-1,1']);
        if ($operation) {
            $request->merge(['items' => $operation === 'upsert' ? [$request->input('item')] : []]);
        }
        $data = $request->validate([
            'revision' => 'required|string|size:64',
            'items' => 'present|array|max:500',
            'items.*.id' => 'required|string|alpha_dash:ascii|max:100|distinct',
            'items.*.type' => 'required|in:image,video',
            'items.*.title' => 'required|string|max:255',
            'items.*.url' => ['required', 'string', 'max:2048', $mediaUrl],
            'items.*.thumbnail' => ['nullable', 'string', 'max:2048', $mediaUrl],
            'items.*.description' => 'nullable|string|max:2000',
            'items.*.active' => 'required|boolean',
        ]);
        $this->gallery();
        return DB::transaction(function () use ($data, $request, $operation) {
            $gallery = ManagedContent::where('kind', 'gallery')->where('key', 'main')->lockForUpdate()->firstOrFail();
            abort_unless(hash_equals($this->payload($gallery)['revision'], $data['revision']), 409, 'The gallery has changed since it was loaded, possibly in another tab. Reload the gallery before saving.');
            $items = $gallery->data['items'];
            if ($operation) {
                $id = $request->input('id');
                $index = array_search($id, array_column($items, 'id'), true);
                if ($operation === 'upsert') {
                    abort_unless($data['items'][0]['id'] === $id, 422, 'Media ID does not match.');
                    if ($index === false) { array_unshift($items, $data['items'][0]); }
                    else { $items[$index] = $data['items'][0]; }
                } else {
                    abort_if($index === false, 404, 'This gallery item no longer exists.');
                    if ($operation === 'delete') { array_splice($items, $index, 1); }
                    else {
                        $moved = false;
                        $step = (int) $request->input('direction');
                        for ($neighbor = $index + $step; isset($items[$neighbor]); $neighbor += $step) {
                            if ($items[$neighbor]['type'] === $items[$index]['type']) {
                                [$items[$index], $items[$neighbor]] = [$items[$neighbor], $items[$index]];
                                $moved = true;
                                break;
                            }
                        }
                        abort_unless($moved, 422, 'This item is already at the end of its media group in that direction.');
                    }
                }
            } else { $items = $data['items']; }
            $gallery->update(['data' => ['items' => array_values($items)]]);
            return response()->json(['success' => true, 'data' => $operation ? ['revision' => $this->payload($gallery)['revision']] : $this->payload($gallery)]);
        });
    }
}
