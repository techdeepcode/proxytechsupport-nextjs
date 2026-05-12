import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { proxyInterviewSingapore } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(proxyInterviewSingapore);

export default function ProxyInterviewSingaporePage() {
  return <LandingPageTemplate config={proxyInterviewSingapore} />;
}
