<?php

namespace Tests\Feature;

use App\Models\SafariPackage;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Cache;
use Tests\TestCase;

class PackageApiTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->authenticateAdmin();
        Cache::flush();
    }

    /**
     * Test admin can list all packages.
     */
    public function test_can_list_all_packages_for_admin(): void
    {
        SafariPackage::create([
            'id' => 'pkg_test_01',
            'slug' => 'test-gorilla-trekking-1',
            'title' => 'Test 3-Day Gorilla Trekking',
            'category' => 'Gorilla Trekking',
            'duration_days' => 3,
            'price_usd' => 1500,
            'status' => 'published',
            'featured' => true,
        ]);

        $response = $this->getJson('/api/admin/packages');

        $response->assertStatus(200)
            ->assertJsonPath('success', true)
            ->assertJsonStructure([
                'success',
                'count',
                'data' => [
                    '*' => [
                        'id',
                        'slug',
                        'title',
                        'category',
                        'durationDays',
                        'priceUSD',
                        'featured',
                        'status',
                    ],
                ],
            ]);
    }

    /**
     * Test admin can filter packages by category.
     */
    public function test_can_filter_packages_by_category(): void
    {
        SafariPackage::create([
            'id' => 'pkg_gorilla',
            'slug' => 'bwindi-gorilla-safari',
            'title' => 'Bwindi Gorilla Safari',
            'category' => 'Gorilla Trekking',
            'duration_days' => 3,
            'status' => 'published',
        ]);

        SafariPackage::create([
            'id' => 'pkg_birding',
            'slug' => 'shoebill-birding-safari',
            'title' => 'Shoebill Birding Safari',
            'category' => 'Birding Safaris',
            'duration_days' => 2,
            'status' => 'published',
        ]);

        $response = $this->getJson('/api/admin/packages?category=Gorilla Trekking');

        $response->assertStatus(200);
        $data = $response->json('data');

        $this->assertNotEmpty($data);
        foreach ($data as $pkg) {
            $this->assertEquals('Gorilla Trekking', $pkg['category']);
        }
    }

    /**
     * Test admin can search packages by keyword.
     */
    public function test_can_search_packages_by_keyword(): void
    {
        SafariPackage::create([
            'id' => 'pkg_murch',
            'slug' => 'murchison-falls-classic',
            'title' => 'Murchison Falls Classic Safari',
            'category' => 'Wildlife Safaris',
            'duration_days' => 3,
            'status' => 'published',
        ]);

        $response = $this->getJson('/api/admin/packages?q=murchison');

        $response->assertStatus(200);
        $data = $response->json('data');

        $this->assertCount(1, $data);
        $this->assertEquals('pkg_murch', $data[0]['id']);
    }

    /**
     * Test public endpoint only returns published packages.
     */
    public function test_public_endpoint_only_returns_published_packages(): void
    {
        SafariPackage::create([
            'id' => 'pkg_pub',
            'slug' => 'published-safari',
            'title' => 'Published Safari',
            'category' => 'Wildlife Safaris',
            'duration_days' => 4,
            'status' => 'published',
        ]);

        SafariPackage::create([
            'id' => 'pkg_draft',
            'slug' => 'draft-safari',
            'title' => 'Draft Safari',
            'category' => 'Wildlife Safaris',
            'duration_days' => 4,
            'status' => 'draft',
        ]);

        $response = $this->getJson('/api/packages');

        $response->assertStatus(200);
        $data = $response->json('data');

        $ids = array_column($data, 'id');
        $this->assertContains('pkg_pub', $ids);
        $this->assertNotContains('pkg_draft', $ids);
    }

    /**
     * Test fetching a single package by slug.
     */
    public function test_can_fetch_single_package_by_slug(): void
    {
        $pkg = SafariPackage::create([
            'id' => 'pkg_queen_elizabeth',
            'slug' => 'queen-elizabeth-boat-cruise',
            'title' => 'Queen Elizabeth Boat Cruise',
            'category' => 'Wildlife Safaris',
            'duration_days' => 3,
            'status' => 'published',
            'details' => [
                'location' => 'Queen Elizabeth National Park',
                'accommodation' => 'Mweya Safari Lodge',
            ],
        ]);

        $response = $this->getJson('/api/packages/queen-elizabeth-boat-cruise');

        $response->assertStatus(200)
            ->assertJsonPath('success', true)
            ->assertJsonPath('data.title', 'Queen Elizabeth Boat Cruise')
            ->assertJsonPath('data.details.location', 'Queen Elizabeth National Park');
    }

    /**
     * Test creating a new safari package with full itinerary.
     */
    public function test_can_create_new_safari_package(): void
    {
        $payload = [
            'title' => '8-Day Great Primate & Savannah Traverse',
            'category' => 'Multi-Park Circuits',
            'durationDays' => 8,
            'durationNights' => 7,
            'price' => '$3,800',
            'priceUSD' => 3800,
            'per' => '1 person',
            'wildlife' => ['Gorilla', 'Chimpanzee', 'Lion'],
            'highlights' => ['Bwindi Gorilla Trekking', 'Kibale Chimps'],
            'featured' => true,
            'status' => 'published',
            'details' => [
                'duration' => '8 Days / 7 Nights',
                'location' => 'Bwindi, Kibale & Queen Elizabeth',
                'transport' => '4x4 Safari Land Cruiser',
                'itinerary' => [
                    [
                        'day' => 1,
                        'title' => 'Entebbe to Kibale Forest',
                        'description' => 'Drive through scenic tea plantations.',
                        'meals' => 'Lunch, Dinner',
                        'stay' => 'Turaco Treetops',
                    ],
                ],
                'inclusions' => ['Gorilla Permit', 'Chimpanzee Permit'],
                'exclusions' => ['International flights'],
            ],
        ];

        $response = $this->postJson('/api/admin/packages', $payload);

        $response->assertStatus(201)
            ->assertJsonPath('success', true)
            ->assertJsonPath('data.title', '8-Day Great Primate & Savannah Traverse')
            ->assertJsonPath('data.durationDays', 8)
            ->assertJsonPath('data.priceUSD', 3800)
            ->assertJsonPath('data.featured', true);

        $this->assertDatabaseHas('safari_packages', [
            'title' => '8-Day Great Primate & Savannah Traverse',
            'category' => 'Multi-Park Circuits',
            'duration_days' => 8,
        ]);
    }

    /**
     * Test validation fails when title is missing.
     */
    public function test_fails_to_create_package_with_missing_title(): void
    {
        $response = $this->postJson('/api/admin/packages', [
            'category' => 'Gorilla Trekking',
            'durationDays' => 3,
        ]);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['title']);
    }

    /**
     * Test updating a safari package.
     */
    public function test_can_update_safari_package(): void
    {
        $pkg = SafariPackage::create([
            'id' => 'pkg_to_update',
            'slug' => 'safari-to-update',
            'title' => 'Old Title',
            'category' => 'Wildlife Safaris',
            'duration_days' => 3,
            'price_usd' => 1000,
            'status' => 'published',
        ]);

        $response = $this->putJson("/api/admin/packages/{$pkg->id}", [
            'title' => 'Updated Glorious Safari Title',
            'priceUSD' => 1400,
        ]);

        $response->assertStatus(200)
            ->assertJsonPath('success', true)
            ->assertJsonPath('data.title', 'Updated Glorious Safari Title')
            ->assertJsonPath('data.priceUSD', 1400);

        $this->assertDatabaseHas('safari_packages', [
            'id' => 'pkg_to_update',
            'title' => 'Updated Glorious Safari Title',
            'price_usd' => 1400,
        ]);
    }

    /**
     * Test toggling featured flag.
     */
    public function test_can_toggle_package_featured_status(): void
    {
        $pkg = SafariPackage::create([
            'id' => 'pkg_toggle_feat',
            'slug' => 'toggle-featured-pkg',
            'title' => 'Toggle Featured Package',
            'category' => 'Gorilla Trekking',
            'duration_days' => 3,
            'status' => 'published',
            'featured' => false,
        ]);

        $response = $this->patchJson("/api/admin/packages/{$pkg->id}/toggle-featured");

        $response->assertStatus(200)
            ->assertJsonPath('success', true)
            ->assertJsonPath('data.featured', true);

        $this->assertTrue(SafariPackage::find('pkg_toggle_feat')->featured);
    }

    /**
     * Test deleting a package.
     */
    public function test_can_delete_safari_package(): void
    {
        $pkg = SafariPackage::create([
            'id' => 'pkg_to_delete',
            'slug' => 'safari-to-delete',
            'title' => 'Temporary Safari',
            'category' => 'Wildlife Safaris',
            'duration_days' => 2,
            'status' => 'draft',
        ]);

        $response = $this->deleteJson("/api/admin/packages/{$pkg->id}");

        $response->assertStatus(200)
            ->assertJsonPath('success', true);

        $this->assertDatabaseMissing('safari_packages', [
            'id' => 'pkg_to_delete',
        ]);
    }
}
