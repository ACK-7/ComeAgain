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
        return response()->file(Storage::disk('public')->path('media/'.$filename), ['X-Content-Type-Options' => 'nosniff', 'Cache-Control' => 'public, max-age=86400']);
    }

    public function store(Request $request)
    {
        $field = $request->hasFile('file') ? 'file' : 'image';
        $request->validate([$field => $field === 'image'
            ? 'required|file|image|mimes:jpg,jpeg,png,webp|max:5120|dimensions:max_width=12000,max_height=12000'
            : 'required|file|mimes:jpg,jpeg,png,webp,mp4,webm|max:51200']);
        $file = $request->file($field);
        if (str_starts_with($file->getMimeType(), 'image/')) {
            $request->validate([$field => 'image|max:5120|dimensions:max_width=12000,max_height=12000']);
        }
        $path = $file->store('media', 'public');
        abort_unless(is_string($path) && $path !== '', 503, 'Image storage is unavailable.');
        return response()->json(['success' => true, 'data' => ['url' => url('/api/media/'.basename($path))]], 201);
    }
}
