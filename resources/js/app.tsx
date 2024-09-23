import './bootstrap';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import createApp, { AppConfigV2 } from '@shopify/app-bridge';
import { getSessionToken } from '@shopify/app-bridge/utilities';
import { redirect } from '@shopify/app-bridge/client/redirect';
import '@shopify/polaris/build/esm/styles.css';
import axios from 'axios';

const host = new URLSearchParams(location.search).get('host');
if (!host) throw new Error('APP::ERROR::INVALID_CONFIG: host must be provided');

const app = createApp({
    apiKey: import.meta.env.VITE_SHOPIFY_API_KEY,
    host,
    forceRedirect: true,
} as AppConfigV2);

getSessionToken(app).then(sessionToken => {
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    axios.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${sessionToken}`;
        config.params = {
            ...config.params,
            shop: new URLSearchParams(location.search).get('shop'),
            embedded: new URLSearchParams(location.search).get('embedded'),
            host,
            id_token: new URLSearchParams(location.search).get('id_token'),
            locale: new URLSearchParams(location.search).get('locale'),
            session: new URLSearchParams(location.search).get('session'),
            hmac: new URLSearchParams(location.search).get('hmac'),
            timestamp: new URLSearchParams(location.search).get('timestamp'),
        };
        return config;
    });

    axios.interceptors.response.use(
        response => response,
        error => {
            if (error.response.status === 403 && error.response.data.forceRedirectUrl) {
                redirect(error.response.data.forceRedirectUrl);
            }
            return Promise.reject(error);
        }
    );

    createInertiaApp({
        resolve: name => {
            const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true });
            return pages[`./Pages/${name}.tsx`];
        },
        setup({ el, App, props }) {
            createRoot(el).render(<App {...props} />);
        },
    });
});
