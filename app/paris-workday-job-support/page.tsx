import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { parisWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(parisWorkdayJobSupport);

export default function ParisWorkdayJobSupportPage() {
  return <LandingPageTemplate config={parisWorkdayJobSupport} />;
}
