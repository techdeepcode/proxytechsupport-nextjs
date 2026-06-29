import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { sanJoseWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(sanJoseWorkdayJobSupport);

export default function SanJoseWorkdayJobSupportPage() {
  return <LandingPageTemplate config={sanJoseWorkdayJobSupport} />;
}
