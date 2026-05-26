import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayJobSupportUK } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayJobSupportUK);

export default function WorkdayJobSupportUKPage() {
  return <LandingPageTemplate config={workdayJobSupportUK} />;
}
