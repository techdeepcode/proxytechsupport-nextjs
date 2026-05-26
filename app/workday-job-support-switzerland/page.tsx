import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayJobSupportSwitzerland } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayJobSupportSwitzerland);

export default function WorkdayJobSupportSwitzerlandPage() {
  return <LandingPageTemplate config={workdayJobSupportSwitzerland} />;
}
