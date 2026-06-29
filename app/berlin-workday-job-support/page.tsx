import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { berlinWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(berlinWorkdayJobSupport);

export default function BerlinWorkdayJobSupportPage() {
  return <LandingPageTemplate config={berlinWorkdayJobSupport} />;
}
