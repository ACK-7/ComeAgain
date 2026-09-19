<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class TelegramAlertService
{
    /**
     * Send a formatted inquiry/booking notification to Telegram.
     */
    public static function sendSafariInquiryAlert(array $data): bool
    {
        $token = config('services.telegram.bot_token');
        $chatId = config('services.telegram.chat_id');

        if (empty($token) || $token === 'PASTE_YOUR_TELEGRAM_BOT_TOKEN_HERE') {
            Log::info('Telegram notification skipped: TELEGRAM_BOT_TOKEN is not configured in .env.');
            return false;
        }

        $firstName = htmlspecialchars($data['firstName'] ?? '');
        $lastName = htmlspecialchars($data['lastName'] ?? '');
        $email = htmlspecialchars($data['email'] ?? 'Not provided');
        $phone = $data['phone'] ?? 'Not provided';
        $message = htmlspecialchars($data['message'] ?? '');

        // Prepare clean phone for 1-tap WhatsApp link
        $cleanPhone = preg_replace('/[^0-9]/', '', $phone);
        $whatsappLink = !empty($cleanPhone) ? "https://wa.me/{$cleanPhone}" : null;

        $text = "🚨 <b>NEW COME AGAIN SAFARI INQUIRY!</b>\n\n";
        $text .= "👤 <b>Client:</b> {$firstName} {$lastName}\n";
        $text .= "📧 <b>Email:</b> {$email}\n";
        $text .= "📞 <b>Phone:</b> " . htmlspecialchars($phone) . "\n\n";
        $text .= "📝 <b>Inquiry Details:</b>\n<i>{$message}</i>\n";

        if ($whatsappLink) {
            $text .= "\n💬 <b>Quick Response:</b>\n";
            $text .= "👉 <a href=\"{$whatsappLink}\">Chat with Client on WhatsApp</a>";
        }

        try {
            $url = "https://api.telegram.org/bot{$token}/sendMessage";
            $response = Http::timeout(10)->post($url, [
                'chat_id' => $chatId,
                'text' => $text,
                'parse_mode' => 'HTML',
                'disable_web_page_preview' => true,
            ]);

            if ($response->successful()) {
                Log::info('Telegram safari alert sent successfully to Chat ID: ' . $chatId);
                return true;
            } else {
                Log::warning('Telegram API error response: ' . $response->body());
                return false;
            }
        } catch (\Throwable $e) {
            Log::error('Failed to send Telegram alert: ' . $e->getMessage());
            return false;
        }
    }

    /**
     * Send instant notification when someone subscribes to the newsletter.
     */
    public static function sendNewsletterSubscriptionAlert(string $email): bool
    {
        $token = config('services.telegram.bot_token');
        $chatId = config('services.telegram.chat_id');

        if (empty($token) || $token === 'PASTE_YOUR_TELEGRAM_BOT_TOKEN_HERE') {
            Log::info('Telegram notification skipped: TELEGRAM_BOT_TOKEN is not configured in .env.');
            return false;
        }

        $cleanEmail = htmlspecialchars($email);
        $date = date('Y-m-d H:i:s T');

        $text = "📬 <b>NEW COME AGAIN NEWSLETTER SUBSCRIBER!</b>\n\n";
        $text .= "📧 <b>Email:</b> {$cleanEmail}\n";
        $text .= "📅 <b>Date:</b> {$date}\n";
        $text .= "📍 <b>Source:</b> Safari Journal / Blog\n\n";
        $text .= "✨ <i>Added to subscriber list for safari stories & travel updates.</i>";

        try {
            $url = "https://api.telegram.org/bot{$token}/sendMessage";
            $response = Http::timeout(10)->post($url, [
                'chat_id' => $chatId,
                'text' => $text,
                'parse_mode' => 'HTML',
                'disable_web_page_preview' => true,
            ]);

            if ($response->successful()) {
                Log::info("Telegram newsletter alert sent for: {$email}");
                return true;
            } else {
                Log::warning('Telegram API error response: ' . $response->body());
                return false;
            }
        } catch (\Throwable $e) {
            Log::error('Failed to send Telegram newsletter alert: ' . $e->getMessage());
            return false;
        }
    }
}
