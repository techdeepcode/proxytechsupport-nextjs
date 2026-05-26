import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayFinancialManagementJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayFinancialManagementJobSupport);

export default function WorkdayFinancialManagementJobSupportPage() {
  return <LandingPageTemplate config={workdayFinancialManagementJobSupport} />;
}
