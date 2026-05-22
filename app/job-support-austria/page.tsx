import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jobSupportAustria } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jobSupportAustria);

export default function JobSupportAustriaPage() {
  return <LandingPageTemplate config={jobSupportAustria} />;
}
