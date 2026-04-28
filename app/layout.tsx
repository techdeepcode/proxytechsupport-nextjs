import type { Metadata } from 'next';
import './globals.css';
import SiteAnalytics, { GoogleTagManagerNoscript } from '@/components/SiteAnalytics';
import {
  HOME_HTML_TITLE,
  HOME_META_DESCRIPTION,
  SITE_NAME,
  defaultOgImage,
} from '@/lib/site-seo';

export const metadata: Metadata = {
  metadataBase: new URL('https://proxytechsupport.com'),
  title: {
    default: HOME_HTML_TITLE,
    template: '%s',
  },
  description: HOME_META_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: 'https://proxytechsupport.com/' }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    url: 'https://proxytechsupport.com/',
    title: HOME_HTML_TITLE,
    description: HOME_META_DESCRIPTION,
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_HTML_TITLE,
    description: HOME_META_DESCRIPTION,
    images: [defaultOgImage.url],
  },
  icons: {
    icon: [{ url: '/images/favicon.png', type: 'image/png' }],
    apple: [{ url: '/images/favicon.png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteAnalytics />
        <GoogleTagManagerNoscript />
        {children}
      </body>
    </html>
  );
}
