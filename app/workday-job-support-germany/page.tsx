import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayJobSupportGermany } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayJobSupportGermany);

export default function WorkdayJobSupportGermanyPage() {
  return <LandingPageTemplate config={workdayJobSupportGermany} />;
}
