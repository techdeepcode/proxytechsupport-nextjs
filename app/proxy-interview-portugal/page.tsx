import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { proxyInterviewPortugal } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(proxyInterviewPortugal);

export default function ProxyInterviewPortugalPage() {
  return <LandingPageTemplate config={proxyInterviewPortugal} />;
}
