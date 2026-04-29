import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { proxyInterviewUSA } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(proxyInterviewUSA);

export default function ProxyInterviewUSAPage() {
  return <LandingPageTemplate config={proxyInterviewUSA} />;
}
