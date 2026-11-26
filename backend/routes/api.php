<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\TourismNewsController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\Admin\DashboardController;

use App\Http\Controllers\Admin\InquiryController;

use App\Http\Controllers\Admin\PackageController;

Route::post('/contact', [ContactController::class, 'submit'])->middleware('throttle:10,1');
Route::post('/subscribe', [ContactController::class, 'subscribe'])->middleware('throttle:10,1');
Route::get('/tourism-news', [TourismNewsController::class, 'index']);



// Public Safari Packages
Route::get('/packages', [PackageController::class, 'publicIndex']);
Route::get('/packages/{idOrSlug}', [PackageController::class, 'show']);

// Admin Dashboard & CRM APIs
Route::prefix('admin')->middleware(\App\Http\Middleware\AdminAccess::class)->group(function () {
    Route::get('/dashboard/stats', [DashboardController::class, 'stats']);
    Route::get('/dashboard/recent-inquiries', [DashboardController::class, 'recentInquiries'])->middleware(\App\Http\Middleware\AdminAccess::class.':safari_consultant');

    Route::middleware(\App\Http\Middleware\AdminAccess::class.':safari_consultant')->group(function () {
    // Inquiries CRM
    Route::get('/inquiries', [InquiryController::class, 'index']);
    Route::post('/inquiries', [InquiryController::class, 'store']);
    
    Route::get('/inquiries/{id}', [InquiryController::class, 'show']);
    Route::put('/inquiries/{id}', [InquiryController::class, 'update']);
    Route::patch('/inquiries/{id}/status', [InquiryController::class, 'updateStatus']);
    Route::post('/inquiries/{id}/notes', [InquiryController::class, 'addNote']);
    Route::delete('/inquiries/{id}', [InquiryController::class, 'destroy']);

    });
    Route::middleware(\App\Http\Middleware\AdminAccess::class.':content_editor')->group(function () {
    // Safari Packages & Day-by-Day Itineraries
    Route::get('/packages', [PackageController::class, 'index']);
    Route::post('/packages', [PackageController::class, 'store']);
    Route::get('/packages/{id}', [PackageController::class, 'show']);
    Route::put('/packages/{id}', [PackageController::class, 'update']);
    Route::patch('/packages/{id}/toggle-featured', [PackageController::class, 'toggleFeatured']);
    Route::delete('/packages/{id}', [PackageController::class, 'destroy']);

    });
    Route::middleware(\App\Http\Middleware\AdminAccess::class.':safari_consultant')->group(function () {
    // Newsletter Subscribers
    Route::get('/subscribers', [\App\Http\Controllers\Admin\SubscriberController::class, 'index']);
    Route::post('/subscribers', [\App\Http\Controllers\Admin\SubscriberController::class, 'store']);
    Route::patch('/subscribers/{id}/toggle', [\App\Http\Controllers\Admin\SubscriberController::class, 'toggleActive']);
    Route::delete('/subscribers/{id}', [\App\Http\Controllers\Admin\SubscriberController::class, 'destroy']);
    });
});

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\ContentController;
use App\Http\Middleware\AdminAccess;
Route::post('/admin/login', [AuthController::class, 'login'])->middleware('throttle:20,1');
Route::get('/settings', [ContentController::class, 'settings']);
Route::get('/gallery', [\App\Http\Controllers\Admin\GalleryController::class, 'publicIndex']);
foreach (['blog', 'fleet', 'reviews'] as $kind) {
    Route::get('/'.$kind, fn () => app(ContentController::class)->publicIndex($kind));
}
Route::prefix('admin')->middleware(AdminAccess::class)->group(function () {
    Route::post('/media', [\App\Http\Controllers\Admin\MediaController::class, 'store']);
    Route::middleware(AdminAccess::class.':content_editor')->group(function () {
        Route::get('/gallery', [\App\Http\Controllers\Admin\GalleryController::class, 'index']);
        Route::put('/gallery', [\App\Http\Controllers\Admin\GalleryController::class, 'save']);
    });
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::middleware(AdminAccess::class.':content_editor')->group(function () {
        Route::get('/news', [ContentController::class, 'news']);
        Route::patch('/news/{id}', [ContentController::class, 'updateNews']);
    });
    foreach (['blog' => 'content_editor', 'reviews' => 'content_editor', 'fleet' => 'safari_consultant'] as $kind => $role) {
        Route::middleware(AdminAccess::class.':'.$role)->group(function () use ($kind) {
            Route::get('/'.$kind, fn (Request $request) => app(ContentController::class)->index($request, $kind));
            Route::post('/'.$kind, fn (Request $request) => app(ContentController::class)->save($request, $kind));
            Route::put('/'.$kind.'/{key}', fn (Request $request, string $key) => app(ContentController::class)->save($request, $kind, $key));
            Route::delete('/'.$kind.'/{key}', fn (string $key) => app(ContentController::class)->destroy($kind, $key));
        });
    }
    Route::middleware(AdminAccess::class.':super_admin')->group(function () {
        Route::get('/staff', [\App\Http\Controllers\Admin\StaffController::class, 'index']);
        Route::post('/staff', [\App\Http\Controllers\Admin\StaffController::class, 'save']);
        Route::put('/staff/{id}', [\App\Http\Controllers\Admin\StaffController::class, 'save']);
        Route::delete('/staff/{id}', [\App\Http\Controllers\Admin\StaffController::class, 'destroy']);
        Route::get('/settings', [ContentController::class, 'settings']);
        Route::put('/settings', [ContentController::class, 'saveSettings']);
        Route::get('/health', [ContentController::class, 'health']);
        Route::post('/test-telegram', [ContentController::class, 'testTelegram'])->middleware('throttle:2,1');
    });
});

Route::get('/media/{filename}', [\App\Http\Controllers\Admin\MediaController::class, 'show'])->where('filename', '[A-Za-z0-9]+\.(jpg|jpeg|png|webp|mp4|webm)');
