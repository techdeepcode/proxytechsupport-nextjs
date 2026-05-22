import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { proxyInterviewAustria } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(proxyInterviewAustria);

export default function ProxyInterviewAustriaPage() {
  return <LandingPageTemplate config={proxyInterviewAustria} />;
}
