<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TourismNews extends Model
{
    use HasFactory;

    protected $table = 'tourism_news';

    protected $fillable = [
        'title',
        'summary',
        'content',
        'category',
        'emoji',
        'source_name',
        'source_url',
        'image_url',
        'published_at',
        'is_active',
        'is_featured',
    ];

    protected $casts = [
        'published_at' => 'datetime',
        'is_active' => 'boolean',
        'is_featured' => 'boolean',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true)->orderBy('published_at', 'desc');
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_active', true)->where('is_featured', true)->orderBy('published_at', 'desc');
    }
}
