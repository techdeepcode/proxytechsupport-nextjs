import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayTestingUatSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayTestingUatSupport);

export default function WorkdayTestingUatSupportPage() {
  return <LandingPageTemplate config={workdayTestingUatSupport} />;
}
