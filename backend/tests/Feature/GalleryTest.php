<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class GalleryTest extends TestCase
{
    use RefreshDatabase;

    public function test_existing_gallery_is_preserved_and_editors_can_publish_reorder_hide_and_remove(): void
    {
        $this->getJson('/api/gallery')->assertOk()->assertJsonCount(36, 'data');
        $this->authenticateAdmin('content_editor');
        $gallery = $this->getJson('/api/admin/gallery')->assertOk()->json('data');
        $gallery['items'] = array_reverse($gallery['items']);
        $gallery['items'][0]['title'] = 'Updated safari video';
        $gallery['items'][1]['active'] = false;
        array_pop($gallery['items']);
        $saved = $this->putJson('/api/admin/gallery', $gallery)->assertOk()->json('data');
        $this->getJson('/api/gallery')->assertJsonCount(34, 'data')->assertJsonPath('data.0.title', 'Updated safari video');
        $this->putJson('/api/admin/gallery', $gallery)->assertStatus(409);
        $saved['items'] = [];
        $this->putJson('/api/admin/gallery', $saved)->assertOk();
        $this->getJson('/api/gallery')->assertJsonCount(0, 'data');
    }

    public function test_revision_survives_database_json_key_reordering_and_repeated_saves(): void
    {
        $this->authenticateAdmin('content_editor');
        $gallery = $this->getJson('/api/admin/gallery')->assertOk()->json('data');
        // Simulate MySQL JSON key normalization without changing gallery content.
        $storedItems = array_map(function ($item) {
            ksort($item);
            return $item;
        }, $gallery['items']);
        \App\Models\ManagedContent::where('kind', 'gallery')->where('key', 'main')
            ->update(['data' => json_encode(['items' => $storedItems])]);
        $this->getJson('/api/admin/gallery')->assertOk()->assertJsonPath('data.revision', $gallery['revision']);
        $gallery['items'][] = [
            'id' => 'new-photo', 'type' => 'image', 'title' => 'Blue Monkey',
            'url' => '/images/monkey.jpg', 'active' => true,
        ];
        $saved = $this->putJson('/api/admin/gallery', $gallery)->assertOk()->json('data');
        $this->getJson('/api/admin/gallery')->assertJsonPath('data.revision', $saved['revision']);
        $saved['items'][0]['title'] = 'Another edit';
        $this->putJson('/api/admin/gallery', $saved)->assertOk();
        $this->putJson('/api/admin/gallery', $gallery)->assertStatus(409);
    }

    public function test_pagination_filters_and_item_mutations_preserve_other_pages(): void
    {
        $this->authenticateAdmin('content_editor');
        $first = $this->getJson('/api/admin/gallery?page=1&per_page=12&type=image')->assertOk()->assertJsonCount(12, 'data.items')->json('data');
        $second = $this->getJson('/api/admin/gallery?page=2&per_page=12&type=image')->assertOk()->json('data');
        $this->assertEmpty(array_intersect(array_column($first['items'], 'id'), array_column($second['items'], 'id')));
        $item = $second['items'][0];
        $item['title'] = 'Unique monkey photo';
        $item['active'] = false;
        $saved = $this->putJson('/api/admin/gallery', ['operation' => 'upsert', 'id' => $item['id'], 'item' => $item, 'revision' => $first['revision']])->assertOk()->json('data');
        $this->getJson('/api/admin/gallery?page=1&q=Unique%20monkey')->assertOk()->assertJsonCount(1, 'data.items');
        $this->getJson('/api/gallery?page=1&q=Unique%20monkey')->assertOk()->assertJsonCount(0, 'data.items');
        $all = $this->getJson('/api/admin/gallery')->json('data');
        $this->assertCount(36, $all['items']);
        $this->assertSame($first['items'][0], $all['items'][0]);
        $this->putJson('/api/admin/gallery', ['operation' => 'delete', 'id' => $item['id'], 'revision' => $saved['revision']])->assertOk();
        $this->getJson('/api/admin/gallery?page=999&type=image')->assertOk()->assertJsonPath('data.page', 2)->assertJsonPath('data.total', 17);
        $this->getJson('/api/gallery?page=1&per_page=999')->assertUnprocessable();
    }

    public function test_gallery_permissions_and_validation(): void
    {
        $this->getJson('/api/admin/gallery')->assertUnauthorized();
        $this->putJson('/api/admin/gallery', [])->assertUnauthorized();
        $this->authenticateAdmin('safari_consultant');
        $this->getJson('/api/admin/gallery')->assertForbidden();
        $this->putJson('/api/admin/gallery', [])->assertForbidden();
        $this->authenticateAdmin('content_editor');
        $gallery = $this->getJson('/api/admin/gallery')->json('data');
        $gallery['items'][0]['url'] = 'javascript:alert(1)';
        $this->putJson('/api/admin/gallery', $gallery)->assertUnprocessable();
    }

    public function test_video_upload_and_serving_and_rejection_of_executable_files(): void
    {
        Storage::fake('public');
        $this->authenticateAdmin('content_editor');
        $video = UploadedFile::fake()->create('safari.mp4', 100, 'video/mp4');
        $url = $this->post('/api/admin/media', ['file' => $video], ['Accept' => 'application/json'])->assertCreated()->json('data.url');
        $this->get(parse_url($url, PHP_URL_PATH))->assertOk()->assertHeader('X-Content-Type-Options', 'nosniff');
        $bad = UploadedFile::fake()->create('bad.php', 1, 'application/x-httpd-php');
        $this->post('/api/admin/media', ['file' => $bad], ['Accept' => 'application/json'])->assertUnprocessable();
    }
}
