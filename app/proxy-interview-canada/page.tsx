import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { proxyInterviewCanada } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(proxyInterviewCanada);

export default function ProxyInterviewCanadaPage() {
  return <LandingPageTemplate config={proxyInterviewCanada} />;
}
