import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { proxyInterviewDenmark } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(proxyInterviewDenmark);

export default function ProxyInterviewDenmarkPage() {
  return <LandingPageTemplate config={proxyInterviewDenmark} />;
}
