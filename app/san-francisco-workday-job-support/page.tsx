import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { sanFranciscoWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(sanFranciscoWorkdayJobSupport);

export default function SanFranciscoWorkdayJobSupportPage() {
  return <LandingPageTemplate config={sanFranciscoWorkdayJobSupport} />;
}
