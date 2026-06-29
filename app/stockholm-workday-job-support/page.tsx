import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { stockholmWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(stockholmWorkdayJobSupport);

export default function StockholmWorkdayJobSupportPage() {
  return <LandingPageTemplate config={stockholmWorkdayJobSupport} />;
}
