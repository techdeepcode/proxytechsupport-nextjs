import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { zurichWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(zurichWorkdayJobSupport);

export default function ZurichWorkdayJobSupportPage() {
  return <LandingPageTemplate config={zurichWorkdayJobSupport} />;
}
