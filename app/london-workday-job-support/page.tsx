import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { londonWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(londonWorkdayJobSupport);

export default function LondonWorkdayJobSupportPage() {
  return <LandingPageTemplate config={londonWorkdayJobSupport} />;
}
