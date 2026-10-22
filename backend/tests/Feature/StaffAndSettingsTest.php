<?php

namespace Tests\Feature;

use App\Models\ManagedContent;
use App\Models\TourismNews;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class StaffAndSettingsTest extends TestCase
{
    use RefreshDatabase;

    public function test_staff_creation_role_change_and_revocation(): void
    {
        $this->authenticateAdmin();
        $person = ['name' => 'Editor', 'email' => 'editor@example.com', 'role' => 'content_editor', 'password' => 'strong-test-password'];
        $id = $this->postJson('/api/admin/staff', $person)->assertOk()->json('data.id');
        $this->assertDatabaseHas('users', ['id' => $id, 'role' => 'content_editor']);
        $person['role'] = 'safari_consultant';
        $this->putJson('/api/admin/staff/'.$id, $person)->assertOk();
        $this->assertDatabaseHas('users', ['id' => $id, 'role' => 'safari_consultant']);
        $this->deleteJson('/api/admin/staff/'.$id)->assertOk();
        $this->assertDatabaseHas('users', ['id' => $id, 'role' => null]);
    }

    public function test_last_super_admin_and_self_access_are_protected(): void
    {
        $user = $this->authenticateAdmin();
        $this->putJson('/api/admin/staff/'.$user->id, ['name' => $user->name, 'email' => $user->email, 'role' => 'content_editor'])->assertUnprocessable();
        $this->deleteJson('/api/admin/staff/'.$user->id)->assertUnprocessable();
    }

    public function test_non_admin_staff_cannot_manage_accounts(): void
    {
        $this->authenticateAdmin('safari_consultant');
        $this->getJson('/api/admin/staff')->assertForbidden();
        $this->postJson('/api/admin/staff', [])->assertForbidden();
    }

    public function test_settings_persist_and_invalid_rates_do_not_replace_them(): void
    {
        $this->seed(\Database\Seeders\WebsiteContentSeeder::class);
        $this->authenticateAdmin();
        $settings = ManagedContent::where('kind', 'settings')->first()->data;
        $settings['primaryEmail'] = 'office@example.com';
        $settings['currencyRates']['USD_TO_UGX'] = 4000;
        $this->putJson('/api/admin/settings', $settings)->assertOk();
        $this->getJson('/api/settings')->assertJsonPath('data.primaryEmail', 'office@example.com')->assertJsonPath('data.currencyRates.USD_TO_UGX', 4000);
        $settings['currencyRates']['USD_TO_UGX'] = -1;
        $this->putJson('/api/admin/settings', $settings)->assertUnprocessable();
        $this->getJson('/api/settings')->assertJsonPath('data.currencyRates.USD_TO_UGX', 4000);
    }

    public function test_hidden_news_is_not_repopulated_by_public_reads(): void
    {
        $news = TourismNews::create(['title' => 'News', 'summary' => 'Summary', 'content' => 'Story', 'category' => 'Wildlife', 'source_name' => 'Staff', 'published_at' => now(), 'is_active' => true]);
        $this->authenticateAdmin('content_editor');
        $this->patchJson('/api/admin/news/'.$news->id, ['is_featured' => true, 'is_active' => false])->assertOk();
        $this->getJson('/api/tourism-news')->assertJsonCount(0, 'data');
        $this->getJson('/api/admin/news')->assertJsonCount(1, 'data')->assertJsonPath('data.0.is_featured', true);
    }
}
