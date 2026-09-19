<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

// Schedule daily automated fetch & AI curation of Uganda tourism news at 6:00 AM
Schedule::command('tourism:fetch-news')->dailyAt('06:00');
