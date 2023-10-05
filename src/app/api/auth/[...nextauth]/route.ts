import NextAuth from 'next-auth/next';

import { NextAuthOptions } from '@/config/next-auth-options';

const handler = NextAuth(NextAuthOptions);

export { handler as GET, handler as POST };
