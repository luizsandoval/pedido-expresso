import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';

import { NextAuthOptions } from '@/config/next-auth-options';
import { PageProps } from '@/models/page-props';

import { Form } from './Form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login',
};

const SignIn = async ({ searchParams }: PageProps) => {
    const session = await getServerSession(NextAuthOptions);

    if (session) redirect('/');

    const providers = await getProviders();

    if (!providers) throw 'Missing providers';

    return (
        <Form
            providers={providers}
            callbackUrl={searchParams['callbackUrl'] as string}
        />
    );
};

export default SignIn;
