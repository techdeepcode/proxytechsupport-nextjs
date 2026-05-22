import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jobSupportDenmark } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jobSupportDenmark);

export default function JobSupportDenmarkPage() {
  return <LandingPageTemplate config={jobSupportDenmark} />;
}
