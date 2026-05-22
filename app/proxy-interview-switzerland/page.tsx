import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { proxyInterviewSwitzerland } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(proxyInterviewSwitzerland);

export default function ProxyInterviewSwitzerlandPage() {
  return <LandingPageTemplate config={proxyInterviewSwitzerland} />;
}
