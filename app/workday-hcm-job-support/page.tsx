import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayHcmJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayHcmJobSupport);

export default function WorkdayHcmJobSupportPage() {
  return <LandingPageTemplate config={workdayHcmJobSupport} />;
}
