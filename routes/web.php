<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware( [ 'verify.shopify' ] )->group( function () {
    Route::get( '/', function () {
        return Inertia::render( 'Home' );
    } )->name( 'home' );
    Route::get( 'me', fn() => response()->json( auth()->user() ) )->name( 'me' );
} );
