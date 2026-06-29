import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { leedsWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(leedsWorkdayJobSupport);

export default function LeedsWorkdayJobSupportPage() {
  return <LandingPageTemplate config={leedsWorkdayJobSupport} />;
}
