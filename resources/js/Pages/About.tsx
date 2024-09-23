import Layout from './Layout'
import { Head } from '@inertiajs/react'
import {useEffect} from "react";

export default function Welcome({ user }: { user: { name: string } }) {
    useEffect(() => {
        shopify.toast.show('actionData.message', {
            duration: 5000,
        });
    }, [])
    return (
        <Layout>
            <Head title="Welcome" />
            <h1>About</h1>
            <p>Hello {user.name}, welcome to your first Inertia app!</p>
        </Layout>
    )
}
