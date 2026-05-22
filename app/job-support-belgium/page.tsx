import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jobSupportBelgium } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jobSupportBelgium);

export default function JobSupportBelgiumPage() {
  return <LandingPageTemplate config={jobSupportBelgium} />;
}
