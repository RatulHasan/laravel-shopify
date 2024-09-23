<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware( [ 'verify.shopify' ] )->group( function () {
    Route::get( '/', function () {
        return Inertia::render('Home', [
            'user' => auth()->user(),
        ]);
    } )->name( 'home' );
    Route::get( '/about', function () {
        return Inertia::render('About', [
            'user' => auth()->user(),
        ]);
    } )->name( 'about' );
} );
