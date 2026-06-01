import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathInterviewScheduled } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathInterviewScheduled);

export default function UiPathInterviewScheduledPage() {
  return <LandingPageTemplate config={uipathInterviewScheduled} />;
}
