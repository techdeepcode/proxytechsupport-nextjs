import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jobSupportSwitzerland } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jobSupportSwitzerland);

export default function JobSupportSwitzerlandPage() {
  return <LandingPageTemplate config={jobSupportSwitzerland} />;
}
