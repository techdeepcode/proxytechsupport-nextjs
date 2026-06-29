import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { glasgowWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(glasgowWorkdayJobSupport);

export default function GlasgowWorkdayJobSupportPage() {
  return <LandingPageTemplate config={glasgowWorkdayJobSupport} />;
}
