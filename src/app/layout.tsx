import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// main scss
import '@/styles/main.scss';

import Layout from '@/components/layout/Layout';
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

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Sunrisers Digital Hub',
  description:
    'Sunrisers Digital Hub is a full-service branding and digital marketing agency specializing in brand strategy, identity design, SEO, social media, and performance marketing to help businesses build powerful brands and achieve measurable growth.',
  keywords: [
    'sunrisers digital hub',
    'branding and digital marketing agency',
    'brand strategy services',
    'brand identity design',
    'corporate branding solutions',
    'digital branding experts',
    'seo services india',
    'performance marketing agency',
    'social media marketing',
    'paid advertising services',
    'google ads specialists',
    'meta ads experts',
    'website design and development',
    'creative branding agency bangalore',
    'lead generation services',
    'online reputation management',
    'content marketing strategy',
    'business growth solutions',
    'roi driven marketing',
  ],
  metadataBase: new URL(BASE_URL),
  applicationName: 'Sunrisers Digital Hub',
  generator: 'Next.js',
  referrer: 'same-origin',
  creator: "Leanitech's Team",
  publisher: 'Vercel',
  // other: {
  //   'google-site-verification': 'B7v3HqDgdLTGugh821Fw-FbeYLEt2qCbL2NJ5idOjwI',
  // },
  verification: {
    google: 'B7v3HqDgdLTGugh821Fw-FbeYLEt2qCbL2NJ5idOjwI',
    other: {
      'facebook-domain-verification': 'brx2ml82v2mfauvs2hrlr3aogdcwtl',
    },
  },
  openGraph: {
    type: 'website',
    determiner: 'the',
    title: 'Sunrisers Digital Hub - Your Partner in Building Powerful Brands',
    description:
      'Sunrisers Digital Hub is a full-service branding and digital marketing agency specializing in brand strategy, identity design, SEO, social media, and performance marketing to help businesses build powerful brands and achieve measurable growth.',
    emails: ['sunrisersdigitalhub@gmail.com'],
    phoneNumbers: ['+919845732329', '+919739932329'],
    siteName: 'Sunrisers Digital Hub',
    locale: 'en_IN',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Sunrisers Digital Hub - Building Powerful Brands',
      },
    ],
    url: BASE_URL,
    countryName: 'India',
    ttl: 60 * 60 * 24, // 1 day in seconds
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  category: 'technology',
  classification: 'business',
  authors: [
    {
      url: 'https://abhijitdev.tech',
      name: 'Abhijit K.',
    },
    {
      url: 'https://leanitech.com',
      name: 'Shobana R.',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Layout header={2} footer={2} video={false}>
          {children}
        </Layout>
        <LazyWhatsappButton />
      </body>
    </html>
  );
}
