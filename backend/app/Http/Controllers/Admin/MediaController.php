<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MediaController extends Controller
{
    public function show(string $filename)
    {
        abort_unless(Storage::disk('public')->exists('media/'.$filename), 404);
        return Storage::disk('public')->response('media/'.$filename, null, ['X-Content-Type-Options' => 'nosniff', 'Cache-Control' => 'public, max-age=86400']);
    }

    public function store(Request $request)
    {
        $request->validate(['image' => 'required|file|image|mimes:jpg,jpeg,png,webp|max:5120|dimensions:max_width=12000,max_height=12000']);
        $path = $request->file('image')->store('media', 'public');
        abort_unless(is_string($path) && $path !== '', 503, 'Image storage is unavailable.');
        return response()->json(['success' => true, 'data' => ['url' => url('/api/media/'.basename($path))]], 201);
    }
}
