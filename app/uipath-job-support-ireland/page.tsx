import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathJobSupportIreland } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathJobSupportIreland);

export default function UiPathJobSupportIrelandPage() {
  return <LandingPageTemplate config={uipathJobSupportIreland} />;
}
