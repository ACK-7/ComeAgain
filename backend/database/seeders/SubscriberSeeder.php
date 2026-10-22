<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Subscriber;

class SubscriberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (Subscriber::count() > 0) {
            return;
        }

        $seeds = [
            [
                'email' => 'traveler.john@gmail.com',
                'source' => 'blog',
                'is_active' => true,
                'ip_address' => '102.134.45.12',
                'created_at' => '2026-10-14 11:20:00',
            ],
            [
                'email' => 'safari.enthusiast@yahoo.co.uk',
                'source' => 'footer',
                'is_active' => true,
                'ip_address' => '86.15.22.90',
                'created_at' => '2026-10-12 09:14:00',
            ],
            [
                'email' => 'nature.lover99@gmail.com',
                'source' => 'gorilla-permits-guide',
                'is_active' => true,
                'ip_address' => '195.24.110.4',
                'created_at' => '2026-10-10 16:45:00',
            ],
            [
                'email' => 'murchison.explorer@outlook.com',
                'source' => 'home_modal',
                'is_active' => false,
                'ip_address' => '41.210.150.32',
                'created_at' => '2026-09-28 14:00:00',
            ],
            [
                'email' => 'wildlife.photographer@zoho.com',
                'source' => 'safari_planner',
                'is_active' => true,
                'ip_address' => '105.112.88.19',
                'created_at' => '2026-10-05 08:30:00',
            ],
        ];

        foreach ($seeds as $s) {
            Subscriber::create($s);
        }
    }
}
