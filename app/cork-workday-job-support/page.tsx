import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { corkWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(corkWorkdayJobSupport);

export default function CorkWorkdayJobSupportPage() {
  return <LandingPageTemplate config={corkWorkdayJobSupport} />;
}
