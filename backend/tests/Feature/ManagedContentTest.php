<?php

namespace Tests\Feature;

use App\Models\ManagedContent;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ManagedContentTest extends TestCase
{
    use RefreshDatabase;

    public function test_blog_publication_edit_and_delete_are_persistent(): void
    {
        $this->authenticateAdmin('content_editor');
        $post = [
            'slug' => 'test-story', 'title' => 'Safari story', 'excerpt' => 'A story', 'category' => 'Wildlife',
            'readTime' => '3 min read', 'publishedDate' => 'October 16, 2026',
            'author' => ['name' => 'Staff'], 'sections' => [['heading' => 'Intro', 'paragraphs' => ['Real content']]],
            'tags' => ['Uganda'], 'status' => 'draft',
        ];
        $this->postJson('/api/admin/blog', $post)->assertOk();
        $this->getJson('/api/blog')->assertJsonCount(0, 'data');
        $post['status'] = 'published';
        $this->putJson('/api/admin/blog/test-story', $post)->assertOk();
        $this->getJson('/api/blog')->assertJsonPath('data.0.title', 'Safari story');
        $this->deleteJson('/api/admin/blog/test-story')->assertOk();
        $this->getJson('/api/blog')->assertJsonCount(0, 'data');
    }

    public function test_reviews_moderation_controls_public_visibility(): void
    {
        $this->authenticateAdmin();
        $review = ['id' => 'test-review', 'authorName' => 'Traveler', 'rating' => 5, 'source' => 'Direct Safari Feedback',
            'reviewTitle' => 'Great trip', 'reviewText' => 'Wonderful', 'isFeatured' => true, 'status' => 'pending', 'date' => '2026-10-16'];
        $this->postJson('/api/admin/reviews', $review)->assertOk();
        $this->getJson('/api/reviews')->assertJsonCount(0, 'data');
        $review['status'] = 'approved';
        $this->putJson('/api/admin/reviews/test-review', $review)->assertOk();
        $this->getJson('/api/reviews')->assertJsonPath('data.0.author', 'Traveler');
        $review['isFeatured'] = false;
        $this->putJson('/api/admin/reviews/test-review', $review)->assertOk();
        $this->getJson('/api/reviews')->assertJsonCount(0, 'data');
    }

    public function test_fleet_validation_and_private_registration_numbers(): void
    {
        $this->authenticateAdmin('safari_consultant');
        $vehicle = ['id' => 'car', 'name' => 'Cruiser', 'category' => '4x4_safari_land_cruiser', 'capacityPassengers' => 7,
            'dailyRateSelfDriveUSD' => 100, 'dailyRateWithDriverUSD' => 150, 'features' => [], 'status' => 'available', 'licensePlate' => 'PRIVATE'];
        $this->postJson('/api/admin/fleet', $vehicle)->assertOk();
        $this->getJson('/api/fleet')->assertJsonCount(1, 'data')->assertJsonMissing(['licensePlate' => 'PRIVATE']);
        $vehicle['status'] = 'maintenance';
        $this->putJson('/api/admin/fleet/car', $vehicle)->assertOk();
        $this->getJson('/api/fleet')->assertJsonCount(0, 'data');
        $vehicle['dailyRateWithDriverUSD'] = -1;
        $this->putJson('/api/admin/fleet/car', $vehicle)->assertUnprocessable();
    }

    public function test_upload_requires_image_and_returns_public_url(): void
    {
        Storage::fake('public');
        $this->authenticateAdmin();
        $this->postJson('/api/admin/media', ['image' => UploadedFile::fake()->create('evil.php', 1, 'text/plain')])->assertUnprocessable();
        $url = $this->postJson('/api/admin/media', ['image' => UploadedFile::fake()->createWithContent('safari.png', base64_decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jK0cAAAAASUVORK5CYII='))])->assertCreated()->json('data.url');
        $this->get(parse_url($url, PHP_URL_PATH))->assertOk()->assertHeader('X-Content-Type-Options', 'nosniff');
    }

    public function test_repeat_content_import_preserves_edits_and_deletions(): void
    {
        $this->seed(\Database\Seeders\WebsiteContentSeeder::class);
        $post = ManagedContent::where('kind', 'blog')->first();
        $post->delete();
        $this->seed(\Database\Seeders\WebsiteContentSeeder::class);
        $this->assertDatabaseMissing('managed_content', ['kind' => 'blog', 'key' => $post->key]);
    }
}
