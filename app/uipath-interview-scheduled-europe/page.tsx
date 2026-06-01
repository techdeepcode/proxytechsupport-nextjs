import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathInterviewScheduledEurope } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathInterviewScheduledEurope);

export default function UiPathInterviewScheduledEuropePage() {
  return <LandingPageTemplate config={uipathInterviewScheduledEurope} />;
}
