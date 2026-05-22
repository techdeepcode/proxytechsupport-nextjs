import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { proxyInterviewSweden } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(proxyInterviewSweden);

export default function ProxyInterviewSwedenPage() {
  return <LandingPageTemplate config={proxyInterviewSweden} />;
}
