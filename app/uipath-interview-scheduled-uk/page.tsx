import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathInterviewScheduledUK } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathInterviewScheduledUK);

export default function UiPathInterviewScheduledUKPage() {
  return <LandingPageTemplate config={uipathInterviewScheduledUK} />;
}
