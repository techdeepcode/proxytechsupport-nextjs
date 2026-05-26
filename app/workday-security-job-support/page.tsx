import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdaySecurityJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdaySecurityJobSupport);

export default function WorkdaySecurityJobSupportPage() {
  return <LandingPageTemplate config={workdaySecurityJobSupport} />;
}
