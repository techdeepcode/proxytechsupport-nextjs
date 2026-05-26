import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayJobSupportUAE } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayJobSupportUAE);

export default function WorkdayJobSupportUAEPage() {
  return <LandingPageTemplate config={workdayJobSupportUAE} />;
}
