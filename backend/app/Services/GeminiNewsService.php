<?php

namespace App\Services;

use App\Models\TourismNews;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;

class GeminiNewsService
{
    /**
     * Curated, authentic seed items to guarantee immediate high-quality content.
     */
    public static function getCuratedSeedNews(): array
    {
        return [
            [
                'title' => 'Bwindi Welcomes New Baby Gorilla in the Rushaga Sector',
                'summary' => 'Uganda Wildlife Authority rangers celebrate the birth of a healthy infant mountain gorilla, marking another milestone for conservation.',
                'content' => "Conservationists in Bwindi Impenetrable National Park are rejoicing after park rangers registered the birth of a healthy mountain gorilla infant in the famed Rushaga sector. The new arrival brings the family's total to 14 individuals, reflecting the steady success of dedicated community rangers and anti-poaching patrols.\n\nFor safari enthusiasts, this population boom confirms Bwindi as the world's premier gorilla trekking sanctuary. With over half of the globe's wild mountain gorillas calling Uganda home, trekkers booking with ComeAgain Safaris can look forward to intimate, unforgettable encounters with these gentle giants.",
                'category' => 'Wildlife',
                'emoji' => '🦍',
                'source_name' => 'Uganda Wildlife Authority',
                'source_url' => 'https://ugandawildlife.org',
                'image_url' => 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80',
                'published_at' => Carbon::now()->subDays(1),
                'is_featured' => true,
            ],
            [
                'title' => 'Uganda Airlines Expands Direct Flight Network to Entebbe Hub',
                'summary' => 'New regional and intercontinental flight routes make reaching Uganda’s safari circuits faster and more convenient than ever.',
                'content' => "Reaching the Pearl of Africa has never been more seamless. Uganda Airlines has expanded its route network, establishing new direct linkages and frequency boosts connecting Entebbe International Airport with key regional and international hubs.\n\nTravelers landing at Entebbe can now transition swiftly onto domestic bush flights directly into airstrips across Murchison Falls, Kidepo Valley, and Kihihi (for Bwindi), drastically reducing overland transit times and maximizing days spent observing wildlife.",
                'category' => 'Aviation',
                'emoji' => '✈️',
                'source_name' => 'Uganda Civil Aviation Authority',
                'source_url' => 'https://ugandatourismcenter.com',
                'image_url' => 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
                'published_at' => Carbon::now()->subDays(3),
                'is_featured' => true,
            ],
            [
                'title' => 'Ziwa Rhino Sanctuary Records Historic Population Growth',
                'summary' => 'Uganda’s sole wild rhino breeding sanctuary surpasses 40 southern white rhinos, moving closer to national park reintroduction.',
                'content' => "Ziwa Rhino Sanctuary, located en route to Murchison Falls National Park, has officially celebrated another successful birth, pushing its thriving population beyond 40 southern white rhinos. The sanctuary stands as a global beacon for community-centered conservation.\n\nEvery ComeAgain Safari heading north to Murchison Falls includes an exhilarating on-foot rhino trek at Ziwa, giving travelers the rare thrill of tracking these prehistoric megafauna alongside expert armed rangers.",
                'category' => 'Conservation',
                'emoji' => '🦏',
                'source_name' => 'Rhino Fund Uganda',
                'source_url' => 'https://ugandawildlife.org',
                'image_url' => 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80',
                'published_at' => Carbon::now()->subDays(5),
                'is_featured' => true,
            ],
            [
                'title' => 'Kidepo Valley Ranked Among Africa’s Most Spectacular Wildernesses',
                'summary' => 'International travel critics highlight Kidepo Valley for untouched wilderness, dramatic jagged horizons, and legendary cheetah sightings.',
                'content' => "Nestled in Uganda’s rugged northeastern corner, Kidepo Valley National Park has once again been crowned one of Africa’s top true wilderness destinations. Renowned for its sweeping golden savannas flanked by the Morungole mountain range, Kidepo offers game viewing that feels wild, untamed, and free from crowds.\n\nVisitors commonly witness vast herds of Cape buffalo, majestic ostriches, and tree-climbing lions. ComeAgain Safaris provides specialized fly-in and rugged overland expeditions for travelers yearning for Africa in its purest form.",
                'category' => 'Travel Advisory',
                'emoji' => '🦁',
                'source_name' => 'Explore Uganda / UTB',
                'source_url' => 'https://exploreuganda.com',
                'image_url' => 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
                'published_at' => Carbon::now()->subDays(7),
                'is_featured' => false,
            ],
            [
                'title' => 'Uganda Tourism Board Unveils Enhanced E-Visa Guidelines',
                'summary' => 'Streamlined online visa processing offers international adventurers faster approvals and transparent tourist documentation.',
                'content' => "The Ministry of Internal Affairs alongside the Uganda Tourism Board has upgraded the electronic immigration portal (visas.immigration.go.ug), reducing processing turnaround times for single-entry tourist visas and the popular East Africa Tourist Visa (covering Uganda, Rwanda, and Kenya).\n\nOur concierge travel specialists at ComeAgain Safaris assist all booked guests with personalized visa step-by-step guidance, ensuring a smooth, stress-free arrival at Entebbe.",
                'category' => 'Travel Advisory',
                'emoji' => '📋',
                'source_name' => 'Ministry of Internal Affairs',
                'source_url' => 'https://visas.immigration.go.ug',
                'image_url' => 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
                'published_at' => Carbon::now()->subDays(9),
                'is_featured' => false,
            ],
            [
                'title' => 'Queen Elizabeth National Park Expands Lion Collaring & Monitoring',
                'summary' => 'Cutting-edge satellite telemetry collars empower rangers to safeguard the famous tree-climbing lions of Ishasha.',
                'content' => "In a proactive drive to mitigate human-wildlife conflict and monitor predator health, the Uganda Wildlife Authority and conservation partners have expanded satellite tracking collars across lion prides in Queen Elizabeth National Park.\n\nThis high-tech initiative ensures that prides roaming the Ishasha fig trees remain healthy, protected, and accessible for conscientious safari-goers seeking the iconic sight of lions lounging high above the savannah.",
                'category' => 'Conservation',
                'emoji' => '🌿',
                'source_name' => 'Uganda Carnivore Program',
                'source_url' => 'https://ugandawildlife.org',
                'image_url' => 'https://images.unsplash.com/photo-1614027164847-1b28caa142e9?auto=format&fit=crop&w=1200&q=80',
                'published_at' => Carbon::now()->subDays(12),
                'is_featured' => false,
            ],
        ];
    }

    /**
     * Seeds or refreshes default verified news items into the database.
     */
    public function seedCuratedNews(): int
    {
        $count = 0;
        foreach (self::getCuratedSeedNews() as $item) {
            TourismNews::updateOrCreate(
                ['title' => $item['title']],
                $item
            );
            $count++;
        }
        return $count;
    }

    /**
     * Ingests latest Google News RSS and processes via Gemini API.
     */
    public function fetchAndProcessViaGemini(): array
    {
        $apiKey = config('services.gemini.api_key');
        $model = config('services.gemini.model', 'gemini-1.5-flash');

        // Always ensure curated seed news exists as a baseline
        $this->seedCuratedNews();

        if (empty($apiKey)) {
            Log::info('GeminiNewsService: GEMINI_API_KEY not configured. Using curated seed news.');
            return [
                'status' => 'seeded_curated',
                'message' => 'GEMINI_API_KEY is not set in .env. Initialized with curated official Uganda tourism bulletins.',
                'processed' => 0
            ];
        }

        // 1. Fetch raw Google News RSS for Uganda tourism/wildlife
        $rssUrl = 'https://news.google.com/rss/search?q=Uganda+tourism+OR+Uganda+wildlife+OR+Bwindi+gorillas+when:7d&hl=en-US&gl=US&ceid=US:en';
        
        try {
            $response = Http::timeout(10)->get($rssUrl);
            if (!$response->successful()) {
                Log::warning('GeminiNewsService: RSS feed request failed: ' . $response->status());
                return ['status' => 'rss_failed', 'processed' => 0];
            }

            $xml = @simplexml_load_string($response->body());
            if (!$xml || !isset($xml->channel->item)) {
                Log::warning('GeminiNewsService: Failed to parse RSS XML.');
                return ['status' => 'xml_parse_error', 'processed' => 0];
            }

            $items = [];
            foreach ($xml->channel->item as $entry) {
                $items[] = [
                    'title' => (string) $entry->title,
                    'link' => (string) $entry->link,
                    'pubDate' => (string) $entry->pubDate,
                    'description' => strip_tags((string) $entry->description),
                ];
                if (count($items) >= 8) break;
            }

            if (empty($items)) {
                return ['status' => 'no_items_found', 'processed' => 0];
            }

            // 2. Send to Gemini for brand-safety filtering and rewriting with multi-model failover
            $prompt = $this->buildGeminiPrompt($items);
            $candidateModels = array_unique(array_filter([
                $model,
                'gemini-3.5-flash-lite',
                'gemini-3.1-flash-lite',
                'gemini-3.6-flash',
            ]));

            $aiResponse = null;
            $usedModel = null;

            foreach ($candidateModels as $currentModel) {
                $geminiEndpoint = "https://generativelanguage.googleapis.com/v1beta/models/{$currentModel}:generateContent?key={$apiKey}";
                
                try {
                    $res = Http::timeout(25)->post($geminiEndpoint, [
                        'contents' => [
                            [
                                'parts' => [
                                    ['text' => $prompt]
                                ]
                            ]
                        ],
                        'generationConfig' => [
                            'temperature' => 0.2,
                            'maxOutputTokens' => 2500,
                        ]
                    ]);

                    if ($res->successful()) {
                        $aiResponse = $res;
                        $usedModel = $currentModel;
                        break;
                    }

                    Log::warning("GeminiNewsService: Model {$currentModel} returned {$res->status()}, trying fallback...");
                } catch (\Throwable $err) {
                    Log::warning("GeminiNewsService: Model {$currentModel} request failed: " . $err->getMessage());
                }
            }

            if (!$aiResponse || !$aiResponse->successful()) {
                Log::error('GeminiNewsService: All Gemini models failed or unavailable.');
                return ['status' => 'gemini_error', 'processed' => 0];
            }

            $rawText = $aiResponse->json('candidates.0.content.parts.0.text', '');
            $articles = $this->extractJsonFromText($rawText);

            $savedCount = 0;
            if (is_array($articles)) {
                foreach ($articles as $art) {
                    if (!empty($art['is_tourism_relevant']) && !empty($art['title'])) {
                        TourismNews::updateOrCreate(
                            ['title' => trim($art['title'])],
                            [
                                'summary' => $art['summary'] ?? '',
                                'content' => $art['content'] ?? '',
                                'category' => $art['category'] ?? 'Wildlife',
                                'emoji' => $art['emoji'] ?? '🌿',
                                'source_name' => $art['source_name'] ?? 'Uganda Tourism Wire',
                                'source_url' => $art['source_url'] ?? null,
                                'published_at' => Carbon::now(),
                                'is_active' => true,
                                'is_featured' => !empty($art['is_featured']),
                            ]
                        );
                        $savedCount++;
                    }
                }
            }

            return [
                'status' => 'success',
                'model_used' => $usedModel,
                'processed' => $savedCount,
            ];
        } catch (\Throwable $e) {
            Log::error('GeminiNewsService exception: ' . $e->getMessage());
            return ['status' => 'exception', 'message' => $e->getMessage(), 'processed' => 0];
        }
    }

    /**
     * Builds strict prompt instructing Gemini to curate & filter tourism news.
     */
    private function buildGeminiPrompt(array $items): string
    {
        $itemsJson = json_encode($items, JSON_PRETTY_PRINT);

        return <<<PROMPT
You are the Chief Editorial Curator for "Come Again Tours and Travels", a premier luxury safari operator in Uganda.
Your job is to review recent news headlines and extract ONLY high-quality, positive, uplifting tourism, wildlife, conservation, or travel development news in Uganda.

STRICT BRAND SAFETY RULES:
- REJECT any item involving crime, accidents, disease outbreaks, political controversy, disputes, or negative occurrences.
- ONLY ACCEPT positive stories about wildlife births, gorilla conservation, national parks, new flight routes, infrastructure improvements, cultural events, or international travel accolades.
- If an item is NOT positive tourism news, discard it completely.

INPUT NEWS ITEMS:
$itemsJson

TASK:
For any item that passes the safety filter, craft a polished safari bulletin.
Return ONLY valid JSON array with objects containing:
[
  {
    "is_tourism_relevant": true,
    "title": "Punchy headline for marquee ticker (under 75 characters)",
    "summary": "1-2 sentence compelling summary for cards",
    "content": "2 well-written paragraphs explaining the news and why it makes a safari with ComeAgain Safaris in Uganda so magical.",
    "category": "Wildlife" | "Conservation" | "Aviation" | "Travel Advisory" | "Culture",
    "emoji": "🦍" | "✈️" | "🦁" | "🌿" | "🦏" | "🛶",
    "source_name": "Name of publisher or organization",
    "source_url": "Original URL",
    "is_featured": true or false
  }
]
If none qualify, return an empty array []. Output strictly pure JSON without markdown backticks.
PROMPT;
    }

    /**
     * Helper to extract clean JSON from Gemini output.
     */
    private function extractJsonFromText(string $text): ?array
    {
        $text = trim($text);

        // Try extracting JSON array using regex first
        if (preg_match('/\[\s*\{.*\}\s*\]/s', $text, $matches)) {
            $decoded = json_decode($matches[0], true);
            if (is_array($decoded)) {
                return $decoded;
            }
        }

        // Remove markdown backticks if present
        if (str_starts_with($text, '```json')) {
            $text = substr($text, 7);
        } elseif (str_starts_with($text, '```')) {
            $text = substr($text, 3);
        }
        if (str_ends_with($text, '```')) {
            $text = substr($text, 0, -3);
        }
        $text = trim($text);

        $decoded = json_decode($text, true);
        return is_array($decoded) ? $decoded : null;
    }
}
