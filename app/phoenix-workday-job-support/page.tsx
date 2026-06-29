import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { phoenixWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(phoenixWorkdayJobSupport);

export default function PhoenixWorkdayJobSupportPage() {
  return <LandingPageTemplate config={phoenixWorkdayJobSupport} />;
}
