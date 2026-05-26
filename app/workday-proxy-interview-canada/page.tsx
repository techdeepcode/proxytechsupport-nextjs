import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayProxyInterviewCanada } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayProxyInterviewCanada);

export default function WorkdayProxyInterviewCanadaPage() {
  return <LandingPageTemplate config={workdayProxyInterviewCanada} />;
}
