<?php

namespace App\Services;

use App\Mail\NewsletterWelcomeMail;
use App\Models\Subscriber;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class NewsletterSubscriptionService
{
    /**
     * Generate secure HMAC unsubscribe URL.
     */
    public static function generateUnsubscribeUrl(string $email): string
    {
        $appKey = config('app.key') ?: throw new \RuntimeException('APP_KEY must be configured.');
        $token = hash_hmac('sha256', strtolower(trim($email)), $appKey);

        return url('/unsubscribe?email=' . urlencode($email) . '&token=' . $token);
    }

    /**
     * Generate secure HMAC resubscribe URL.
     */
    public static function generateResubscribeUrl(string $email): string
    {
        $appKey = config('app.key') ?: throw new \RuntimeException('APP_KEY must be configured.');
        $token = hash_hmac('sha256', strtolower(trim($email)), $appKey);

        return url('/resubscribe?email=' . urlencode($email) . '&token=' . $token);
    }

    /**
     * Verify HMAC token against email.
     */
    public static function verifyToken(string $email, string $token): bool
    {
        $appKey = config('app.key') ?: throw new \RuntimeException('APP_KEY must be configured.');
        $expected = hash_hmac('sha256', strtolower(trim($email)), $appKey);

        return hash_equals($expected, $token);
    }

    /**
     * Send welcome confirmation email to subscriber.
     */
    public static function sendWelcomeEmail(string $email): void
    {
        try {
            $unsubscribeUrl = self::generateUnsubscribeUrl($email);
            Mail::to($email)->send(new NewsletterWelcomeMail($email, $unsubscribeUrl));
            Log::info("Newsletter welcome confirmation email dispatched to {$email}");
        } catch (\Throwable $e) {
            Log::warning("Failed to dispatch newsletter welcome email to {$email}: " . $e->getMessage());
        }
    }

    /**
     * Unsubscribe user by email.
     */
    public static function unsubscribe(string $email): bool
    {
        $updated = Subscriber::where('email', strtolower(trim($email)))
            ->update(['is_active' => false]);

        Cache::forget('admin_dashboard_stats');

        return $updated > 0;
    }

    /**
     * Resubscribe user by email.
     */
    public static function resubscribe(string $email): bool
    {
        $subscriber = Subscriber::firstOrCreate(
            ['email' => strtolower(trim($email))],
            ['source' => 'resubscribe', 'is_active' => true]
        );

        $subscriber->is_active = true;
        $subscriber->save();

        Cache::forget('admin_dashboard_stats');

        return true;
    }
}
