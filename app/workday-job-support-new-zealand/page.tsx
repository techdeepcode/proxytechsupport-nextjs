import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayJobSupportNewZealand } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayJobSupportNewZealand);

export default function WorkdayJobSupportNewZealandPage() {
  return <LandingPageTemplate config={workdayJobSupportNewZealand} />;
}
