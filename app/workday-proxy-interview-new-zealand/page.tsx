import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayProxyInterviewNewZealand } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayProxyInterviewNewZealand);

export default function WorkdayProxyInterviewNewZealandPage() {
  return <LandingPageTemplate config={workdayProxyInterviewNewZealand} />;
}
