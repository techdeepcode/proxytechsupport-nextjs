import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { calgaryWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(calgaryWorkdayJobSupport);

export default function CalgaryWorkdayJobSupportPage() {
  return <LandingPageTemplate config={calgaryWorkdayJobSupport} />;
}
