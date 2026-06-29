import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayPayrollConsultantJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayPayrollConsultantJobSupport);

export default function WorkdayPayrollConsultantJobSupportPage() {
  return <LandingPageTemplate config={workdayPayrollConsultantJobSupport} />;
}
