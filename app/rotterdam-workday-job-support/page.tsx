import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { rotterdamWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(rotterdamWorkdayJobSupport);

export default function RotterdamWorkdayJobSupportPage() {
  return <LandingPageTemplate config={rotterdamWorkdayJobSupport} />;
}
