import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { proxyJobSupport } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(proxyJobSupport);

export default function ProxyJobSupportPage() {
  return <LandingPageTemplate config={proxyJobSupport} />;
}
