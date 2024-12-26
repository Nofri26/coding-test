<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// fallback route untuk React Router
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
