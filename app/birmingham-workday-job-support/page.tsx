import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { birminghamWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(birminghamWorkdayJobSupport);

export default function BirminghamWorkdayJobSupportPage() {
  return <LandingPageTemplate config={birminghamWorkdayJobSupport} />;
}
