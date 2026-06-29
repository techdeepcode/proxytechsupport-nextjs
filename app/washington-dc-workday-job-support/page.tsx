import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { washingtonDcWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(washingtonDcWorkdayJobSupport);

export default function WashingtonDcWorkdayJobSupportPage() {
  return <LandingPageTemplate config={washingtonDcWorkdayJobSupport} />;
}
