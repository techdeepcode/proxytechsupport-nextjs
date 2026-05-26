import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayJobSupportCanada } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayJobSupportCanada);

export default function WorkdayJobSupportCanadaPage() {
  return <LandingPageTemplate config={workdayJobSupportCanada} />;
}
