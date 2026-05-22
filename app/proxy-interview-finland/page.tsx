import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { proxyInterviewFinland } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(proxyInterviewFinland);

export default function ProxyInterviewFinlandPage() {
  return <LandingPageTemplate config={proxyInterviewFinland} />;
}
