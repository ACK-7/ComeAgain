<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SafariPackageResource extends JsonResource
{
    /**
     * Transform the resource into an array matching TypeScript SafariPackageItem.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'slug' => $this->slug,
            'title' => $this->title,
            'category' => $this->category,
            'durationDays' => $this->duration_days,
            'durationNights' => $this->duration_nights,
            'price' => $this->price,
            'priceUSD' => (float) $this->price_usd,
            'priceUGX' => $this->price_ugx ? (int) $this->price_ugx : null,
            'per' => $this->per,
            'wildlife' => $this->wildlife ?? [],
            'highlights' => $this->highlights ?? [],
            'image' => $this->image,
            'featured' => (bool) $this->featured,
            'status' => $this->status,
            'destination' => !empty($this->details['location']) ? $this->details['location'] : 'Uganda National Parks',
            'description' => $this->details['description'] ?? ("Experience {$this->title} with Come Again Tours & Travels."),
            'bestFor' => $this->details['bestFor'] ?? $this->category,
            'details' => $this->details ?? (object) [],
            'sortOrder' => (int) $this->sort_order,
            'createdAt' => $this->created_at?->toIso8601String(),
            'updatedAt' => $this->updated_at?->toIso8601String(),
        ];
    }
}
