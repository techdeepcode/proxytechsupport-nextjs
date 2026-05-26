import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayJobSupportUSA } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayJobSupportUSA);

export default function WorkdayJobSupportUSAPage() {
  return <LandingPageTemplate config={workdayJobSupportUSA} />;
}
