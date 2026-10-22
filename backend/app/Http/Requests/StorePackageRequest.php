<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePackageRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation(): void
    {
        $this->merge([
            'slug' => $this->slug ? \Illuminate\Support\Str::slug($this->slug) : null,
            'duration_days' => $this->duration_days ?? $this->durationDays ?? 1,
            'duration_nights' => $this->duration_nights ?? $this->durationNights ?? 0,
            'price_usd' => $this->price_usd ?? $this->priceUSD ?? 0,
            'price_ugx' => $this->price_ugx ?? $this->priceUGX ?? null,
            'featured' => filter_var($this->featured, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ?? false,
            'status' => $this->status ?? 'published',
            'sort_order' => $this->sort_order ?? $this->sortOrder ?? 0,
        ]);
    }

    public function rules(): array
    {
        return [
            'id' => 'nullable|string|max:64',
            'slug' => 'nullable|string|max:191|unique:safari_packages,slug',
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:100',
            'duration_days' => 'required|integer|min:1',
            'duration_nights' => 'nullable|integer|min:0',
            'price' => 'nullable|string|max:50',
            'price_usd' => 'nullable|numeric|min:0',
            'price_ugx' => 'nullable|integer|min:0',
            'per' => 'nullable|string|max:50',
            'wildlife' => 'nullable|array',
            'highlights' => 'nullable|array',
            'image' => 'nullable|string',
            'featured' => 'boolean',
            'status' => 'required|string|in:published,draft,archived',
            'details' => 'nullable|array',
            'sort_order' => 'nullable|integer',
        ];
    }
}
