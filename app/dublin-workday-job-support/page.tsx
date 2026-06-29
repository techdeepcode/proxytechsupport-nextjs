import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dublinWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dublinWorkdayJobSupport);

export default function DublinWorkdayJobSupportPage() {
  return <LandingPageTemplate config={dublinWorkdayJobSupport} />;
}
