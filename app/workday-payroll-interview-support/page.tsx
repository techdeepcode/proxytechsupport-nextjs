import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayPayrollInterviewSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayPayrollInterviewSupport);

export default function WorkdayPayrollInterviewSupportPage() {
  return <LandingPageTemplate config={workdayPayrollInterviewSupport} />;
}
