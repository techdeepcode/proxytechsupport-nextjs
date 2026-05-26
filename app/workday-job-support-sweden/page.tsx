import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayJobSupportSweden } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayJobSupportSweden);

export default function WorkdayJobSupportSwedenPage() {
  return <LandingPageTemplate config={workdayJobSupportSweden} />;
}
