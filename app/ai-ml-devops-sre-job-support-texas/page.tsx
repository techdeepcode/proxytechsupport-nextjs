import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { aiMlDevOpsSreJobSupportTexas } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(aiMlDevOpsSreJobSupportTexas);

export default function AiMlDevOpsSreJobSupportTexasPage() {
  return <LandingPageTemplate config={aiMlDevOpsSreJobSupportTexas} />;
}
