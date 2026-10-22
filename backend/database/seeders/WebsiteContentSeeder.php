<?php

namespace Database\Seeders;

use App\Http\Controllers\ReviewController;
use App\Models\ManagedContent;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WebsiteContentSeeder extends Seeder
{
    public function run(): void
    {
        // A marker prevents repeat deployments from resurrecting deleted content.
        if (ManagedContent::where('kind', 'system')->where('key', 'website_import_v1')->exists()) return;
        $data = json_decode(file_get_contents(database_path('seeders/data/website_content.json')), true, 512, JSON_THROW_ON_ERROR);
        DB::transaction(function () use ($data) {
            foreach (['blog', 'fleet'] as $kind) {
                foreach ($data[$kind] as $item) {
                    ManagedContent::firstOrCreate(['kind' => $kind, 'key' => $item['slug'] ?? $item['id']], ['data' => $item]);
                }
            }
            ManagedContent::firstOrCreate(['kind' => 'settings', 'key' => 'business'], ['data' => $data['settings']]);
            $reviews = (new \ReflectionClass(ReviewController::class))->getDefaultProperties()['defaultReviews'];
            foreach ($reviews as $review) {
                $id = 'website-review-'.$review['id'];
                ManagedContent::firstOrCreate(['kind' => 'reviews', 'key' => $id], ['data' => [
                    'id' => $id, 'authorName' => $review['author'], 'rating' => $review['rating'],
                    'reviewTitle' => $review['headline'], 'reviewText' => $review['text'], 'date' => $review['date'],
                    'source' => 'TripAdvisor', 'status' => 'approved', 'isFeatured' => true,
                ]]);
            }
            ManagedContent::create(['kind' => 'system', 'key' => 'website_import_v1', 'data' => ['imported' => true]]);
        });
    }
}
