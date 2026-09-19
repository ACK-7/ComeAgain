<?php

namespace App\Http\Controllers;

use App\Models\TourismNews;
use App\Services\GeminiNewsService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Schema;

class TourismNewsController extends Controller
{
    /**
     * Return active tourism news for marquee ticker and blog bulletins.
     */
    public function index(): JsonResponse
    {
        try {
            // Check if table exists
            if (Schema::hasTable('tourism_news')) {
                $news = TourismNews::active()->take(15)->get();

                // If table is empty, auto-seed with curated items
                if ($news->isEmpty()) {
                    $service = new GeminiNewsService();
                    $service->seedCuratedNews();
                    $news = TourismNews::active()->take(15)->get();
                }

                return response()->json([
                    'success' => true,
                    'data' => $news,
                ]);
            }
        } catch (\Throwable $e) {
            // Fallback to static seed if any DB exception occurs
        }

        // Failsafe fallback
        return response()->json([
            'success' => true,
            'data' => GeminiNewsService::getCuratedSeedNews(),
        ]);
    }
}
