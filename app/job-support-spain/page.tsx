import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jobSupportSpain } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jobSupportSpain);

export default function JobSupportSpainPage() {
  return <LandingPageTemplate config={jobSupportSpain} />;
}
