import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workdayHrisProxyInterviewSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workdayHrisProxyInterviewSupport);

export default function WorkdayHrisProxyInterviewSupportPage() {
  return <LandingPageTemplate config={workdayHrisProxyInterviewSupport} />;
}
