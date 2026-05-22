import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { proxyInterviewNewZealand } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(proxyInterviewNewZealand);

export default function ProxyInterviewNewZealandPage() {
  return <LandingPageTemplate config={proxyInterviewNewZealand} />;
}
