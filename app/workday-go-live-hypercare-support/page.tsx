import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayGoLiveHypercareSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayGoLiveHypercareSupport);

export default function WorkdayGoLiveHypercareSupportPage() {
  return <LandingPageTemplate config={workdayGoLiveHypercareSupport} />;
}
