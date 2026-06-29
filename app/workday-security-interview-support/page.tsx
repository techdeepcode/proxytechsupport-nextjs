import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdaySecurityInterviewSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdaySecurityInterviewSupport);

export default function WorkdaySecurityInterviewSupportPage() {
  return <LandingPageTemplate config={workdaySecurityInterviewSupport} />;
}
