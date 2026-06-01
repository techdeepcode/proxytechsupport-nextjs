import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathInterviewScheduledCanada } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathInterviewScheduledCanada);

export default function UiPathInterviewScheduledCanadaPage() {
  return <LandingPageTemplate config={uipathInterviewScheduledCanada} />;
}
