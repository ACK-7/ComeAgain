<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ReviewController extends Controller
{
    /**
     * Default verified TripAdvisor reviews for Come Again Tours and Travels.
     */
    protected array $defaultReviews = [
        [
            'id' => 1,
            'author' => 'Twenyumize R',
            'date' => 'May 2024',
            'headline' => 'Family DayOut',
            'text' => 'It was such an exceptional experience with all the wildlife adventures and waterfall experiences..... my family created memories that will last for a lifetime and hope to visit again soon. Thanks for the exceptional services, comeagaintoursandtravel has got you covered all the way!',
            'rating' => 5,
        ],
        [
            'id' => 2,
            'author' => 'Bwindi community V (Agaba Adams)',
            'date' => 'April 2024',
            'headline' => 'My Experience in Murchison N.P.',
            'text' => 'I had a safari trip with Come Again Tour and Travel. It was an amazing experience. My priority was to see lions since i had missed them in my previous trips. Our journey started with Ziwa Rhinos, and we headed to Muchison. We spotted a female lion on that day, and on the second day i was very lucky to see a pride of lions and a leopard. Guide Isah did a great job to make my dreams come true....',
            'rating' => 5,
            'guideMentioned' => 'Isah',
        ],
        [
            'id' => 3,
            'author' => 'Dagmar P',
            'date' => 'January 2024',
            'headline' => 'Unforgettable memories of Uganda',
            'text' => 'Our trip to Uganda was amazing. We spent there 12 beautiful days. Thanks to our guide, Issa, we have unforgettable memories of this country. I think this country has a lot to offer and it\'s really Pearl of Africa.',
            'rating' => 5,
            'guideMentioned' => 'Issa',
        ],
        [
            'id' => 4,
            'author' => 'MarikaZem',
            'date' => 'December 2023',
            'headline' => 'Uganda has beautiful nature',
            'text' => 'During our family vacation, we really enjoyed the beautiful nature of green Uganda, we definitely recommend a stay of at least 7 to 10 days. The guide was nice, flexible and helpful.',
            'rating' => 5,
        ],
        [
            'id' => 5,
            'author' => 'Couples Traveler',
            'date' => 'March 2024',
            'headline' => 'Worth single penny',
            'text' => 'Hakam is very honest and kind. I have really enjoyed the balloon ride. Really enjoyed the package with included lunch and the private transport to the hotel.',
            'rating' => 5,
            'guideMentioned' => 'Hakam',
        ],
        [
            'id' => 6,
            'author' => 'Nanyunja L',
            'date' => 'March 2024',
            'headline' => 'amazing ever',
            'text' => 'it was really amazing and gave me and my family the best memorable tour with the best tour guides and a very well trained driver. we really had a great time. thank you so much come again safaris',
            'rating' => 5,
        ],
        [
            'id' => 7,
            'author' => 'Turaf N',
            'date' => 'February 2024',
            'headline' => 'Incredible 10-day Safari Tour in Uganda',
            'text' => 'I and my friends had an amazing 10 days Safari Tour in Uganda with Come Again Tour and Travel Team. Issa is such a friendly guy! Very knowledgeable about wildlife movements, patient, and always made sure we were comfortable. I highly recommended Issa for Safari Tour. Looking forward to traveling with him again.',
            'rating' => 5,
            'guideMentioned' => 'Issa',
        ],
        [
            'id' => 8,
            'author' => 'Jtripaf',
            'date' => 'November 2023',
            'headline' => 'Honest, Loyal & Truly Hassle-Free Journey',
            'text' => 'Yes, the tour was excellent, the driver was so cooperative, customer understanding, hassle-free journey, feel like your own, very honest and loyal.',
            'rating' => 5,
        ],
        [
            'id' => 9,
            'author' => 'John B',
            'date' => 'April 2024',
            'headline' => 'Very good',
            'text' => 'Hospitable staff with the best customer service',
            'rating' => 5,
        ],
    ];

    /**
     * Return reviews with live TripAdvisor Content API sync capability.
     */
    public function index(): JsonResponse
    {
        $apiKey = env('TRIPADVISOR_API_KEY');
        $locationId = env('TRIPADVISOR_LOCATION_ID', '23932600');

        if (!empty($apiKey) && !empty($locationId)) {
            try {
                $response = Http::timeout(5)
                    ->withHeaders(['accept' => 'application/json'])
                    ->get("https://api.content.tripadvisor.com/api/v1/location/{$locationId}/reviews?key={$apiKey}&language=en");

                if ($response->successful()) {
                    $apiData = $response->json('data', []);
                    if (!empty($apiData)) {
                        $mapped = [];
                        foreach ($apiData as $idx => $r) {
                            $mapped[] = [
                                'id' => $r['id'] ?? ($idx + 100),
                                'author' => $r['user']['username'] ?? 'Verified Guest',
                                'date' => !empty($r['published_date']) ? date('F Y', strtotime($r['published_date'])) : 'Recent',
                                'headline' => $r['title'] ?? 'Wonderful Safari Experience',
                                'text' => $r['text'] ?? '',
                                'rating' => $r['rating'] ?? 5,
                                'tripadvisorReviewUrl' => $r['url'] ?? null,
                            ];
                        }
                        return response()->json([
                            'success' => true,
                            'source' => 'tripadvisor_live_api',
                            'data' => $mapped,
                        ]);
                    }
                }
            } catch (\Throwable $e) {
                Log::warning('TripAdvisor API fetch failed: ' . $e->getMessage());
            }
        }

        return response()->json([
            'success' => true,
            'source' => 'verified_cached',
            'data' => $this->defaultReviews,
        ]);
    }
}
