import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayCoreConnectorsJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayCoreConnectorsJobSupport);

export default function WorkdayCoreConnectorsJobSupportPage() {
  return <LandingPageTemplate config={workdayCoreConnectorsJobSupport} />;
}
