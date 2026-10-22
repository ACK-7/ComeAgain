<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePackageRequest;
use App\Http\Requests\UpdatePackageRequest;
use App\Http\Resources\SafariPackageResource;
use App\Models\SafariPackage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class PackageController extends Controller
{
    /**
     * Display a listing of packages for the admin dashboard.
     */
    public function index(Request $request): JsonResponse
    {
        $hasFilters = $request->filled('q') || $request->filled('category') || $request->filled('status') || $request->filled('featured');

        // Fast cached path when no filters are applied
        if (!$hasFilters) {
            $data = Cache::remember('safari_packages_admin_all_v2', 300, function () {
                $packages = SafariPackage::orderBy('featured', 'desc')
                    ->orderBy('sort_order', 'asc')
                    ->orderBy('created_at', 'desc')
                    ->get();

                return SafariPackageResource::collection($packages)->resolve();
            });

            return response()->json([
                'success' => true,
                'count' => count($data),
                'data' => $data,
            ]);
        }

        // Dynamic filtered query
        $query = SafariPackage::query();

        if ($request->filled('q')) {
            $search = strtolower(trim($request->input('q')));
            $query->where(function ($q) use ($search) {
                $q->whereRaw('LOWER(title) LIKE ?', ["%{$search}%"])
                  ->orWhereRaw('LOWER(category) LIKE ?', ["%{$search}%"])
                  ->orWhereRaw('LOWER(price) LIKE ?', ["%{$search}%"]);
            });
        }

        if ($request->filled('category') && $request->input('category') !== 'all') {
            $query->where('category', $request->input('category'));
        }

        if ($request->filled('status') && $request->input('status') !== 'all') {
            $query->where('status', $request->input('status'));
        }

        if ($request->filled('featured')) {
            $query->where('featured', filter_var($request->input('featured'), FILTER_VALIDATE_BOOLEAN));
        }

        $packages = $query->orderBy('featured', 'desc')
            ->orderBy('sort_order', 'asc')
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json([
            'success' => true,
            'count' => $packages->count(),
            'data' => SafariPackageResource::collection($packages),
        ]);
    }

    /**
     * Public endpoint for listing published packages with sub-5ms caching.
     */
    public function publicIndex(Request $request): JsonResponse
    {
        $category = $request->query('category');
        $cacheKey = $category ? "safari_packages_pub_{$category}" : 'safari_packages_pub_all';

        $data = Cache::remember($cacheKey, 60, function () use ($category) {
            $query = SafariPackage::published()
                ->orderBy('featured', 'desc')
                ->orderBy('sort_order', 'asc')
                ->orderBy('created_at', 'desc');

            if ($category && $category !== 'All') {
                $query->where('category', $category);
            }

            return SafariPackageResource::collection($query->get())->resolve();
        });

        return response()->json([
            'success' => true,
            'count' => count($data),
            'data' => $data,
        ]);
    }

    /**
     * Display the specified safari package by ID or slug.
     */
    public function show(Request $request, string $idOrSlug): JsonResponse
    {
        $package = SafariPackage::where('id', $idOrSlug)
            ->orWhere('slug', $idOrSlug)
            ->first();
        if (!$request->is('api/admin/*') && $package?->status !== 'published') $package = null;

        if (!$package) {
            return response()->json([
                'success' => false,
                'message' => "Safari package '{$idOrSlug}' not found.",
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => new SafariPackageResource($package),
        ]);
    }

    /**
     * Store a newly created safari package.
     */
    public function store(StorePackageRequest $request): JsonResponse
    {
        $data = $request->validated();

        $package = SafariPackage::create($data);

        return response()->json([
            'success' => true,
            'message' => 'Safari package created successfully.',
            'data' => new SafariPackageResource($package),
        ], 201);
    }

    /**
     * Update the specified safari package.
     */
    public function update(UpdatePackageRequest $request, string $id): JsonResponse
    {
        $package = SafariPackage::find($id);

        if (!$package) {
            return response()->json([
                'success' => false,
                'message' => "Safari package with ID '{$id}' not found.",
            ], 404);
        }

        $package->update($request->validated());

        return response()->json([
            'success' => true,
            'message' => 'Safari package updated successfully.',
            'data' => new SafariPackageResource($package->fresh()),
        ]);
    }

    /**
     * Remove the specified safari package from storage.
     */
    public function destroy(string $id): JsonResponse
    {
        $package = SafariPackage::find($id);

        if (!$package) {
            return response()->json([
                'success' => false,
                'message' => "Safari package with ID '{$id}' not found.",
            ], 404);
        }

        $package->delete();

        return response()->json([
            'success' => true,
            'message' => 'Safari package deleted successfully.',
        ]);
    }

    /**
     * Toggle the featured status of a package.
     */
    public function toggleFeatured(string $id): JsonResponse
    {
        $package = SafariPackage::find($id);

        if (!$package) {
            return response()->json([
                'success' => false,
                'message' => "Safari package with ID '{$id}' not found.",
            ], 404);
        }

        $package->featured = !$package->featured;
        $package->save();

        return response()->json([
            'success' => true,
            'message' => "Package '{$package->title}' featured status set to " . ($package->featured ? 'featured' : 'standard') . '.',
            'data' => new SafariPackageResource($package),
        ]);
    }
}
