import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jobSupportIreland } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jobSupportIreland);

export default function JobSupportIrelandPage() {
  return <LandingPageTemplate config={jobSupportIreland} />;
}
