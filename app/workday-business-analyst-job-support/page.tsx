import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayBusinessAnalystJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayBusinessAnalystJobSupport);

export default function WorkdayBusinessAnalystJobSupportPage() {
  return <LandingPageTemplate config={workdayBusinessAnalystJobSupport} />;
}
