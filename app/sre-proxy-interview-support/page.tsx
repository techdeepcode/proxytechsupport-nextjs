import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { sreProxyInterviewSupport } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(sreProxyInterviewSupport);

export default function SreProxyInterviewSupportPage() {
  return <LandingPageTemplate config={sreProxyInterviewSupport} />;
}
