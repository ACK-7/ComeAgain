<?php

namespace App\Console\Commands;

use App\Services\TelegramAlertService;
use Illuminate\Console\Command;

class TestTelegramAlert extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'telegram:test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send a test safari booking alert to the configured Telegram chat';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Sending test safari alert to Telegram...');

        $testData = [
            'firstName' => 'David',
            'lastName' => 'Miller',
            'email' => 'david.m@example.com',
            'phone' => '+14155552671',
            'message' => 'TEST ALERT: Looking to book the 3-Day Gorilla Trekking in Bwindi for 2 adults in July 2026. Please confirm availability and permit slots.',
        ];

        $result = TelegramAlertService::sendSafariInquiryAlert($testData);

        if ($result) {
            $this->info('✓ Test safari alert sent successfully! Check your Telegram app.');
        } else {
            $this->error('✗ Failed to send alert. Please check TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env.');
        }

        return $result ? Command::SUCCESS : Command::FAILURE;
    }
}
