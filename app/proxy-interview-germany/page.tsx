import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { proxyInterviewGermany } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(proxyInterviewGermany);

export default function ProxyInterviewGermanyPage() {
  return <LandingPageTemplate config={proxyInterviewGermany} />;
}
