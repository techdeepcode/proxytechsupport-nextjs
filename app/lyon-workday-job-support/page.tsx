import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { lyonWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(lyonWorkdayJobSupport);

export default function LyonWorkdayJobSupportPage() {
  return <LandingPageTemplate config={lyonWorkdayJobSupport} />;
}
