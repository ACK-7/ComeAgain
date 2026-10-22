<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreInquiryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'client_name' => 'required_without:clientName|string|max:255',
            'clientName' => 'sometimes|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:50',
            'country' => 'nullable|string|max:100',
            'source' => 'nullable|string|max:50',
            'package_interest' => 'nullable|string|max:255',
            'packageInterest' => 'nullable|string|max:255',
            'travel_date' => 'nullable|date',
            'travelDate' => 'nullable|date',
            'duration_days' => 'nullable|integer|min:1',
            'durationDays' => 'nullable|integer|min:1',
            'travelers_count' => 'nullable|integer|min:1',
            'travelersCount' => 'nullable|integer|min:1',
            'estimated_budget' => 'nullable|string|max:100',
            'estimatedBudget' => 'nullable|string|max:100',
            'status' => 'nullable|in:new,new_lead,contacted,itinerary_sent,confirmed,completed,lost',
            'message' => 'nullable|string|max:5000',
            'assigned_to' => 'nullable|string|max:255',
            'assignedTo' => 'nullable|string|max:255',
        ];
    }
}
