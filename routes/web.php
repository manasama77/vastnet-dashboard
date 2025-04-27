<?php

use App\Http\Controllers\ServerController;
use App\Mail\TestEmail;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/mail', function () {
    $user = ['name' => 'Adam', 'email' => 'adam.pm77@gmail.com'];
    Mail::to($user['email'])->send(new TestEmail((object)$user));
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('servers', [ServerController::class, 'index'])->name('servers');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
