import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathInterviewScheduledUSA } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathInterviewScheduledUSA);

export default function UiPathInterviewScheduledUSAPage() {
  return <LandingPageTemplate config={uipathInterviewScheduledUSA} />;
}
