import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayProxyInterviewIreland } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayProxyInterviewIreland);

export default function WorkdayProxyInterviewIrelandPage() {
  return <LandingPageTemplate config={workdayProxyInterviewIreland} />;
}
