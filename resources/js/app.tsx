import './bootstrap';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import createApp, { AppConfigV2 } from '@shopify/app-bridge';
import {getSessionToken} from "@shopify/app-bridge/utilities";
import {redirect} from "@shopify/app-bridge/client/redirect";

const app = createApp({
    apiKey: import.meta.env.VITE_SHOPIFY_API_KEY,
    host: new URLSearchParams(location.search).get('host'),
    forceRedirect: true,
} as AppConfigV2);

const sessionToken = await getSessionToken(app);

// Crate an interceptor to add the updated session token to the shopify request
window.axios.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${sessionToken}`;
    return config;
});

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true })
        return pages[`./Pages/${name}.tsx`]
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
}).then(() => {
    // console.log('App mounted')
});
