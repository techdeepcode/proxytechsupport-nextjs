import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { reactJobSupportCanada } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(reactJobSupportCanada);

export default function ReactJobSupportCanadaPage() {
  return <LandingPageTemplate config={reactJobSupportCanada} />;
}
