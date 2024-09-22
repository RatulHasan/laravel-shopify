<?php

use Illuminate\Support\Facades\Route;


Route::middleware( [ 'verify.shopify' ] )->group( function () {
    Route::get( '/', function () {
        return view( 'welcome' );
    } )->name( 'home' );
    Route::get( 'me', fn() => response()->json( auth()->user() ) )->name( 'me' );
} );
