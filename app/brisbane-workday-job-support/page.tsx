import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { brisbaneWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(brisbaneWorkdayJobSupport);

export default function BrisbaneWorkdayJobSupportPage() {
  return <LandingPageTemplate config={brisbaneWorkdayJobSupport} />;
}
