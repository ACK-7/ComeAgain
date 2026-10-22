<?php

namespace Tests\Feature;

use App\Models\Subscriber;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SubscriberApiTest extends TestCase
{
    use RefreshDatabase;
    protected function setUp(): void
    {
        parent::setUp();
        $this->authenticateAdmin();
    }

    public function test_can_list_all_subscribers(): void
    {
        Subscriber::create([
            'email' => 'safari.lead@example.com',
            'source' => 'footer',
            'is_active' => true,
        ]);

        $response = $this->getJson('/api/admin/subscribers');

        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
            ])
            ->assertJsonStructure([
                'success',
                'count',
                'data' => [
                    '*' => [
                        'id',
                        'email',
                        'source',
                        'isActive',
                        'subscribedAt',
                    ],
                ],
            ]);
    }

    public function test_can_add_new_subscriber(): void
    {
        $payload = [
            'email' => 'new.traveler@safari.com',
            'source' => 'blog',
        ];

        $response = $this->postJson('/api/admin/subscribers', $payload);

        $response->assertStatus(201)
            ->assertJson([
                'success' => true,
                'data' => [
                    'email' => 'new.traveler@safari.com',
                    'isActive' => true,
                ],
            ]);

        $this->assertDatabaseHas('subscribers', [
            'email' => 'new.traveler@safari.com',
        ]);
    }

    public function test_fails_to_add_subscriber_with_invalid_email(): void
    {
        $payload = [
            'email' => 'invalid-email-string',
        ];

        $response = $this->postJson('/api/admin/subscribers', $payload);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['email']);
    }

    public function test_can_toggle_subscriber_active_status(): void
    {
        $subscriber = Subscriber::create([
            'email' => 'toggle.test@example.com',
            'source' => 'home_modal',
            'is_active' => true,
        ]);

        $response = $this->patchJson("/api/admin/subscribers/{$subscriber->id}/toggle");

        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'data' => [
                    'isActive' => false,
                ],
            ]);

        $this->assertDatabaseHas('subscribers', [
            'id' => $subscriber->id,
            'is_active' => false,
        ]);
    }

    public function test_can_delete_subscriber(): void
    {
        $subscriber = Subscriber::create([
            'email' => 'delete.me@example.com',
            'source' => 'manual',
            'is_active' => false,
        ]);

        $response = $this->deleteJson("/api/admin/subscribers/{$subscriber->id}");

        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
            ]);

        $this->assertDatabaseMissing('subscribers', [
            'id' => $subscriber->id,
        ]);
    }


    public function test_can_unsubscribe_with_valid_token(): void
    {
        $email = 'unsubscribe.test@example.com';
        Subscriber::create([
            'email' => $email,
            'is_active' => true,
        ]);

        $unsubscribeUrl = \App\Services\NewsletterSubscriptionService::generateUnsubscribeUrl($email);

        $response = $this->get($unsubscribeUrl);

        $response->assertStatus(200)
            ->assertViewIs('newsletter_unsubscribed')
            ->assertViewHas('success', true);

        $this->assertDatabaseHas('subscribers', [
            'email' => $email,
            'is_active' => false,
        ]);
    }

    public function test_cannot_unsubscribe_with_tampered_token(): void
    {
        $email = 'tamper.test@example.com';
        Subscriber::create([
            'email' => $email,
            'is_active' => true,
        ]);

        $response = $this->get('/unsubscribe?email=' . urlencode($email) . '&token=invalid_forged_token');

        $response->assertStatus(200)
            ->assertViewIs('newsletter_unsubscribed')
            ->assertViewHas('success', false);

        $this->assertDatabaseHas('subscribers', [
            'email' => $email,
            'is_active' => true,
        ]);
    }
}

