import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayJobSupport);

export default function WorkdayJobSupportPage() {
  return <LandingPageTemplate config={workdayJobSupport} />;
}
