<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreInquiryRequest;
use App\Http\Requests\UpdateInquiryStatusRequest;
use App\Http\Requests\AddInquiryNoteRequest;
use App\Models\Inquiry;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class InquiryController extends Controller
{
    /**
     * List inquiries with optional search and status filtering.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Inquiry::query()->orderBy('created_at', 'desc');

        if ($request->filled('status') && $request->status !== 'all') {
            $status = $request->status;
            // Handle both 'new' and 'new_lead' aliases
            if ($status === 'new_lead' || $status === 'new') {
                $query->whereIn('status', ['new', 'new_lead']);
            } else {
                $query->where('status', $status);
            }
        }

        if ($request->filled('q')) {
            $q = $request->q;
            $query->where(function ($sub) use ($q) {
                $sub->where('client_name', 'like', "%{$q}%")
                    ->orWhere('email', 'like', "%{$q}%")
                    ->orWhere('phone', 'like', "%{$q}%")
                    ->orWhere('package_interest', 'like', "%{$q}%")
                    ->orWhere('country', 'like', "%{$q}%");
            });
        }

        $inquiries = $query->get()->map(fn (Inquiry $inq) => $inq->toFrontendArray());

        return response()->json([
            'success' => true,
            'count' => $inquiries->count(),
            'data' => $inquiries,
        ]);
    }

    /**
     * Get a single inquiry.
     */
    public function show(string $id): JsonResponse
    {
        $inquiry = Inquiry::findOrFail($id);

        return response()->json([
            'success' => true,
            'data' => $inquiry->toFrontendArray(),
        ]);
    }

    /**
     * Store a newly created inquiry.
     */
    public function store(StoreInquiryRequest $request): JsonResponse
    {
        $id = $request->id ?: ('inq_' . Str::lower(Str::random(10)));
        $clientName = $request->client_name ?: $request->clientName;
        $packageInterest = $request->package_interest ?: $request->packageInterest;
        $travelDate = $request->travel_date ?: $request->travelDate;
        $durationDays = $request->duration_days ?: $request->durationDays;
        $travelersCount = $request->travelers_count ?: $request->travelersCount ?: 1;
        $estimatedBudget = $request->estimated_budget ?: $request->estimatedBudget;
        $assignedTo = $request->assigned_to ?: $request->assignedTo;
        $status = $request->status ?: 'new_lead';

        $inquiry = Inquiry::create([
            'id' => $id,
            'client_name' => $clientName,
            'email' => $request->email,
            'phone' => $request->phone,
            'country' => $request->country,
            'source' => $request->source ?: 'contact_form',
            'package_interest' => $packageInterest,
            'travel_date' => $travelDate,
            'duration_days' => $durationDays,
            'travelers_count' => $travelersCount,
            'estimated_budget' => $estimatedBudget,
            'status' => $status,
            'message' => $request->message,
            'notes' => $request->notes ?: [],
            'assigned_to' => $assignedTo,
        ]);

        Cache::forget('admin_dashboard_stats');

        return response()->json([
            'success' => true,
            'message' => 'Inquiry registered successfully.',
            'data' => $inquiry->toFrontendArray(),
        ], 201);
    }

    /**
     * Update an inquiry's details.
     */
    public function update(Request $request, string $id): JsonResponse
    {
        $inquiry = Inquiry::findOrFail($id);

        $request->validate([
            'clientName' => 'sometimes|required|string|max:255', 'client_name' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|email|max:255', 'phone' => 'nullable|string|max:50',
            'country' => 'nullable|string|max:100', 'status' => 'sometimes|in:new,new_lead,contacted,itinerary_sent,confirmed,completed,lost',
            'packageInterest' => 'nullable|string|max:255', 'package_interest' => 'nullable|string|max:255',
            'travelDate' => 'nullable|date', 'travel_date' => 'nullable|date',
            'durationDays' => 'nullable|integer|min:1', 'duration_days' => 'nullable|integer|min:1',
            'message' => 'nullable|string|max:5000',
            'notes' => 'sometimes|array|max:500', 'notes.*.text' => 'required|string|max:5000',
            'notes.*.author' => 'required|string|max:255', 'notes.*.id' => 'required|string|max:100',
            'notes.*.createdAt' => 'required|date', 'assignedTo' => 'nullable|string|max:255',
            'travelersCount' => 'sometimes|integer|min:1', 'estimatedBudget' => 'nullable|string|max:100',
        ]);
        $data = [];
        foreach (['notes' => 'notes', 'assignedTo' => 'assigned_to', 'travelersCount' => 'travelers_count', 'estimatedBudget' => 'estimated_budget'] as $input => $column) {
            if ($request->has($input)) $data[$column] = $request->input($input);
        }
        if ($request->has('client_name') || $request->has('clientName')) {
            $data['client_name'] = $request->client_name ?: $request->clientName;
        }
        if ($request->has('email')) {
            $data['email'] = $request->email;
        }
        if ($request->has('phone')) {
            $data['phone'] = $request->phone;
        }
        if ($request->has('country')) {
            $data['country'] = $request->country;
        }
        if ($request->has('status')) {
            $data['status'] = $request->status;
        }
        if ($request->has('package_interest') || $request->has('packageInterest')) {
            $data['package_interest'] = $request->package_interest ?: $request->packageInterest;
        }
        if ($request->has('travel_date') || $request->has('travelDate')) {
            $data['travel_date'] = $request->travel_date ?: $request->travelDate;
        }
        if ($request->has('duration_days') || $request->has('durationDays')) {
            $data['duration_days'] = $request->duration_days ?: $request->durationDays;
        }
        if ($request->has('travelers_count') || $request->has('travelersCount')) {
            $data['travelers_count'] = $request->travelers_count ?: $request->travelersCount;
        }
        if ($request->has('estimated_budget') || $request->has('estimatedBudget')) {
            $data['estimated_budget'] = $request->estimated_budget ?: $request->estimatedBudget;
        }
        if ($request->has('assigned_to') || $request->has('assignedTo')) {
            $data['assigned_to'] = $request->assigned_to ?: $request->assignedTo;
        }
        if ($request->has('message')) {
            $data['message'] = $request->message;
        }
        if ($request->has('notes')) {
            $data['notes'] = $request->notes;
        }

        $inquiry->update($data);
        Cache::forget('admin_dashboard_stats');

        return response()->json([
            'success' => true,
            'message' => 'Inquiry updated successfully.',
            'data' => $inquiry->fresh()->toFrontendArray(),
        ]);
    }

    /**
     * Update inquiry status.
     */
    public function updateStatus(UpdateInquiryStatusRequest $request, string $id): JsonResponse
    {
        $inquiry = Inquiry::findOrFail($id);
        $inquiry->update(['status' => $request->status]);

        Cache::forget('admin_dashboard_stats');

        return response()->json([
            'success' => true,
            'message' => 'Status updated.',
            'data' => $inquiry->fresh()->toFrontendArray(),
        ]);
    }

    /**
     * Add internal team note to an inquiry.
     */
    public function addNote(AddInquiryNoteRequest $request, string $id): JsonResponse
    {
        $inquiry = Inquiry::findOrFail($id);

        $notes = $inquiry->notes ?: [];
        $newNote = [
            'id' => 'note_' . Str::lower(Str::random(8)),
            'author' => $request->author ?: 'Admin Consultant',
            'text' => $request->text,
            'createdAt' => now()->toISOString(),
        ];
        $notes[] = $newNote;

        $inquiry->update(['notes' => $notes]);

        return response()->json([
            'success' => true,
            'message' => 'Note appended.',
            'data' => $inquiry->fresh()->toFrontendArray(),
        ]);
    }

    /**
     * Delete an inquiry.
     */
    public function destroy(string $id): JsonResponse
    {
        $inquiry = Inquiry::findOrFail($id);
        $inquiry->delete();

        Cache::forget('admin_dashboard_stats');

        return response()->json([
            'success' => true,
            'message' => 'Inquiry deleted successfully.',
        ]);
    }
}
