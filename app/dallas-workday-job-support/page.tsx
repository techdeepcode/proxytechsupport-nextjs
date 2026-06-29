import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dallasWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dallasWorkdayJobSupport);

export default function DallasWorkdayJobSupportPage() {
  return <LandingPageTemplate config={dallasWorkdayJobSupport} />;
}
