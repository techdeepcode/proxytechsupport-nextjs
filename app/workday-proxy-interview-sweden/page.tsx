import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayProxyInterviewSweden } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayProxyInterviewSweden);

export default function WorkdayProxyInterviewSwedenPage() {
  return <LandingPageTemplate config={workdayProxyInterviewSweden} />;
}
