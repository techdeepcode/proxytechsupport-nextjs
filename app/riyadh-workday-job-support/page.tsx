import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { riyadhWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(riyadhWorkdayJobSupport);

export default function RiyadhWorkdayJobSupportPage() {
  return <LandingPageTemplate config={riyadhWorkdayJobSupport} />;
}
