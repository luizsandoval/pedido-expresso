'use client';

import {
    SessionProvider as NextAuthSessionProvider,
    SessionProviderProps,
} from 'next-auth/react';
import { ReactNode } from 'react';

const SessionProvider = ({
    children,
    session,
}: {
    children: ReactNode;
    session: SessionProviderProps['session'];
}) => (
    <NextAuthSessionProvider session={session}>
        {children}
    </NextAuthSessionProvider>
);

export { SessionProvider };
