import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayProxyInterviewEurope } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayProxyInterviewEurope);

export default function WorkdayProxyInterviewEuropePage() {
  return <LandingPageTemplate config={workdayProxyInterviewEurope} />;
}
