<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Inquiry;

class InquirySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (Inquiry::count() > 0) {
            return;
        }

        $seeds = [
            [
                'id' => 'inq_001',
                'client_name' => 'Alexander Wright',
                'email' => 'alex.wright@gmail.com',
                'phone' => '+44 7911 123456',
                'country' => 'United Kingdom',
                'source' => 'safari_planner',
                'package_interest' => '3-Day Bwindi Gorilla Trekking Fly-in Safari',
                'travel_date' => '2026-11-14',
                'duration_days' => 3,
                'travelers_count' => 2,
                'estimated_budget' => '$3,800 - $4,500',
                'status' => 'itinerary_sent',
                'message' => 'Looking for a private 3-day fly-in gorilla trek from Entebbe to Kihihi. We prefer luxury lodge accommodation.',
                'notes' => [
                    [
                        'id' => 'n_1',
                        'author' => 'Ronald Crisen',
                        'text' => 'Sent customized quote including 2 UWA Gorilla Permits ($800 each) and Aerolink flight vouchers.',
                        'createdAt' => '2026-10-14T09:30:00Z',
                    ]
                ],
                'assigned_to' => 'Ronald Crisen',
                'created_at' => '2026-10-12 14:22:00',
            ],
            [
                'id' => 'inq_002',
                'client_name' => 'Dr. Elena Rostova',
                'email' => 'elena.rostova@travelbio.de',
                'phone' => '+49 170 555 4321',
                'country' => 'Germany',
                'source' => 'contact_form',
                'package_interest' => '10-Day Complete Pearl of Uganda Grand Wildlife Safari',
                'travel_date' => '2026-12-05',
                'duration_days' => 10,
                'travelers_count' => 4,
                'estimated_budget' => '$12,000 - $14,000',
                'status' => 'new',
                'message' => 'Family of 4 planning a comprehensive wildlife, chimpanzee tracking in Kibale, and mountain gorilla safari.',
                'notes' => [],
                'assigned_to' => 'Sarah Namubiru',
                'created_at' => '2026-10-15 08:15:00',
            ],
            [
                'id' => 'inq_003',
                'client_name' => 'Mark van der Merwe',
                'email' => 'mark@capetownadventures.co.za',
                'phone' => '+27 82 444 9876',
                'country' => 'South Africa',
                'source' => 'car_hire',
                'package_interest' => 'Self-Drive 4x4 Land Cruiser with Rooftop Tent',
                'travel_date' => '2026-10-28',
                'duration_days' => 14,
                'travelers_count' => 2,
                'estimated_budget' => '$2,200',
                'status' => 'confirmed',
                'message' => 'Requesting 14-day car hire for Murchison, Kidepo Valley and Sipi Falls. Need satellite GPS and camping gear.',
                'notes' => [
                    [
                        'id' => 'n_2',
                        'author' => 'Sarah Namubiru',
                        'text' => 'Deposit received. Land Cruiser V8 (UAX 892C) reserved and inspected.',
                        'createdAt' => '2026-10-13T16:00:00Z',
                    ]
                ],
                'assigned_to' => 'Sarah Namubiru',
                'created_at' => '2026-10-13 16:00:00',
            ],
            [
                'id' => 'inq_004',
                'client_name' => 'Chloe Bennett',
                'email' => 'chloe.bennett@nycphoto.org',
                'phone' => '+1 212 555 7890',
                'country' => 'United States',
                'source' => 'package_booking',
                'package_interest' => '5-Day Queen Elizabeth & Bwindi Primates Expedition',
                'travel_date' => '2027-01-10',
                'duration_days' => 5,
                'travelers_count' => 1,
                'estimated_budget' => '$2,950',
                'status' => 'contacted',
                'message' => 'Solo photographer eager to photograph the tree-climbing lions of Ishasha and mountain gorillas.',
                'notes' => [],
                'assigned_to' => 'Ronald Crisen',
                'created_at' => '2026-10-11 11:20:00',
            ],
            [
                'id' => 'inq_005',
                'client_name' => 'Jean-Luc Moreau',
                'email' => 'jl.moreau@orange.fr',
                'phone' => '+33 6 12 34 56 78',
                'country' => 'France',
                'source' => 'whatsapp',
                'package_interest' => 'Custom Birding & Chimpanzee Habituation',
                'travel_date' => '2026-11-20',
                'duration_days' => 7,
                'travelers_count' => 2,
                'estimated_budget' => '$4,200',
                'status' => 'new',
                'message' => 'WhatsApp lead: Couple looking for Shoebill tracking in Mabamba swamp and Chimpanzee habituation experience.',
                'notes' => [],
                'assigned_to' => 'David Ochieng',
                'created_at' => '2026-10-15 09:40:00',
            ],
        ];

        foreach ($seeds as $s) {
            Inquiry::create($s);
        }
    }
}
