import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jobSupportEurope } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jobSupportEurope);

export default function JobSupportEuropePage() {
  return <LandingPageTemplate config={jobSupportEurope} />;
}
