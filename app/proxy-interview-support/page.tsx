import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { proxyInterviewSupport } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(proxyInterviewSupport);

export default function ProxyInterviewSupportPage() {
  return <LandingPageTemplate config={proxyInterviewSupport} />;
}
