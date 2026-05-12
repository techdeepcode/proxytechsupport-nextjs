import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { proxyInterviewEurope } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(proxyInterviewEurope);

export default function ProxyInterviewEuropePage() {
  return <LandingPageTemplate config={proxyInterviewEurope} />;
}
