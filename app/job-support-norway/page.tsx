import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jobSupportNorway } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jobSupportNorway);

export default function JobSupportNorwayPage() {
  return <LandingPageTemplate config={jobSupportNorway} />;
}
