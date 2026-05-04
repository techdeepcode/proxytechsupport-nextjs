import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { agenticAiMlJobSupportUSA } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(agenticAiMlJobSupportUSA);

export default function AgenticAiMlJobSupportUSAPage() {
  return <LandingPageTemplate config={agenticAiMlJobSupportUSA} />;
}
