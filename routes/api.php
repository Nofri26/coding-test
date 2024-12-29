<?php

use App\Http\Controllers\Auth\AuthenticatedController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthenticatedController::class, 'store'])->name('login');
Route::post('/logout', [AuthenticatedController::class, 'destroy'])->middleware('auth:sanctum');

Route::middleware('auth:api')->get('/user', function () {
    return auth()->user();
});
