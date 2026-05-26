import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayPayrollJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayPayrollJobSupport);

export default function WorkdayPayrollJobSupportPage() {
  return <LandingPageTemplate config={workdayPayrollJobSupport} />;
}
