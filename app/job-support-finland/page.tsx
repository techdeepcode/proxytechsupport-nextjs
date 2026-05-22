import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jobSupportFinland } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jobSupportFinland);

export default function JobSupportFinlandPage() {
  return <LandingPageTemplate config={jobSupportFinland} />;
}
