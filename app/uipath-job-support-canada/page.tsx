import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathJobSupportCanada } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathJobSupportCanada);

export default function UiPathJobSupportCanadaPage() {
  return <LandingPageTemplate config={uipathJobSupportCanada} />;
}
