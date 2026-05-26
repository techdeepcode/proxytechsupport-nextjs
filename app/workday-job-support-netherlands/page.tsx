import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayJobSupportNetherlands } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayJobSupportNetherlands);

export default function WorkdayJobSupportNetherlandsPage() {
  return <LandingPageTemplate config={workdayJobSupportNetherlands} />;
}
