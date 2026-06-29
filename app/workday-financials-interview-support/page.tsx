import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayFinancialsInterviewSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayFinancialsInterviewSupport);

export default function WorkdayFinancialsInterviewSupportPage() {
  return <LandingPageTemplate config={workdayFinancialsInterviewSupport} />;
}
