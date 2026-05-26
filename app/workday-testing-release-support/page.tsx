import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayTestingReleaseSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayTestingReleaseSupport);

export default function WorkdayTestingReleaseSupportPage() {
  return <LandingPageTemplate config={workdayTestingReleaseSupport} />;
}
