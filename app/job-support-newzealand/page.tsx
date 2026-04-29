import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jobSupportNewZealand } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jobSupportNewZealand);

export default function JobSupportNewZealandPage() {
  return <LandingPageTemplate config={jobSupportNewZealand} />;
}
