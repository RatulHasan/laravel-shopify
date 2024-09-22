# The skeleton application for the Shopify App development with Laravel, Inertia.js and React.

![Shopify Laravel](https://github.com/user-attachments/assets/73ee7af6-efaf-40e8-a8d9-2724d402e9ce)


### How to use this template
Install composer dependencies
```bash
composer install
```
Change vite.config.js server>hmr>host to your local ip address, or if you use valet, you can use the valet domain
```js
server: {
    hmr: {
        host: '' // use localhost or your-domain.test
    }
}
```
copy .env.example to .env
```bash
cp .env.example .env
```
Generate key
```bash
php artisan key:generate
```
Update .env file with your shopify app credentials
```env
SHOPIFY_API_VERSION=2024-07
SHOPIFY_API_KEY=your-api-key
SHOPIFY_API_SECRET=your-api-secret
```
Install npm/pnpm dependencies.
If you use npm, replace pnpm with npm and delete pnpm-lock.yaml file.
Then run
```bash
pnpm install
```
Run dev server
```bash
php artisan serve
```
```bash
pnpm run dev
```
There is a telescope installed in dev mode, you can access it by visiting /telescope

If this project is useful to you, please give it a ⭐️. Thank you!
Happy coding! 🎉
