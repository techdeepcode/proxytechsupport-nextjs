import type { LandingPageConfig } from '../landing-pages';
import { huggingFaceCorePages, huggingFaceHub } from './core-pages';
import { huggingFacePlatformPages } from './platform-pages';
import { huggingFaceTransformersPages } from './transformers-pages';
import { huggingFaceFineTuningPages } from './finetuning-pages';
import { huggingFaceAgentsPages } from './agents-pages';
import { huggingFaceEmbeddingsPages } from './embeddings-pages';
import { huggingFaceInferencePages } from './inference-pages';
import { huggingFacePerformancePages } from './performance-pages';
import { huggingFaceDiffusersPages } from './diffusers-pages';
import { huggingFaceMlopsPages } from './mlops-pages';
import { huggingFaceCloudPages } from './cloud-pages';
import { huggingFaceInterviewPages } from './interview-pages';
import { huggingFaceComparisonPages } from './comparison-pages';
import { huggingFaceCountryPages } from './country-pages';

/**
 * Aggregate of the additive Hugging Face / Generative AI / LLM Engineering SEO
 * cluster. Consumed by data/landing-pages.ts (spread into allLandingPages →
 * sitemap) and by the generated app/<slug>/page.tsx route files (find-by-slug).
 *
 * Technical content reflects the verified Hugging Face ecosystem state through
 * September 2026 (Transformers v5 as the model-definition framework; TGI in
 * maintenance mode with vLLM/SGLang recommended; the hf CLI + Xet storage;
 * Inference Providers vs dedicated Inference Endpoints; TRL v1 with stable GRPO
 * and DistillationTrainer; Sentence Transformers v5+; smolagents; OpenEnv
 * (experimental); Kernels / Kernel Hub; Trackio; Lighteval; Optimum-Neuron).
 *
 * Batch files are added here as they land — keep this list in sync with the
 * per-category exports. Never include an already-live slug (see shared.ts EXISTING).
 */
export const allHuggingFaceClusterPages: LandingPageConfig[] = [
  ...huggingFaceCorePages,
  ...huggingFacePlatformPages,
  ...huggingFaceTransformersPages,
  ...huggingFaceFineTuningPages,
  ...huggingFaceAgentsPages,
  ...huggingFaceEmbeddingsPages,
  ...huggingFaceInferencePages,
  ...huggingFacePerformancePages,
  ...huggingFaceDiffusersPages,
  ...huggingFaceMlopsPages,
  ...huggingFaceCloudPages,
  ...huggingFaceInterviewPages,
  ...huggingFaceComparisonPages,
  ...huggingFaceCountryPages,
];

// ─── No-orphan guarantee ─────────────────────────────────────────────────────
// The Hugging Face master hub (huggingFaceHub) acts as the cluster index: it links
// to every cluster page so nothing is orphaned. Additive: existing curated hub
// links are preserved; we only append what is missing.
function shortLabel(title: string): string {
  return title.split(' — ')[0].split(' | ')[0].trim();
}

(() => {
  const rl = huggingFaceHub.relatedLinks;
  if (!rl) return;
  const add = (rl.additionalLinks ??= []);
  const have = new Set(add.map((l) => l.href));
  have.add('/hugging-face-proxy-job-support/');
  for (const p of allHuggingFaceClusterPages) {
    const href = `/${p.slug}/`;
    if (have.has(href)) continue;
    add.push({ label: shortLabel(p.title), href });
    have.add(href);
  }
})();
