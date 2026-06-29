import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { charlotteWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(charlotteWorkdayJobSupport);

export default function CharlotteWorkdayJobSupportPage() {
  return <LandingPageTemplate config={charlotteWorkdayJobSupport} />;
}
