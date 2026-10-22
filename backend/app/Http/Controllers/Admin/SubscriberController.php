<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Subscriber;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class SubscriberController extends Controller
{
    /**
     * List all subscribers with optional search.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Subscriber::query()->orderBy('created_at', 'desc');

        if ($request->filled('q')) {
            $q = $request->q;
            $query->where(function ($sub) use ($q) {
                $sub->where('email', 'like', "%{$q}%")
                    ->orWhere('source', 'like', "%{$q}%");
            });
        }

        $subscribers = $query->get()->map(function (Subscriber $s) {
            return [
                'id' => (string) $s->id,
                'email' => $s->email,
                'source' => $s->source ?? 'website',
                'isActive' => (bool) $s->is_active,
                'subscribedAt' => $s->created_at ? $s->created_at->toISOString() : now()->toISOString(),
                'ipAddress' => $s->ip_address,
            ];
        });

        return response()->json([
            'success' => true,
            'count' => $subscribers->count(),
            'data' => $subscribers,
        ]);
    }

    /**
     * Add a subscriber from the admin dashboard.
     */
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'email' => 'required|email|max:255',
            'source' => 'nullable|string|max:100',
        ]);

        $email = strtolower(trim($request->email));
        $subscriber = Subscriber::firstOrCreate(
            ['email' => $email],
            [
                'source' => $request->source ?: 'admin_manual',
                'is_active' => true,
                'ip_address' => $request->ip(),
            ]
        );

        Cache::forget('admin_dashboard_stats');

        // Dispatch Welcome Safari Journal Email with Unsubscribe link
        \App\Services\NewsletterSubscriptionService::sendWelcomeEmail($email);

        return response()->json([
            'success' => true,
            'message' => 'Subscriber registered successfully.',
            'data' => [
                'id' => (string) $subscriber->id,
                'email' => $subscriber->email,
                'source' => $subscriber->source,
                'isActive' => (bool) $subscriber->is_active,
                'subscribedAt' => $subscriber->created_at ? $subscriber->created_at->toISOString() : now()->toISOString(),
                'ipAddress' => $subscriber->ip_address,
            ],
        ], 201);
    }

    /**
     * Toggle subscriber active status.
     */
    public function toggleActive(string $id): JsonResponse
    {
        $subscriber = Subscriber::findOrFail($id);
        $subscriber->is_active = !$subscriber->is_active;
        $subscriber->save();

        Cache::forget('admin_dashboard_stats');

        return response()->json([
            'success' => true,
            'message' => 'Subscriber status updated.',
            'data' => [
                'id' => (string) $subscriber->id,
                'email' => $subscriber->email,
                'source' => $subscriber->source,
                'isActive' => (bool) $subscriber->is_active,
                'subscribedAt' => $subscriber->created_at ? $subscriber->created_at->toISOString() : now()->toISOString(),
                'ipAddress' => $subscriber->ip_address,
            ],
        ]);
    }

    /**
     * Delete a subscriber.
     */
    public function destroy(string $id): JsonResponse
    {
        $subscriber = Subscriber::findOrFail($id);
        $subscriber->delete();

        Cache::forget('admin_dashboard_stats');

        return response()->json([
            'success' => true,
            'message' => 'Subscriber removed successfully.',
        ]);
    }
}
