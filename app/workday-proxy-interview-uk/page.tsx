import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayProxyInterviewUK } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayProxyInterviewUK);

export default function WorkdayProxyInterviewUKPage() {
  return <LandingPageTemplate config={workdayProxyInterviewUK} />;
}
