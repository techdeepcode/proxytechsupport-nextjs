import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { ottawaWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(ottawaWorkdayJobSupport);

export default function OttawaWorkdayJobSupportPage() {
  return <LandingPageTemplate config={ottawaWorkdayJobSupport} />;
}
