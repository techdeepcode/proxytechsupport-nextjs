import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { frankfurtWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(frankfurtWorkdayJobSupport);

export default function FrankfurtWorkdayJobSupportPage() {
  return <LandingPageTemplate config={frankfurtWorkdayJobSupport} />;
}
