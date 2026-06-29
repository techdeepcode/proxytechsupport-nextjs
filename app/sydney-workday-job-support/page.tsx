import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { sydneyWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(sydneyWorkdayJobSupport);

export default function SydneyWorkdayJobSupportPage() {
  return <LandingPageTemplate config={sydneyWorkdayJobSupport} />;
}
