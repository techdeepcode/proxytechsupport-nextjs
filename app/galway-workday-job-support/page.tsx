import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { galwayWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(galwayWorkdayJobSupport);

export default function GalwayWorkdayJobSupportPage() {
  return <LandingPageTemplate config={galwayWorkdayJobSupport} />;
}
