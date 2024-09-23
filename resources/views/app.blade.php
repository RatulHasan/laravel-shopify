@extends('shopify-app::layouts.default')
<!DOCTYPE html>
<html>
  <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      <meta name="shopify-api-key" content="{{ config('shopify-app.api_key') }}" />
      <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js"></script>
      @viteReactRefresh
      @vite('resources/js/app.tsx')
      @routes
      @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>
