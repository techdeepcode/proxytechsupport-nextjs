import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { rpaProxyInterviewSupport } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(rpaProxyInterviewSupport);

export default function RpaProxyInterviewSupportPage() {
  return <LandingPageTemplate config={rpaProxyInterviewSupport} />;
}
