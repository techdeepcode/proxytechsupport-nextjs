import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { melbourneWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(melbourneWorkdayJobSupport);

export default function MelbourneWorkdayJobSupportPage() {
  return <LandingPageTemplate config={melbourneWorkdayJobSupport} />;
}
