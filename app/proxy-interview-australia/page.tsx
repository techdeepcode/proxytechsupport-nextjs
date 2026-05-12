import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { proxyInterviewAustralia } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(proxyInterviewAustralia);

export default function ProxyInterviewAustraliaPage() {
  return <LandingPageTemplate config={proxyInterviewAustralia} />;
}
