import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { amsterdamWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(amsterdamWorkdayJobSupport);

export default function AmsterdamWorkdayJobSupportPage() {
  return <LandingPageTemplate config={amsterdamWorkdayJobSupport} />;
}
