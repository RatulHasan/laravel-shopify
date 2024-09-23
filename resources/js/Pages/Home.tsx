import React from 'react';
import {Page, Card, Button} from '@shopify/polaris';
import Layout from "@/Pages/Layout";

const Welcome = ({user}: { user: { name: string } }) => {
    const handleClick = () => {
        shopify.toast.show(`Hello ${user.name} , welcome to the Inertia App!`, {
            duration: 5000,
        });
    }
    return (
        <>
            <Page title="Inertia App">
                <Card>
                    <Button
                        onClick={() => {
                            handleClick();
                        }}
                    >
                        Click Me
                    </Button>
                </Card>
            </Page>
        </>
    );
}

Welcome.layout = (page: React.ReactNode) => <Layout children={page} />
export default Welcome;
