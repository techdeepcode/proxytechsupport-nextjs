import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayJobSupportIreland } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayJobSupportIreland);

export default function WorkdayJobSupportIrelandPage() {
  return <LandingPageTemplate config={workdayJobSupportIreland} />;
}
