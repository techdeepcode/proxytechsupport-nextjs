import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayJobSupportFrance } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayJobSupportFrance);

export default function WorkdayJobSupportFrancePage() {
  return <LandingPageTemplate config={workdayJobSupportFrance} />;
}
