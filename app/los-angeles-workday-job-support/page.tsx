import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { losAngelesWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(losAngelesWorkdayJobSupport);

export default function LosAngelesWorkdayJobSupportPage() {
  return <LandingPageTemplate config={losAngelesWorkdayJobSupport} />;
}
