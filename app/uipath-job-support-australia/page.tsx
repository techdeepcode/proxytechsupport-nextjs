import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathJobSupportAustralia } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathJobSupportAustralia);

export default function UiPathJobSupportAustraliaPage() {
  return <LandingPageTemplate config={uipathJobSupportAustralia} />;
}
