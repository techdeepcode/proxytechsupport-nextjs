import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayHrisJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayHrisJobSupport);

export default function WorkdayHrisJobSupportPage() {
  return <LandingPageTemplate config={workdayHrisJobSupport} />;
}
