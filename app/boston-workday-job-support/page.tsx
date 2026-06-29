import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { bostonWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(bostonWorkdayJobSupport);

export default function BostonWorkdayJobSupportPage() {
  return <LandingPageTemplate config={bostonWorkdayJobSupport} />;
}
