import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { agenticAiRagMlopsJobSupportUSA } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(agenticAiRagMlopsJobSupportUSA);

export default function AgenticAiRagMlopsJobSupportUSAPage() {
  return <LandingPageTemplate config={agenticAiRagMlopsJobSupportUSA} />;
}
