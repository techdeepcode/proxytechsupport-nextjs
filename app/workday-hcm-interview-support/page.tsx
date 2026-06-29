import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayHcmInterviewSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayHcmInterviewSupport);

export default function WorkdayHcmInterviewSupportPage() {
  return <LandingPageTemplate config={workdayHcmInterviewSupport} />;
}
