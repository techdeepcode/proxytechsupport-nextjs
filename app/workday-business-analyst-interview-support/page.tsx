import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayBusinessAnalystInterviewSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayBusinessAnalystInterviewSupport);

export default function WorkdayBusinessAnalystInterviewSupportPage() {
  return <LandingPageTemplate config={workdayBusinessAnalystInterviewSupport} />;
}
