import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Crate an interceptor to add the updated session token to the shopify request
window.axios.interceptors.request.use(function (config) {
    return window.utils.getSessionToken(window.app).then((token) => {
        config.headers.Authorization = `Bearer ${token}`;

        return config;
    });
});
