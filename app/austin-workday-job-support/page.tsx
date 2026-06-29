import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { austinWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(austinWorkdayJobSupport);

export default function AustinWorkdayJobSupportPage() {
  return <LandingPageTemplate config={austinWorkdayJobSupport} />;
}
