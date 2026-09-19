<?php

namespace App\Console\Commands;

use App\Services\GeminiNewsService;
use Illuminate\Console\Command;

class FetchTourismNewsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tourism:fetch-news {--seed-only : Only seed curated official baseline news}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Ingests and AI-curates latest Uganda tourism news for marquee and blog';

    /**
     * Execute the console command.
     */
    public function handle(GeminiNewsService $service)
    {
        $this->info('Starting Uganda Tourism News curation pipeline...');

        if ($this->option('seed-only')) {
            $count = $service->seedCuratedNews();
            $this->info("Successfully seeded {$count} verified tourism news items.");
            return Command::SUCCESS;
        }

        $result = $service->fetchAndProcessViaGemini();
        $this->info("Result: " . json_encode($result, JSON_PRETTY_PRINT));

        return Command::SUCCESS;
    }
}
