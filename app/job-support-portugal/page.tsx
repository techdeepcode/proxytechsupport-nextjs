import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jobSupportPortugal } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jobSupportPortugal);

export default function JobSupportPortugalPage() {
  return <LandingPageTemplate config={jobSupportPortugal} />;
}
