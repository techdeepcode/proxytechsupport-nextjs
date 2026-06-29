import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { perthWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(perthWorkdayJobSupport);

export default function PerthWorkdayJobSupportPage() {
  return <LandingPageTemplate config={perthWorkdayJobSupport} />;
}
