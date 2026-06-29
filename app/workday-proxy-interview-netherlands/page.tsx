import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayProxyInterviewNetherlands } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayProxyInterviewNetherlands);

export default function WorkdayProxyInterviewNetherlandsPage() {
  return <LandingPageTemplate config={workdayProxyInterviewNetherlands} />;
}
