import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayAdaptivePlanningJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayAdaptivePlanningJobSupport);

export default function WorkdayAdaptivePlanningJobSupportPage() {
  return <LandingPageTemplate config={workdayAdaptivePlanningJobSupport} />;
}
