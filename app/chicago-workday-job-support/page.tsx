import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { chicagoWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(chicagoWorkdayJobSupport);

export default function ChicagoWorkdayJobSupportPage() {
  return <LandingPageTemplate config={chicagoWorkdayJobSupport} />;
}
