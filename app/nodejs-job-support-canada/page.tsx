import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { nodejsJobSupportCanada } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(nodejsJobSupportCanada);

export default function NodejsJobSupportCanadaPage() {
  return <LandingPageTemplate config={nodejsJobSupportCanada} />;
}
