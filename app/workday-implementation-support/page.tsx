import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayImplementationSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayImplementationSupport);

export default function WorkdayImplementationSupportPage() {
  return <LandingPageTemplate config={workdayImplementationSupport} />;
}
