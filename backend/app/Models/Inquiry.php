<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Inquiry extends Model
{
    use HasFactory;

    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'id',
        'client_name',
        'email',
        'phone',
        'country',
        'source',
        'package_interest',
        'travel_date',
        'duration_days',
        'travelers_count',
        'estimated_budget',
        'status',
        'message',
        'notes',
        'assigned_to',
    ];

    protected $casts = [
        'notes' => 'array',
        'travel_date' => 'date',
        'duration_days' => 'integer',
        'travelers_count' => 'integer',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->id)) {
                $model->id = 'inq_' . Str::lower(Str::random(10));
            }
            if (empty($model->notes)) {
                $model->notes = [];
            }
        });
    }

    /**
     * Format into the frontend camelCase structure expected by Admin UI.
     */
    public function toFrontendArray(): array
    {
        return [
            'id' => $this->id,
            'clientName' => $this->client_name,
            'email' => $this->email,
            'phone' => $this->phone ?? '',
            'country' => $this->country ?? '',
            'source' => $this->source,
            'packageInterest' => $this->package_interest,
            'travelDate' => $this->travel_date ? $this->travel_date->format('Y-m-d') : null,
            'durationDays' => $this->duration_days,
            'travelersCount' => $this->travelers_count ?? 1,
            'estimatedBudget' => $this->estimated_budget,
            'status' => $this->status === 'new_lead' ? 'new' : $this->status,
            'message' => $this->message ?? '',
            'notes' => $this->notes ?? [],
            'assignedTo' => $this->assigned_to,
            'createdAt' => $this->created_at ? $this->created_at->toISOString() : now()->toISOString(),
            'updatedAt' => $this->updated_at ? $this->updated_at->toISOString() : now()->toISOString(),
        ];
    }
}
