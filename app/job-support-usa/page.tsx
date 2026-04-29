import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jobSupportUSA } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jobSupportUSA);

export default function JobSupportUSAPage() {
  return <LandingPageTemplate config={jobSupportUSA} />;
}
