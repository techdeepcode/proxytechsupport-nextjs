import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { devopsJobSupportCanada } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(devopsJobSupportCanada);

export default function DevOpsJobSupportCanadaPage() {
  return <LandingPageTemplate config={devopsJobSupportCanada} />;
}
