import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayJobSupportSingapore } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayJobSupportSingapore);

export default function WorkdayJobSupportSingaporePage() {
  return <LandingPageTemplate config={workdayJobSupportSingapore} />;
}
