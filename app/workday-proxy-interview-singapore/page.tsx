import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayProxyInterviewSingapore } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayProxyInterviewSingapore);

export default function WorkdayProxyInterviewSingaporePage() {
  return <LandingPageTemplate config={workdayProxyInterviewSingapore} />;
}
