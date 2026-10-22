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
            'message' => 'required|string|max:5000',
            'source' => 'nullable|in:contact_form,safari_planner,package_booking,custom_quote,car_hire',
            'country' => 'nullable|string|max:100',
            'packageInterest' => 'nullable|string|max:255',
            'travelDate' => 'nullable|date',
            'durationDays' => 'nullable|integer|min:1|max:365',
            'travelersCount' => 'nullable|integer|min:1|max:1000',
            'estimatedBudget' => 'nullable|string|max:100',
        ]);

        // Persist first: notification outages must never lose a customer inquiry.
        $inquiry = \App\Models\Inquiry::create([
            'client_name' => trim($validated['firstName'].' '.$validated['lastName']),
            'email' => strtolower($validated['email']), 'phone' => $validated['phone'] ?? null,
            'message' => $validated['message'], 'status' => 'new', 'notes' => [],
            'source' => $validated['source'] ?? 'contact_form', 'country' => $validated['country'] ?? null,
            'package_interest' => $validated['packageInterest'] ?? null,
            'travel_date' => $validated['travelDate'] ?? null, 'duration_days' => $validated['durationDays'] ?? null,
            'travelers_count' => $validated['travelersCount'] ?? 1, 'estimated_budget' => $validated['estimatedBudget'] ?? null,
        ]);
        \Illuminate\Support\Facades\Cache::forget('admin_dashboard_stats');

        // 1. Dispatch Email Notification
        try {
            Mail::to(\App\Models\ManagedContent::where('kind', 'settings')->where('key', 'business')->first()?->data['primaryEmail'] ?? 'info@comeagaintoursandtravels.com')->send(new ContactFormMail($validated));
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
            'message' => 'Your inquiry has been received.', 'reference' => $inquiry->id
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

        $subscriber = \App\Models\Subscriber::firstOrCreate(
            ['email' => $email], ['source' => 'website', 'ip_address' => $request->ip(), 'is_active' => true]
        );
        if ($subscriber->wasRecentlyCreated) \App\Services\NewsletterSubscriptionService::sendWelcomeEmail($email);
        \Illuminate\Support\Facades\Cache::forget('admin_dashboard_stats');

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
