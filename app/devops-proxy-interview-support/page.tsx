import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { devopsProxyInterviewSupport } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(devopsProxyInterviewSupport);

export default function DevOpsProxyInterviewSupportPage() {
  return <LandingPageTemplate config={devopsProxyInterviewSupport} />;
}
