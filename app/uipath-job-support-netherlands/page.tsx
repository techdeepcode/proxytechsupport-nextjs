import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathJobSupportNetherlands } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathJobSupportNetherlands);

export default function UiPathJobSupportNetherlandsPage() {
  return <LandingPageTemplate config={uipathJobSupportNetherlands} />;
}
