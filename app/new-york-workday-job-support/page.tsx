import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { newYorkWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(newYorkWorkdayJobSupport);

export default function NewYorkWorkdayJobSupportPage() {
  return <LandingPageTemplate config={newYorkWorkdayJobSupport} />;
}
