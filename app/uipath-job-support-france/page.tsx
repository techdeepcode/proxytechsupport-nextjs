import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathJobSupportFrance } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathJobSupportFrance);

export default function UiPathJobSupportFrancePage() {
  return <LandingPageTemplate config={uipathJobSupportFrance} />;
}
