import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { strugglingInJob } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(strugglingInJob);

export default function StrugglingInJobPage() {
  return <LandingPageTemplate config={strugglingInJob} />;
}
