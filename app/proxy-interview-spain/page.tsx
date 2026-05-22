import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { proxyInterviewSpain } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(proxyInterviewSpain);

export default function ProxyInterviewSpainPage() {
  return <LandingPageTemplate config={proxyInterviewSpain} />;
}
