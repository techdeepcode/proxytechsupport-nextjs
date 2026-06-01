import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathJobSupportUSA } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathJobSupportUSA);

export default function UiPathJobSupportUSAPage() {
  return <LandingPageTemplate config={uipathJobSupportUSA} />;
}
