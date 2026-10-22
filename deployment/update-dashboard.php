<?php
// Temporary File Manager installer. A private, expiring deployment key is required.
declare(strict_types=1);

header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
header("Content-Security-Policy: default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; frame-ancestors 'none'; base-uri 'none'");
header('Referrer-Policy: no-referrer');
$laravelPath = dirname(__DIR__).'/laravel_app';
$manifestPath = $laravelPath.'/.deployment.json';
$manifest = is_file($manifestPath) ? json_decode((string) file_get_contents($manifestPath), true) : null;
if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === 'off' || !$manifest || ($manifest['expires_at'] ?? 0) < time()) {
    http_response_code(404); exit('Setup unavailable.');
}
function displayForm(string $message = ''): never
{
    $message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
    echo '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Come Again dashboard update</title>';
    echo '<style>body{font:16px system-ui;max-width:560px;margin:60px auto;padding:24px;line-height:1.6;background:#f7f8f6;color:#172314}label{display:block;margin:14px 0}input{display:block;width:95%;padding:10px;font:inherit}button{padding:12px 18px;font:inherit}p{overflow-wrap:anywhere}</style>';
    echo '<h1>Install dashboard update</h1><p>Back up the database, website, Laravel .env and storage before continuing. This imports the current website content and creates your administrator account.</p><p role="alert">'.$message.'</p>';
    echo '<form method="post" autocomplete="off"><label>One-time deployment key<input type="password" name="deployment_key" required></label><label>Administrator name<input name="name" maxlength="255" required></label><label>Administrator email<input type="email" name="email" maxlength="255" required></label><label>New administrator password (12+ characters)<input type="password" name="password" minlength="12" required></label><label>Confirm password<input type="password" name="confirmation" minlength="12" required></label><label><input type="checkbox" name="backup_confirmed" value="yes" required>I have backed up the existing website and database.</label><button>Install update and create administrator</button></form></html>';
    exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') displayForm();
if (!is_dir($laravelPath) || !is_writable($laravelPath)) { http_response_code(503); exit('The Laravel folder is not writable. Contact your host.'); }
$lock = fopen($laravelPath.'/.deployment.lock', 'c+');
if (!$lock || !flock($lock, LOCK_EX | LOCK_NB)) { http_response_code(409); exit('Setup is already running.'); }
// Re-read under the lock so a concurrent successful installer cannot be reused.
if (!is_file($manifestPath)) { http_response_code(404); exit('Setup has already completed.'); }
$attempts = json_decode((string) stream_get_contents($lock), true) ?: ['count' => 0, 'since' => time()];
if (time() - $attempts['since'] > 900) $attempts = ['count' => 0, 'since' => time()];
if ($attempts['count'] >= 10) { http_response_code(429); exit('Too many setup attempts. Try again in 15 minutes.'); }
$provided = $_POST['deployment_key'] ?? '';
if (!is_string($provided) || !hash_equals($manifest['key_hash'], hash('sha256', $provided))) {
    $attempts['count']++;
    rewind($lock); ftruncate($lock, 0); fwrite($lock, json_encode($attempts)); fflush($lock);
    http_response_code(403); displayForm('The deployment key is incorrect.');
}
$email = strtolower(trim(is_string($_POST['email'] ?? null) ? $_POST['email'] : ''));
$name = trim(is_string($_POST['name'] ?? null) ? $_POST['name'] : '');
$password = is_string($_POST['password'] ?? null) ? $_POST['password'] : '';
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 255 || !$name || strlen($name) > 255 || strlen($password) < 12 || strlen($password) > 1024 || $password !== ($_POST['confirmation'] ?? null) || ($_POST['backup_confirmed'] ?? '') !== 'yes') {
    http_response_code(422); displayForm('Check your email, name, password confirmation, and backup confirmation.');
}
try {
    if (PHP_VERSION_ID < 80400) throw new RuntimeException('Select PHP 8.4 or newer in cPanel first.');
    if (!is_file($laravelPath.'/vendor/autoload.php')) throw new RuntimeException('Upload vendor-production.zip into laravel_app first.');
    if (!is_file($laravelPath.'/.env')) throw new RuntimeException('The existing Laravel .env must be preserved before setup.');
    foreach (['storage/app/public/media', 'storage/framework/cache/data', 'storage/framework/sessions', 'storage/framework/views', 'storage/logs', 'bootstrap/cache'] as $directory) {
        if (!is_dir($laravelPath.'/'.$directory) && !mkdir($laravelPath.'/'.$directory, 0755, true)) throw new RuntimeException('Cannot create runtime folders.');
    }
    // Old compiled files must not hide the new routes or retain an old debug setting.
    foreach (['config.php', 'routes-v7.php', 'packages.php', 'services.php'] as $cache) {
        if (is_file($laravelPath.'/bootstrap/cache/'.$cache)) unlink($laravelPath.'/bootstrap/cache/'.$cache);
    }
    putenv('APP_ENV=production'); putenv('APP_DEBUG=false');
    require $laravelPath.'/vendor/autoload.php';
    $app = require $laravelPath.'/bootstrap/app.php';
    $kernel = $app->make(\Illuminate\Contracts\Console\Kernel::class);
    $kernel->bootstrap();
    if (!config('app.key')) throw new RuntimeException('The existing APP_KEY is missing. Restore it from the backup.');
    foreach ([['migrate', ['--force' => true]], ['db:seed', ['--class' => 'WebsiteContentSeeder', '--force' => true]], ['db:seed', ['--class' => 'SafariPackageSeeder', '--force' => true]]] as [$command, $arguments]) {
        if ($kernel->call($command, $arguments) !== 0) throw new RuntimeException('A database update step failed. Check Laravel logs before retrying.');
    }
    $user = \App\Models\User::firstOrNew(['email' => $email]);
    $user->name = $name; $user->password = \Illuminate\Support\Facades\Hash::make($password); $user->role = 'super_admin'; $user->save();
    \Illuminate\Support\Facades\DB::table('admin_tokens')->where('user_id', $user->id)->delete();
    foreach (['config:cache', 'route:cache', 'view:cache'] as $command) {
        if ($kernel->call($command) !== 0) throw new RuntimeException('Cache preparation failed. Check Laravel logs before retrying.');
    }
    if (!unlink($manifestPath)) throw new RuntimeException('Setup finished, but the deployment manifest could not be removed. Remove .deployment.json in File Manager immediately.');
    echo '<!doctype html><html lang="en"><meta charset="utf-8"><title>Update complete</title><h1>Dashboard update complete</h1><p>The setup key has been disabled. Delete update-dashboard.php from public_html using File Manager, then <a href="/admin/login">sign in to the dashboard</a>.</p></html>';
} catch (Throwable $error) {
    // No credentials, database connection strings, or stack traces in the browser.
    error_log('Come Again dashboard installation failed: '.$error->getMessage());
    if (isset($app) && $app->bound('log')) $app->make('log')->error('Dashboard installer failed', ['exception' => $error]);
    http_response_code(500);
    displayForm('Setup did not complete. Check PHP 8.4+, vendor upload, .env database settings, and Laravel storage/logs/laravel.log. Keep your backup and retry after fixing the problem.');
}
