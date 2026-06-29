import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { munichWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(munichWorkdayJobSupport);

export default function MunichWorkdayJobSupportPage() {
  return <LandingPageTemplate config={munichWorkdayJobSupport} />;
}
