<?php

namespace Tests\Feature;

use App\Models\ManagedContent;
use Database\Seeders\UgandaHiddenBeautyArticleSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BlogRenderingDataTest extends TestCase
{
    use RefreshDatabase;

    public function test_existing_numeric_object_sections_are_returned_as_ordered_lists(): void
    {
        $this->seed(UgandaHiddenBeautyArticleSeeder::class);
        $post = ManagedContent::where('kind', 'blog')->sole();
        $article = $post->data;
        $introduction = array_shift($article['sections']);
        $sections = [];
        foreach ($article['sections'] as $index => $section) $sections[$index + 1] = $section;
        $sections[0] = $introduction;
        $article['sections'] = $sections;
        $article['status'] = 'published';
        $post->update(['data' => $article]);

        $result = $this->getJson('/api/blog')->assertOk()->json('data.0');
        $this->assertTrue(array_is_list($result['sections']));
        $this->assertSame($introduction['paragraphs'], $result['sections'][0]['paragraphs']);
        $this->assertStringStartsWith('1. Bwindi', $result['sections'][1]['heading']);
        $this->assertSame(10, count($result['sections']));

        $this->authenticateAdmin('content_editor');
        $admin = $this->getJson('/api/admin/blog')->assertOk()->json('data.0');
        $this->assertTrue(array_is_list($admin['sections']));
    }

    public function test_publishing_an_article_with_optional_intro_heading_keeps_sections_a_list(): void
    {
        $this->seed(UgandaHiddenBeautyArticleSeeder::class);
        $article = ManagedContent::where('kind', 'blog')->sole()->data;
        $article['status'] = 'published';
        $this->authenticateAdmin('content_editor');
        $this->putJson('/api/admin/blog/'.$article['slug'], $article)->assertOk();
        $saved = ManagedContent::where('kind', 'blog')->sole()->data;
        $this->assertTrue(array_is_list($saved['sections']));
        $this->assertSame($article['sections'][0]['paragraphs'], $saved['sections'][0]['paragraphs']);
    }

    public function test_publication_date_controls_order_even_when_old_featured_post_was_inserted_later(): void
    {
        foreach ([['new', 'October 17, 2026', false], ['older-featured', 'October 2, 2026', true], ['oldest', 'December 5, 2025', false]] as [$slug, $date, $featured]) {
            ManagedContent::create(['kind' => 'blog', 'key' => $slug, 'data' => [
                'slug' => $slug, 'publishedDate' => $date, 'status' => 'published', 'featured' => $featured, 'sections' => [],
            ]]);
        }
        $posts = $this->getJson('/api/blog')->assertOk()->json('data');
        $this->assertSame(['new', 'older-featured', 'oldest'], array_column($posts, 'slug'));
    }
}
