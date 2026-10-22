<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdatePackageRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation(): void
    {
        $mergeData = [];

        if ($this->has('slug') && $this->slug) {
            $mergeData['slug'] = \Illuminate\Support\Str::slug($this->slug);
        }

        if ($this->has('durationDays') && !$this->has('duration_days')) {
            $mergeData['duration_days'] = $this->durationDays;
        }

        if ($this->has('durationNights') && !$this->has('duration_nights')) {
            $mergeData['duration_nights'] = $this->durationNights;
        }

        if ($this->has('priceUSD') && !$this->has('price_usd')) {
            $mergeData['price_usd'] = $this->priceUSD;
        }

        if ($this->has('priceUGX') && !$this->has('price_ugx')) {
            $mergeData['price_ugx'] = $this->priceUGX;
        }

        if ($this->has('featured')) {
            $mergeData['featured'] = filter_var($this->featured, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ?? false;
        }

        if ($this->has('sortOrder') && !$this->has('sort_order')) {
            $mergeData['sort_order'] = $this->sortOrder;
        }

        if (!empty($mergeData)) {
            $this->merge($mergeData);
        }
    }

    public function rules(): array
    {
        $packageId = $this->route('package') ?? $this->route('id') ?? $this->id;

        return [
            'slug' => ['nullable', 'string', 'max:191', Rule::unique('safari_packages', 'slug')->ignore($packageId, 'id')],
            'title' => 'sometimes|required|string|max:255',
            'category' => 'sometimes|required|string|max:100',
            'duration_days' => 'sometimes|required|integer|min:1',
            'duration_nights' => 'nullable|integer|min:0',
            'price' => 'nullable|string|max:50',
            'price_usd' => 'nullable|numeric|min:0',
            'price_ugx' => 'nullable|integer|min:0',
            'per' => 'nullable|string|max:50',
            'wildlife' => 'nullable|array',
            'highlights' => 'nullable|array',
            'image' => 'nullable|string',
            'featured' => 'nullable|boolean',
            'status' => 'nullable|string|in:published,draft,archived',
            'details' => 'nullable|array',
            'sort_order' => 'nullable|integer',
        ];
    }
}
