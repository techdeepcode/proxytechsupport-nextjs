import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jeddahWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jeddahWorkdayJobSupport);

export default function JeddahWorkdayJobSupportPage() {
  return <LandingPageTemplate config={jeddahWorkdayJobSupport} />;
}
