import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { torontoWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(torontoWorkdayJobSupport);

export default function TorontoWorkdayJobSupportPage() {
  return <LandingPageTemplate config={torontoWorkdayJobSupport} />;
}
