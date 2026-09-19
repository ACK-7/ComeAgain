<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormMail;
use App\Services\TelegramAlertService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        $validated = $request->validate([
            'firstName' => 'required|string|max:50',
            'lastName' => 'required|string|max:50',
            'email' => 'required|email|max:150',
            'phone' => 'nullable|string|max:20',
            'message' => 'required|string|max:2000',
        ]);

        // 1. Dispatch Email Notification
        try {
            Mail::to('info@comeagaintoursandtravels.com')->send(new ContactFormMail($validated));
        } catch (\Throwable $e) {
            Log::error('Email notification failed: ' . $e->getMessage());
        }

        // 2. Dispatch Instant Telegram Push Alert
        try {
            TelegramAlertService::sendSafariInquiryAlert($validated);
        } catch (\Throwable $e) {
            Log::error('Telegram alert dispatch error: ' . $e->getMessage());
        }

        return response()->json([
            'message' => 'Message sent successfully.'
        ]);
    }

    /**
     * Handle newsletter subscription.
     */
    public function subscribe(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|max:150',
        ]);

        $email = strtolower(trim($validated['email']));

        // 1. Persist to MySQL Database
        try {
            \App\Models\Subscriber::firstOrCreate(
                ['email' => $email],
                [
                    'source' => $request->input('source', 'blog'),
                    'ip_address' => $request->ip(),
                    'is_active' => true,
                ]
            );
        } catch (\Throwable $e) {
            Log::error('Failed to save subscriber to database: ' . $e->getMessage());
        }

        // 2. Persist to storage/app/subscribers.json (redundant backup)
        try {
            $storageDir = storage_path('app');
            if (!is_dir($storageDir)) {
                @mkdir($storageDir, 0755, true);
            }
            $storagePath = $storageDir . '/subscribers.json';
            $subscribers = [];
            if (file_exists($storagePath)) {
                $content = file_get_contents($storagePath);
                $subscribers = json_decode($content, true) ?: [];
            }

            // Check if already subscribed
            $exists = collect($subscribers)->contains(function ($sub) use ($email) {
                return ($sub['email'] ?? '') === $email;
            });

            if (!$exists) {
                $subscribers[] = [
                    'email' => $email,
                    'subscribed_at' => now()->toIso8601String(),
                    'ip' => $request->ip(),
                ];
                file_put_contents($storagePath, json_encode($subscribers, JSON_PRETTY_PRINT));
            }
        } catch (\Throwable $e) {
            Log::error('Failed to persist newsletter subscriber backup: ' . $e->getMessage());
        }

        // 2. Dispatch Instant Telegram Push Alert
        try {
            TelegramAlertService::sendNewsletterSubscriptionAlert($email);
        } catch (\Throwable $e) {
            Log::error('Newsletter Telegram alert dispatch error: ' . $e->getMessage());
        }

        return response()->json([
            'message' => 'Thank you for subscribing to our Safari Journal! Welcome aboard.'
        ]);
    }
}
