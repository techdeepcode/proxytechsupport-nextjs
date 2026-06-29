import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { montrealWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(montrealWorkdayJobSupport);

export default function MontrealWorkdayJobSupportPage() {
  return <LandingPageTemplate config={montrealWorkdayJobSupport} />;
}
