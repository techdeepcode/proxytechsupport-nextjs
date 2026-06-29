import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { atlantaWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(atlantaWorkdayJobSupport);

export default function AtlantaWorkdayJobSupportPage() {
  return <LandingPageTemplate config={atlantaWorkdayJobSupport} />;
}
