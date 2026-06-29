import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { vancouverWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(vancouverWorkdayJobSupport);

export default function VancouverWorkdayJobSupportPage() {
  return <LandingPageTemplate config={vancouverWorkdayJobSupport} />;
}
