import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayProductionSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayProductionSupport);

export default function WorkdayProductionSupportPage() {
  return <LandingPageTemplate config={workdayProductionSupport} />;
}
