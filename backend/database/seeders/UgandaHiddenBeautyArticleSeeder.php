<?php

namespace Database\Seeders;

use App\Models\ManagedContent;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Cache;

class UgandaHiddenBeautyArticleSeeder extends Seeder
{
    public function run(): void
    {
        $article = json_decode(
            file_get_contents(database_path('seeders/data/uganda_hidden_beauty_2026_2027.json')),
            true, 512, JSON_THROW_ON_ERROR
        );

        // Never replace a live article, overwrite editorial changes, or publish on import.
        $article['status'] = 'draft';
        $record = ManagedContent::firstOrCreate(
            ['kind' => 'blog', 'key' => $article['slug']],
            ['data' => $article]
        );
        Cache::forget('admin_dashboard_stats');
        $this->command?->info($record->wasRecentlyCreated
            ? 'Uganda Hidden Beauty article added as a draft.'
            : 'This article already exists; no changes were made.');
    }
}
