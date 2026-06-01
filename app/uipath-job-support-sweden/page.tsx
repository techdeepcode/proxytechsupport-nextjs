import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathJobSupportSweden } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathJobSupportSweden);

export default function UiPathJobSupportSwedenPage() {
  return <LandingPageTemplate config={uipathJobSupportSweden} />;
}
