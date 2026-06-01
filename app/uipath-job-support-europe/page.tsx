import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathJobSupportEurope } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathJobSupportEurope);

export default function UiPathJobSupportEuropePage() {
  return <LandingPageTemplate config={uipathJobSupportEurope} />;
}
