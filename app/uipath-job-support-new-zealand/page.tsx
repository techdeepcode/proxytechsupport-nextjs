import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathJobSupportNewZealand } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathJobSupportNewZealand);

export default function UiPathJobSupportNewZealandPage() {
  return <LandingPageTemplate config={uipathJobSupportNewZealand} />;
}
