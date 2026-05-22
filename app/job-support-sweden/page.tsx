import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jobSupportSweden } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jobSupportSweden);

export default function JobSupportSwedenPage() {
  return <LandingPageTemplate config={jobSupportSweden} />;
}
