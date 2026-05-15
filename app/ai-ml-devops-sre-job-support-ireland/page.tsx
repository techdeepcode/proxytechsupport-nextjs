import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { aiMlDevopsSreJobSupportIreland } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(aiMlDevopsSreJobSupportIreland);

export default function AiMlDevopsSreJobSupportIrelandPage() {
  return <LandingPageTemplate config={aiMlDevopsSreJobSupportIreland} />;
}
