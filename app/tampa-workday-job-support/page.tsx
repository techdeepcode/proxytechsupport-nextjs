import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { tampaWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(tampaWorkdayJobSupport);

export default function TampaWorkdayJobSupportPage() {
  return <LandingPageTemplate config={tampaWorkdayJobSupport} />;
}
