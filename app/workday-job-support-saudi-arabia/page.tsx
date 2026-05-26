import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayJobSupportSaudiArabia } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayJobSupportSaudiArabia);

export default function WorkdayJobSupportSaudiArabiaPage() {
  return <LandingPageTemplate config={workdayJobSupportSaudiArabia} />;
}
