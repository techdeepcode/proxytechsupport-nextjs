import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayInterviewScheduledNewZealand } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayInterviewScheduledNewZealand);

export default function WorkdayInterviewScheduledNewZealandPage() {
  return <LandingPageTemplate config={workdayInterviewScheduledNewZealand} />;
}
