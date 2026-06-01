import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathJobSupportSaudiArabia } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathJobSupportSaudiArabia);

export default function UiPathJobSupportSaudiArabiaPage() {
  return <LandingPageTemplate config={uipathJobSupportSaudiArabia} />;
}
