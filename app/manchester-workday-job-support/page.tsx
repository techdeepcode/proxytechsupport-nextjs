import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { manchesterWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(manchesterWorkdayJobSupport);

export default function ManchesterWorkdayJobSupportPage() {
  return <LandingPageTemplate config={manchesterWorkdayJobSupport} />;
}
