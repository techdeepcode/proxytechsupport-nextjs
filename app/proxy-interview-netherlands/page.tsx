import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { proxyInterviewNetherlands } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(proxyInterviewNetherlands);

export default function ProxyInterviewNetherlandsPage() {
  return <LandingPageTemplate config={proxyInterviewNetherlands} />;
}
