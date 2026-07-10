import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'vector-database-selection-for-rag')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_vector_database_selection_for_rag() {
  return <LandingPageTemplate config={config} />;
}
