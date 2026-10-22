<?php

namespace Tests\Feature;

use App\Models\Inquiry;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class InquiryApiTest extends TestCase
{
    use RefreshDatabase;
    protected function setUp(): void
    {
        parent::setUp();
        $this->authenticateAdmin();
    }

    public function test_can_list_all_inquiries(): void
    {
        Inquiry::create([
            'id' => 'inq_test1',
            'client_name' => 'John Doe',
            'email' => 'john@example.com',
            'phone' => '+256700000000',
            'country' => 'Uganda',
            'source' => 'contact_form',
            'package_interest' => 'Bwindi Gorilla Trek',
            'status' => 'new_lead',
        ]);

        $response = $this->getJson('/api/admin/inquiries');

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
                        'clientName',
                        'email',
                        'phone',
                        'country',
                        'status',
                    ],
                ],
            ]);
    }

    public function test_can_filter_inquiries_by_status(): void
    {
        Inquiry::create([
            'id' => 'inq_lead',
            'client_name' => 'Alice Lead',
            'email' => 'alice@example.com',
            'status' => 'new_lead',
        ]);

        Inquiry::create([
            'id' => 'inq_confirmed',
            'client_name' => 'Bob Confirmed',
            'email' => 'bob@example.com',
            'status' => 'confirmed',
        ]);

        $response = $this->getJson('/api/admin/inquiries?status=confirmed');

        $response->assertStatus(200);
        $data = $response->json('data');
        $this->assertCount(1, $data);
        $this->assertEquals('Bob Confirmed', $data[0]['clientName']);
    }

    public function test_can_create_new_inquiry_with_valid_data(): void
    {
        $payload = [
            'clientName' => 'David Hasselhoff',
            'email' => 'david@safari.com',
            'phone' => '+14155551234',
            'country' => 'United States',
            'packageInterest' => '3-Day Murchison Falls Expedition',
            'travelDate' => '2026-11-20',
            'durationDays' => 3,
            'travelersCount' => 2,
            'estimatedBudget' => '$3,200',
            'message' => 'Looking for luxury lodging with game drives.',
            'source' => 'package_booking',
        ];

        $response = $this->postJson('/api/admin/inquiries', $payload);

        $response->assertStatus(201)
            ->assertJson([
                'success' => true,
                'data' => [
                    'clientName' => 'David Hasselhoff',
                    'email' => 'david@safari.com',
                    'travelersCount' => 2,
                ],
            ]);

        $this->assertDatabaseHas('inquiries', [
            'email' => 'david@safari.com',
            'client_name' => 'David Hasselhoff',
        ]);
    }

    public function test_fails_to_create_inquiry_with_invalid_email(): void
    {
        $payload = [
            'clientName' => 'Invalid User',
            'email' => 'not-a-valid-email-address',
        ];

        $response = $this->postJson('/api/admin/inquiries', $payload);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['email']);
    }

    public function test_can_update_inquiry_status(): void
    {
        $inquiry = Inquiry::create([
            'id' => 'inq_status_test',
            'client_name' => 'Clara Oswald',
            'email' => 'clara@tardis.co.uk',
            'status' => 'new_lead',
        ]);

        $response = $this->patchJson("/api/admin/inquiries/{$inquiry->id}/status", [
            'status' => 'confirmed',
        ]);

        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'data' => [
                    'status' => 'confirmed',
                ],
            ]);

        $this->assertDatabaseHas('inquiries', [
            'id' => $inquiry->id,
            'status' => 'confirmed',
        ]);
    }

    public function test_can_add_team_notes_to_inquiry(): void
    {
        $inquiry = Inquiry::create([
            'id' => 'inq_note_test',
            'client_name' => 'Peter Capaldi',
            'email' => 'peter@bbc.co.uk',
            'status' => 'new_lead',
            'notes' => [],
        ]);

        $response = $this->postJson("/api/admin/inquiries/{$inquiry->id}/notes", [
            'text' => 'Gorilla permits booked via UWA portal.',
            'author' => 'Ronald Crisen',
        ]);

        $response->assertStatus(200);
        $notes = $response->json('data.notes');
        $this->assertCount(1, $notes);
        $this->assertEquals('Gorilla permits booked via UWA portal.', $notes[0]['text']);
        $this->assertEquals('Ronald Crisen', $notes[0]['author']);
    }

    public function test_can_delete_inquiry(): void
    {
        $inquiry = Inquiry::create([
            'id' => 'inq_delete_me',
            'client_name' => 'Temp Traveler',
            'email' => 'temp@example.com',
            'status' => 'lost',
        ]);

        $response = $this->deleteJson("/api/admin/inquiries/{$inquiry->id}");

        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
            ]);

        $this->assertDatabaseMissing('inquiries', [
            'id' => 'inq_delete_me',
        ]);
    }
}
