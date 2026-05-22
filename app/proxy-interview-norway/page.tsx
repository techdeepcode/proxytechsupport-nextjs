import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { proxyInterviewNorway } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(proxyInterviewNorway);

export default function ProxyInterviewNorwayPage() {
  return <LandingPageTemplate config={proxyInterviewNorway} />;
}
