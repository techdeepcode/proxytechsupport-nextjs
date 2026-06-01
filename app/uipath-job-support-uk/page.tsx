import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathJobSupportUK } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathJobSupportUK);

export default function UiPathJobSupportUKPage() {
  return <LandingPageTemplate config={uipathJobSupportUK} />;
}
