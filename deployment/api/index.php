<?php

// Install this file as public_html/api/index.php. Keep Laravel outside public_html.
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));
$laravelPath = dirname(__DIR__, 2).'/laravel_app';
if (file_exists($maintenance = $laravelPath.'/storage/framework/maintenance.php')) {
    require $maintenance;
}
require $laravelPath.'/vendor/autoload.php';
$app = require $laravelPath.'/bootstrap/app.php';
// Apache executes /api/index.php, but Laravel routes already include /api.
// Normalize the script base so Symfony retains /api in the request path.
$_SERVER['SCRIPT_NAME'] = '/index.php';
$_SERVER['PHP_SELF'] = '/index.php';
$app->handleRequest(Request::capture());
