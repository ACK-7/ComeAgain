<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\TourismNewsController;
use App\Http\Controllers\ReviewController;

Route::post('/contact', [ContactController::class, 'submit']);
Route::post('/subscribe', [ContactController::class, 'subscribe']);
Route::get('/tourism-news', [TourismNewsController::class, 'index']);
Route::get('/reviews', [ReviewController::class, 'index']);
