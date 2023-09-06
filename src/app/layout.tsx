import { Inter } from "next/font/google";

import "@/styles/global.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | POC Pinheiro",
    absolute: ''
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="min-h-screen">
        <main className="relative flex min-h-screen flex-col bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}
