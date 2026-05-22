import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { proxyInterviewBelgium } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(proxyInterviewBelgium);

export default function ProxyInterviewBelgiumPage() {
  return <LandingPageTemplate config={proxyInterviewBelgium} />;
}
