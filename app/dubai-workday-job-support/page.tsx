import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dubaiWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dubaiWorkdayJobSupport);

export default function DubaiWorkdayJobSupportPage() {
  return <LandingPageTemplate config={dubaiWorkdayJobSupport} />;
}
