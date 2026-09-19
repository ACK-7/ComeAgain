<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/contact', [\App\Http\Controllers\ContactController::class, 'submit'])
    ->withoutMiddleware([\Illuminate\Foundation\Http\Middleware\ValidateCsrfToken::class]);

Route::post('/subscribe', [\App\Http\Controllers\ContactController::class, 'subscribe'])
    ->withoutMiddleware([\Illuminate\Foundation\Http\Middleware\ValidateCsrfToken::class]);

Route::get('/tourism-news', [\App\Http\Controllers\TourismNewsController::class, 'index']);
Route::get('/api/tourism-news', [\App\Http\Controllers\TourismNewsController::class, 'index']);
Route::get('/reviews', [\App\Http\Controllers\ReviewController::class, 'index']);
Route::get('/api/reviews', [\App\Http\Controllers\ReviewController::class, 'index']);

// Temporary route to clear cache without terminal access
Route::get('/clear', function() {
    \Illuminate\Support\Facades\Artisan::call('route:clear');
    \Illuminate\Support\Facades\Artisan::call('route:cache');
    \Illuminate\Support\Facades\Artisan::call('config:clear');
    \Illuminate\Support\Facades\Artisan::call('config:cache');
    return "Cache and Routes have been successfully cleared and rebuilt! You can now safely delete this route from routes/web.php";
});

// One-click cPanel deployment runner: runs migrations, tests Telegram, seeds AI news, and optimizes caches
Route::get('/run-setup-migrations', function() {
    try {
        // 1. Run migrations
        \Illuminate\Support\Facades\Artisan::call('migrate', ['--force' => true]);
        $migrationOutput = \Illuminate\Support\Facades\Artisan::output();

        // 2. Test Telegram Alert
        \Illuminate\Support\Facades\Artisan::call('telegram:test');
        $telegramOutput = \Illuminate\Support\Facades\Artisan::output();

        // 3. Fetch initial AI Tourism News
        \Illuminate\Support\Facades\Artisan::call('tourism:fetch-news');
        $newsOutput = \Illuminate\Support\Facades\Artisan::output();

        // 4. Rebuild production caches
        \Illuminate\Support\Facades\Artisan::call('optimize:clear');
        \Illuminate\Support\Facades\Artisan::call('config:cache');
        \Illuminate\Support\Facades\Artisan::call('route:cache');

        return "<pre style='background:#0a1410;color:#34e0a1;padding:24px;font-family:monospace;font-size:13px;line-height:1.6;border-radius:12px;border:1px solid rgba(52,224,161,0.3);max-width:900px;margin:40px auto;box-shadow:0 20px 40px rgba(0,0,0,0.5);'>"
            . "<h1 style='color:#fff;font-size:20px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:10px;margin-top:0;'>🚀 COME AGAIN TOURS — CPANEL SETUP REPORT</h1>"
            . "<h3 style='color:#fcd34d;margin-bottom:4px;'>1. DATABASE MIGRATIONS:</h3>" . ($migrationOutput ?: "No pending migrations.\n")
            . "<h3 style='color:#fcd34d;margin-bottom:4px;'>2. TELEGRAM INSTANT PUSH ALERT:</h3>" . ($telegramOutput ?: "Telegram test completed.\n")
            . "<h3 style='color:#fcd34d;margin-bottom:4px;'>3. AI TOURISM NEWS SEEDER:</h3>" . ($newsOutput ?: "News fetched successfully.\n")
            . "<h3 style='color:#fcd34d;margin-bottom:4px;'>4. PRODUCTION CACHES:</h3>Optimized and Cached Successfully!\n\n"
            . "<div style='background:rgba(255,255,255,0.05);padding:12px;border-radius:8px;color:#fff;border-left:4px solid #34e0a1;margin-top:15px;'>"
            . "<strong>✓ ALL SYSTEMS LIVE!</strong> You can now delete or comment out the <code>/run-setup-migrations</code> route in <code>routes/web.php</code>."
            . "</div>"
            . "</pre>";
    } catch (\Throwable $e) {
        return "<pre style='background:#2a0a0a;color:#ff6b6b;padding:24px;font-family:monospace;border-radius:12px;max-width:900px;margin:40px auto;border:1px solid #ff4444;'>"
            . "<h2 style='margin-top:0;'>❌ SETUP ENCOUNTERED AN ERROR</h2>"
            . "<strong>Error Message:</strong> " . htmlspecialchars($e->getMessage()) . "\n\n"
            . "<strong>File:</strong> " . $e->getFile() . " (Line " . $e->getLine() . ")\n"
            . "</pre>";
    }
});

