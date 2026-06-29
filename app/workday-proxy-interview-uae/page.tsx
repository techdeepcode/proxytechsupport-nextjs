import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayProxyInterviewUAE } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayProxyInterviewUAE);

export default function WorkdayProxyInterviewUAEPage() {
  return <LandingPageTemplate config={workdayProxyInterviewUAE} />;
}
