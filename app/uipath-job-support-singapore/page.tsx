import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathJobSupportSingapore } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathJobSupportSingapore);

export default function UiPathJobSupportSingaporePage() {
  return <LandingPageTemplate config={uipathJobSupportSingapore} />;
}
