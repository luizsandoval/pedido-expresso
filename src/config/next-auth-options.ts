import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { mongoClientPromise } from '@/app/api/_lib/mongodb';
import { MongoDBAdapter } from '@auth/mongodb-adapter';

const NextAuthOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
            profile(profile) {
                const lastLogin = new Date();

                return {
                    ...profile,
                    lastLogin,
                };
            },
        }),
    ],
    adapter: MongoDBAdapter(mongoClientPromise, {
        databaseName: process.env.MONGODB_DATABASE,
        collections: {
            Users: 'users',
            Accounts: 'accounts',
            Sessions: 'sessions',
            VerificationTokens: 'verificationtokens',
        },
    }),
    session: { strategy: 'jwt' },
    pages: {
        signIn: '/auth/signin',
    },
};

export { NextAuthOptions };
