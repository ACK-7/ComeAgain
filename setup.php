<?php
// setup.php — Place this file directly inside your cPanel public_html/ folder

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Locate laravel_app directory (one level up from public_html)
$laravelPath = dirname(__DIR__) . '/laravel_app';

if (!file_exists($laravelPath . '/vendor/autoload.php')) {
    die("<pre style='color:#ff6b6b;background:#1a0505;padding:20px;font-family:monospace;'>❌ Error: Could not locate Laravel at: " . htmlspecialchars($laravelPath) . "</pre>");
}

require $laravelPath . '/vendor/autoload.php';
$app = require_once $laravelPath . '/bootstrap/app.php';

// Bootstrap the console kernel
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

try {
    // 1. Run database migrations
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

    echo "<pre style='background:#0a1410;color:#34e0a1;padding:24px;font-family:monospace;font-size:13px;line-height:1.6;border-radius:12px;border:1px solid rgba(52,224,161,0.3);max-width:900px;margin:40px auto;box-shadow:0 20px 40px rgba(0,0,0,0.5);'>";
    echo "<h1 style='color:#fff;font-size:20px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:10px;margin-top:0;'>🚀 COME AGAIN TOURS — CPANEL SETUP REPORT</h1>";
    echo "<h3 style='color:#fcd34d;margin-bottom:4px;'>1. DATABASE MIGRATIONS:</h3>" . ($migrationOutput ?: "No pending migrations.\n");
    echo "<h3 style='color:#fcd34d;margin-bottom:4px;'>2. TELEGRAM INSTANT PUSH ALERT:</h3>" . ($telegramOutput ?: "Telegram test completed.\n");
    echo "<h3 style='color:#fcd34d;margin-bottom:4px;'>3. AI TOURISM NEWS SEEDER:</h3>" . ($newsOutput ?: "News fetched successfully.\n");
    echo "<h3 style='color:#fcd34d;margin-bottom:4px;'>4. PRODUCTION CACHES:</h3>Optimized and Cached Successfully!\n\n";
    echo "<div style='background:rgba(255,255,255,0.05);padding:12px;border-radius:8px;color:#fff;border-left:4px solid #34e0a1;margin-top:15px;'>";
    echo "<strong>✓ ALL SYSTEMS LIVE!</strong> You can now delete <code>setup.php</code> from <code>public_html</code>.";
    echo "</div>";
    echo "</pre>";
} catch (\Throwable $e) {
    echo "<pre style='background:#2a0a0a;color:#ff6b6b;padding:24px;font-family:monospace;border-radius:12px;max-width:900px;margin:40px auto;border:1px solid #ff4444;'>";
    echo "<h2 style='margin-top:0;'>❌ SETUP ENCOUNTERED AN ERROR</h2>";
    echo "<strong>Error Message:</strong> " . htmlspecialchars($e->getMessage()) . "\n\n";
    echo "<strong>File:</strong> " . $e->getFile() . " (Line " . $e->getLine() . ")\n";
    echo "</pre>";
}
