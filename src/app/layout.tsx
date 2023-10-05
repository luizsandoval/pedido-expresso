import '@/styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

import { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

import { NextAuthOptions } from '@/config/next-auth-options';
import { SessionProvider } from '@/contexts/SessionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        template: '%s | Pedido expresso',
        absolute: '',
    },
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(NextAuthOptions);

    return (
        <html lang="pt-BR" className={inter.className}>
            <body className="min-h-screen">
                <SessionProvider session={session}>
                    <main className="relative flex min-h-screen flex-col bg-gray-50">
                        {children}
                    </main>
                    <ToastContainer position="top-right" />
                </SessionProvider>
            </body>
        </html>
    );
}
