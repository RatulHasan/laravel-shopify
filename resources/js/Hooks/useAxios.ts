import axios from 'axios';
import { useEffect } from 'react';
import { getSessionToken } from '@shopify/app-bridge/utilities';
import createApp, {AppConfigV2} from "@shopify/app-bridge";
import { redirect } from '@shopify/app-bridge/client/redirect';


export const useAxios = () => {
    const host = new URLSearchParams(location.search).get('host');
    const app = createApp({
        apiKey: import.meta.env.VITE_SHOPIFY_API_KEY,
        host: host,
        forceRedirect: true,
    } as AppConfigV2);

    useEffect(() => {
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        // Create an interceptor to add the updated session token to the Shopify request
        const interceptor = axios.interceptors.request.use(function (config) {
            return getSessionToken(app).then((token) => {
                config.headers.Authorization = `Bearer ${token}`;
                // @ts-ignore
                config.params = { ...config.params, host: window.__SHOPIFY_HOST__ };
                return config;
            });
        });

        const responseInterceptor = axios.interceptors.response.use(
            (response) => response, error => {
                if (error.response.status === 403 && error.response.data.forceRedirectUrl) {
                    redirect(error.response.data.forceRedirectUrl);
                }

                return Promise.reject(error);
            }
        );

        return () => {
            axios.interceptors.request.eject(interceptor);
            axios.interceptors.response.eject(responseInterceptor);
        };
    }, [app, redirect]);

    return { axios };
};
