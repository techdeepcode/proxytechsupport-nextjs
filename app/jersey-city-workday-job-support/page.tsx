import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jerseyCityWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jerseyCityWorkdayJobSupport);

export default function JerseyCityWorkdayJobSupportPage() {
  return <LandingPageTemplate config={jerseyCityWorkdayJobSupport} />;
}
