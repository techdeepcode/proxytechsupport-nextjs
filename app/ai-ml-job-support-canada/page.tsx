import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { aiMlJobSupportCanada } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(aiMlJobSupportCanada);

export default function AiMlJobSupportCanadaPage() {
  return <LandingPageTemplate config={aiMlJobSupportCanada} />;
}
