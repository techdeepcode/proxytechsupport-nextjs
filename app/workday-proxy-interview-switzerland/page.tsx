import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayProxyInterviewSwitzerland } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayProxyInterviewSwitzerland);

export default function WorkdayProxyInterviewSwitzerlandPage() {
  return <LandingPageTemplate config={workdayProxyInterviewSwitzerland} />;
}
