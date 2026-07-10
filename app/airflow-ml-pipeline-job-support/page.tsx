import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'airflow-ml-pipeline-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_airflow_ml_pipeline_job_support() {
  return <LandingPageTemplate config={config} />;
}
