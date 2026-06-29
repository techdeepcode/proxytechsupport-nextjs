import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayProxyInterviewSaudiArabia } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayProxyInterviewSaudiArabia);

export default function WorkdayProxyInterviewSaudiArabiaPage() {
  return <LandingPageTemplate config={workdayProxyInterviewSaudiArabia} />;
}
