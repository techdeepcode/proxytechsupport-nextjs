import type { Metadata } from 'next';
import './globals.css';
import SiteAnalytics, { GoogleTagManagerNoscript } from '@/components/SiteAnalytics';
import MobileBottomCTA from '@/components/MobileBottomCTA';
import {
  HOME_HTML_TITLE,
  HOME_META_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  defaultOgImage,
} from '@/lib/site-seo';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://proxytechsupport.com/#organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: 'https://proxytechsupport.com/images/logo.png',
    width: 200,
    height: 60,
  },
  description:
    'Real-time IT job support and proxy interview assistance for software developers and engineers across USA, UK, Canada, Australia, Europe, Germany, Ireland, Singapore, and worldwide. Same-day start. All major time zones covered.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    availableLanguage: 'English',
    areaServed: ['US', 'GB', 'CA', 'AU', 'IE', 'DE', 'SG', 'NZ', 'AE'],
  },
  areaServed: ['US', 'GB', 'CA', 'AU', 'IE', 'DE', 'SG', 'NZ', 'AE'],
  knowsAbout: [
    'IT Job Support',
    'Proxy Interview Support',
    'AWS Cloud Engineering',
    'DevOps',
    'Site Reliability Engineering',
    'AI/ML Engineering',
    'Software Development',
    'Technical Interview Preparation',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://proxytechsupport.com/#website',
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { '@id': 'https://proxytechsupport.com/#organization' },
};

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
  alternates: {
    canonical: 'https://proxytechsupport.com',
    languages: {
      'en-US': 'https://proxytechsupport.com',
      'en-CA': 'https://proxytechsupport.com',
      'en-GB': 'https://proxytechsupport.com',
      'en-AU': 'https://proxytechsupport.com',
      'en-IE': 'https://proxytechsupport.com',
      'x-default': 'https://proxytechsupport.com',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <SiteAnalytics />
        <GoogleTagManagerNoscript />
        {children}
        <MobileBottomCTA />
      </body>
    </html>
  );
}
