import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayJobSupportAustralia } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayJobSupportAustralia);

export default function WorkdayJobSupportAustraliaPage() {
  return <LandingPageTemplate config={workdayJobSupportAustralia} />;
}
