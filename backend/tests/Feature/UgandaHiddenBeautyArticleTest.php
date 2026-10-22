<?php

namespace Tests\Feature;

use App\Models\ManagedContent;
use Database\Seeders\UgandaHiddenBeautyArticleSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UgandaHiddenBeautyArticleTest extends TestCase
{
    use RefreshDatabase;

    public function test_import_adds_one_valid_draft_and_can_be_published_through_the_dashboard(): void
    {
        $this->seed(UgandaHiddenBeautyArticleSeeder::class);
        $article = ManagedContent::where('kind', 'blog')->sole()->data;
        $this->assertSame('draft', $article['status']);
        $this->assertCount(10, $article['sections']);
        $this->assertSame('Come Again Tours and Travels', $article['author']['name']);
        $this->getJson('/api/blog')->assertJsonCount(0, 'data');
        $this->authenticateAdmin('content_editor');
        $this->putJson('/api/admin/blog/'.$article['slug'], $article)->assertOk();
        $article['status'] = 'published';
        $this->putJson('/api/admin/blog/'.$article['slug'], $article)->assertOk();
        $this->getJson('/api/blog')->assertJsonCount(1, 'data')->assertJsonPath('data.0.title', $article['title']);
    }

    public function test_repeating_import_preserves_existing_edits_and_other_articles(): void
    {
        ManagedContent::create(['kind' => 'blog', 'key' => 'another-article', 'data' => ['title' => 'Keep this article']]);
        $this->seed(UgandaHiddenBeautyArticleSeeder::class);
        $post = ManagedContent::where('key', 'discover-hidden-beauty-uganda-7-places-2026-2027')->firstOrFail();
        $edited = $post->data;
        $edited['title'] = 'Edited by the owner';
        $edited['status'] = 'published';
        $post->update(['data' => $edited]);
        $this->seed(UgandaHiddenBeautyArticleSeeder::class);
        $this->assertSame($edited, $post->fresh()->data);
        $this->assertSame(2, ManagedContent::where('kind', 'blog')->count());
        $this->assertSame('Keep this article', ManagedContent::where('key', 'another-article')->firstOrFail()->data['title']);
    }
}
