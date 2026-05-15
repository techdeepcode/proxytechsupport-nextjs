import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jobSupportTexas } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jobSupportTexas);

export default function JobSupportTexasPage() {
  return <LandingPageTemplate config={jobSupportTexas} />;
}
