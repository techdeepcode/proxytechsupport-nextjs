import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayInterviewScheduledSaudiArabia } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayInterviewScheduledSaudiArabia);

export default function WorkdayInterviewScheduledSaudiArabiaPage() {
  return <LandingPageTemplate config={workdayInterviewScheduledSaudiArabia} />;
}
