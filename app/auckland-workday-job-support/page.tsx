import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { aucklandWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(aucklandWorkdayJobSupport);

export default function AucklandWorkdayJobSupportPage() {
  return <LandingPageTemplate config={aucklandWorkdayJobSupport} />;
}
