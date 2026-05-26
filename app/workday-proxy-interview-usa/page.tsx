import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayProxyInterviewUSA } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayProxyInterviewUSA);

export default function WorkdayProxyInterviewUSAPage() {
  return <LandingPageTemplate config={workdayProxyInterviewUSA} />;
}
