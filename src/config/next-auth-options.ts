import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const NextAuthOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
    ],
    session: { strategy: 'jwt' },
    pages: {
        signIn: '/auth/signin',
    },
};

export { NextAuthOptions };
