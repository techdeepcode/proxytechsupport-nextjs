import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayJobSupportEurope } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayJobSupportEurope);

export default function WorkdayJobSupportEuropePage() {
  return <LandingPageTemplate config={workdayJobSupportEurope} />;
}
