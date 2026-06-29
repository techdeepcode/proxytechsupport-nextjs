import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { houstonWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(houstonWorkdayJobSupport);

export default function HoustonWorkdayJobSupportPage() {
  return <LandingPageTemplate config={houstonWorkdayJobSupport} />;
}
