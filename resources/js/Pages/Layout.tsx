import {Link} from '@inertiajs/react'
import React from "react";
import {AppProvider} from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <main>
            <header>
                <Link href={route('home')}>Home</Link>
                <Link href={route('about')}>About</Link>
            </header>
            <AppProvider i18n={enTranslations}>
                {children}
            </AppProvider>
        </main>
    )
}
