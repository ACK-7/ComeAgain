<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class SafariPackage extends Model
{
    use HasFactory;

    protected $table = 'safari_packages';

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'slug',
        'title',
        'category',
        'duration_days',
        'duration_nights',
        'price',
        'price_usd',
        'price_ugx',
        'per',
        'wildlife',
        'highlights',
        'image',
        'featured',
        'status',
        'details',
        'sort_order',
    ];

    protected $casts = [
        'duration_days' => 'integer',
        'duration_nights' => 'integer',
        'price_usd' => 'float',
        'price_ugx' => 'integer',
        'featured' => 'boolean',
        'wildlife' => 'array',
        'highlights' => 'array',
        'details' => 'array',
        'sort_order' => 'integer',
    ];

    /**
     * Boot model events for UUID generation, slugging, and cache invalidation.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function (self $model) {
            if (empty($model->id)) {
                $model->id = (string) Str::uuid();
            }

            if (empty($model->slug)) {
                $model->slug = Str::slug($model->title);
            }
        });

        static::saved(function () {
            self::purgeCache();
        });

        static::deleted(function () {
            self::purgeCache();
        });
    }

    /**
     * Purge package caches across public and admin tiers.
     */
    public static function purgeCache(): void
    {
        Cache::forget('safari_packages_admin_all');
        Cache::forget('safari_packages_admin_all_v2');
        Cache::forget('safari_packages_pub_all');
        Cache::forget('safari_packages_public_published');
        Cache::forget('safari_packages_featured');
        Cache::forget('admin_dashboard_stats');

        $categories = [
            'Wildlife Safaris',
            'Gorilla & Primate',
            'Multi-Park Circuits',
            'Adventure & Active',
            'Cultural & Heritage',
            'Fly-In & Premium',
            'Birding Safaris',
            'East Africa & Beyond',
        ];
        foreach ($categories as $cat) {
            Cache::forget("safari_packages_pub_{$cat}");
        }
    }

    /**
     * Scope query to published packages only.
     */
    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }

    /**
     * Scope query to featured packages.
     */
    public function scopeFeatured($query)
    {
        return $query->where('featured', true);
    }

    /**
     * Scope query by category.
     */
    public function scopeCategory($query, string $category)
    {
        return $query->where('category', $category);
    }
}
