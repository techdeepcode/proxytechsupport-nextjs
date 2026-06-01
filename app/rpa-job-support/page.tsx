import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { rpaJobSupport } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(rpaJobSupport);

export default function RpaJobSupportPage() {
  return <LandingPageTemplate config={rpaJobSupport} />;
}
