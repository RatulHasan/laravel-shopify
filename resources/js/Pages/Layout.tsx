import {Link} from '@inertiajs/react'
import React from "react";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <main>
            <header>
                <Link href={route('home')}>Home</Link>
                <Link href={route('about')}>About</Link>
            </header>
            <article>{children}</article>
        </main>
    )
}
