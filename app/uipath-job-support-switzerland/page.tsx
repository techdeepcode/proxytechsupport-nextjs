import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathJobSupportSwitzerland } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathJobSupportSwitzerland);

export default function UiPathJobSupportSwitzerlandPage() {
  return <LandingPageTemplate config={uipathJobSupportSwitzerland} />;
}
