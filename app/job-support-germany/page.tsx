import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jobSupportGermany } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jobSupportGermany);

export default function JobSupportGermanyPage() {
  return <LandingPageTemplate config={jobSupportGermany} />;
}
