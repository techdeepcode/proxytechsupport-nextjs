import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathJobSupportGermany } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathJobSupportGermany);

export default function UiPathJobSupportGermanyPage() {
  return <LandingPageTemplate config={uipathJobSupportGermany} />;
}
