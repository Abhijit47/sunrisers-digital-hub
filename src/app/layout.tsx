import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// main scss
import '@/styles/main.scss';

import { LazyWhatsappButton } from '@/components/whatsapp-button';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sunrisers Digital Hub',
  description: 'Digital Agency Creative Portfolio Template',
  keywords: ['creative', 'agency', 'portfolio'],
  other: {
    'google-site-verification': 'B7v3HqDgdLTGugh821Fw-FbeYLEt2qCbL2NJ5idOjwI',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <LazyWhatsappButton />
      </body>
    </html>
  );
}
