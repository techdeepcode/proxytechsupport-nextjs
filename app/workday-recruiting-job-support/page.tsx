import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayRecruitingJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayRecruitingJobSupport);

export default function WorkdayRecruitingJobSupportPage() {
  return <LandingPageTemplate config={workdayRecruitingJobSupport} />;
}
