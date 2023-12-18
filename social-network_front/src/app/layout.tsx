import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { FC, PropsWithChildren } from 'react';
import { Layout } from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Social media',
  description: 'Best social media web app for everyone!',
  icons: '/assets/icons/logo.svg',
};

export const viewport: Viewport = {
  themeColor: '#0E0B18',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
