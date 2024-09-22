@extends('shopify-app::layouts.default')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Welcome to Shopify App</h1>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    @parent
    @vite('resources/js/app.js')
@endsection
