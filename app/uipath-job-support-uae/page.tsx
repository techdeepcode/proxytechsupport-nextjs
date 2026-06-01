import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathJobSupportUAE } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathJobSupportUAE);

export default function UiPathJobSupportUAEPage() {
  return <LandingPageTemplate config={uipathJobSupportUAE} />;
}
