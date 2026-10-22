<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ManagedContent extends Model
{
    protected $table = 'managed_content';
    protected $fillable = ['kind', 'key', 'data'];
    protected $casts = ['data' => 'array'];
}
