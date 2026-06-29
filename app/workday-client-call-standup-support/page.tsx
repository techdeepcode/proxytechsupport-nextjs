import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayClientCallStandupSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayClientCallStandupSupport);

export default function WorkdayClientCallStandupSupportPage() {
  return <LandingPageTemplate config={workdayClientCallStandupSupport} />;
}
