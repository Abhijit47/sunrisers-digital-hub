import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// main scss
import '@/styles/main.scss';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

/* <Head>
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='shortcut icon'
          href='/images/favicon.png'
          type='image/x-icon'
        />
        <title>Xpovio | Digital Agency Creative Portfolio Template</title>
        <meta name='keywords' content='creative, agency, portfolio' />
        <meta
          name='description'
          content='Digital Agency Creative Portfolio Template'
        />
      </Head> */

export const metadata: Metadata = {
  title: 'Xpovio | Digital Agency Creative Portfolio Template',
  description: 'Digital Agency Creative Portfolio Template',
  keywords: ['creative', 'agency', 'portfolio'],
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
      </body>
    </html>
  );
}
