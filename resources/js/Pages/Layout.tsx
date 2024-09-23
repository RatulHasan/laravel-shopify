import {Link, router} from '@inertiajs/react'
import React from "react";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <main>
            <header>
                <Link href="/">Home</Link>
                <Link href={route('about')}>About</Link>
            </header>
            <article>{children}</article>
        </main>
    )
}
