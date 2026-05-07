import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { cloudJobSupportCanada } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(cloudJobSupportCanada);

export default function CloudJobSupportCanadaPage() {
  return <LandingPageTemplate config={cloudJobSupportCanada} />;
}
