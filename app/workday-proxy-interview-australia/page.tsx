import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayProxyInterviewAustralia } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayProxyInterviewAustralia);

export default function WorkdayProxyInterviewAustraliaPage() {
  return <LandingPageTemplate config={workdayProxyInterviewAustralia} />;
}
