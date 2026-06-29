import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayProxyInterviewGermany } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayProxyInterviewGermany);

export default function WorkdayProxyInterviewGermanyPage() {
  return <LandingPageTemplate config={workdayProxyInterviewGermany} />;
}
