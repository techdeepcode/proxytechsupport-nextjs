import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayCalculatedFieldsJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayCalculatedFieldsJobSupport);

export default function WorkdayCalculatedFieldsJobSupportPage() {
  return <LandingPageTemplate config={workdayCalculatedFieldsJobSupport} />;
}
