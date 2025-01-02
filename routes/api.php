<?php

use App\Http\Controllers\Auth\AuthenticatedController;
use App\Http\Controllers\Contents\ModuleController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthenticatedController::class, 'store'])->name('login');
Route::post('/register', [AuthenticatedController::class, 'register'])->name('register');
Route::post('/logout', [AuthenticatedController::class, 'destroy'])->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('modules', ModuleController::class);
});

Route::middleware('auth:sanctum')->get('/user', function () {
    return auth()->user();
});
