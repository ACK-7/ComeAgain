<?php

namespace Tests\Feature;

use App\Models\Inquiry;
use App\Models\ManagedContent;
use App\Models\SafariPackage;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class AdminSecurityTest extends TestCase
{
    use RefreshDatabase;

    public function test_anonymous_visitors_cannot_read_or_change_admin_data(): void
    {
        foreach (['inquiries', 'packages', 'subscribers', 'blog', 'fleet', 'reviews', 'settings', 'health', 'dashboard/stats'] as $path) {
            $this->getJson('/api/admin/'.$path)->assertUnauthorized();
        }
        $this->postJson('/api/admin/packages', ['title' => 'Unauthorized'])->assertUnauthorized();
        $this->deleteJson('/api/admin/inquiries/anything')->assertUnauthorized();
    }

    public function test_real_password_is_required_and_logout_revokes_token(): void
    {
        $user = User::factory()->create(['email' => 'staff@example.com', 'password' => 'a-strong-password']);
        $user->role = 'super_admin'; $user->save();
        $this->postJson('/api/admin/login', ['email' => $user->email, 'password' => 'wrong'])->assertUnprocessable();
        $this->postJson('/api/admin/login', ['email' => 'stranger@example.com', 'password' => 'anything'])->assertUnprocessable();
        $token = $this->postJson('/api/admin/login', ['email' => $user->email, 'password' => 'a-strong-password'])
            ->assertOk()->json('data.token');
        $this->assertDatabaseHas('admin_tokens', ['token_hash' => hash('sha256', $token)]);
        $this->withHeader('Authorization', 'Bearer '.$token)->getJson('/api/admin/me')->assertOk();
        $this->postJson('/api/admin/logout')->assertOk();
        $this->getJson('/api/admin/me')->assertUnauthorized();
    }

    public function test_expired_tokens_and_non_staff_accounts_are_rejected(): void
    {
        $this->authenticateAdmin();
        DB::table('admin_tokens')->update(['expires_at' => now()->subMinute()]);
        $this->getJson('/api/admin/me')->assertUnauthorized();
        $user = User::factory()->create();
        $this->postJson('/api/admin/login', ['email' => $user->email, 'password' => 'password'])->assertUnprocessable();
    }

    public function test_editor_cannot_access_customer_records_or_business_settings(): void
    {
        $this->authenticateAdmin('content_editor');
        $this->getJson('/api/admin/blog')->assertOk();
        $this->getJson('/api/admin/inquiries')->assertForbidden();
        $this->getJson('/api/admin/dashboard/recent-inquiries')->assertForbidden();
        $this->putJson('/api/admin/settings', [])->assertForbidden();
    }

    public function test_consultant_cannot_change_packages_or_content(): void
    {
        $this->authenticateAdmin('safari_consultant');
        $this->getJson('/api/admin/inquiries')->assertOk();
        $this->getJson('/api/admin/fleet')->assertOk();
        $this->postJson('/api/admin/packages', [])->assertForbidden();
        $this->postJson('/api/admin/blog', [])->assertForbidden();
    }

    public function test_public_contact_persists_even_if_notifications_fail(): void
    {
        Mail::shouldReceive('to')->andThrow(new \RuntimeException('Mail unavailable'));
        Http::fake();
        $this->postJson('/api/contact', [
            'firstName' => 'Test', 'lastName' => 'Traveler', 'email' => 'traveler@example.com',
            'message' => 'Please plan our safari', 'source' => 'package_booking', 'travelersCount' => 3,
            'packageInterest' => 'Gorilla Safari',
        ])->assertOk()->assertJsonStructure(['reference']);
        $this->assertDatabaseHas('inquiries', ['email' => 'traveler@example.com', 'source' => 'package_booking', 'travelers_count' => 3]);
    }

    public function test_public_package_details_never_expose_drafts(): void
    {
        SafariPackage::create(['id' => 'draft', 'slug' => 'private-trip', 'title' => 'Private trip', 'category' => 'Wildlife Safaris', 'duration_days' => 2, 'status' => 'draft']);
        $this->getJson('/api/packages/private-trip')->assertNotFound();
        $this->getJson('/api/packages/draft')->assertNotFound();
        $this->authenticateAdmin('content_editor');
        $this->getJson('/api/admin/packages/draft')->assertOk();
    }

    public function test_empty_dashboard_has_no_invented_metrics(): void
    {
        $this->authenticateAdmin();
        $this->getJson('/api/admin/dashboard/stats')->assertOk()
            ->assertJsonPath('data.totalSubscribers', 0)->assertJsonPath('data.packagesCount', 0)
            ->assertJsonPath('data.fleetCount', 0)->assertJsonPath('data.publishedArticlesCount', 0)
            ->assertJsonPath('data.estimatedPipelineUSD', 0);
    }

    public function test_public_setup_routes_are_removed(): void
    {
        $this->get('/clear')->assertNotFound();
        $this->get('/run-setup-migrations')->assertNotFound();
    }
}
