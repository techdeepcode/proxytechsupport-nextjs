import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allKubernetesClusterPages } from '@/data/kubernetes';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allKubernetesClusterPages.find((p) => p.slug === 'hugging-face-malicious-model-supply-chain-postmortem')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function K8sPage_hugging_face_malicious_model_supply_chain_postmortem() {
  return <LandingPageTemplate config={config} />;
}
