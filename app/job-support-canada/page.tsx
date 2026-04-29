import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jobSupportCanada } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jobSupportCanada);

export default function JobSupportCanadaPage() {
  return <LandingPageTemplate config={jobSupportCanada} />;
}
