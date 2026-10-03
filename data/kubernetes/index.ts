import type { LandingPageConfig } from '../landing-pages';
import { kubernetesCorePages, kubernetesAiHub } from './core-pages';
import { kubernetesAgenticPages } from './agentic-pages';
import { kubernetesMcpPages } from './mcp-pages';
import { kubernetesInferencePages } from './inference-pages';
import { kubernetesCloudPages } from './cloud-pages';
import { kubernetesOnpremPages } from './onprem-pages';
import { kubernetesIncidentPages } from './incident-pages';
import { kubernetesIndustryPages } from './industry-pages';
import { kubernetesUseCasePages } from './usecase-pages';
import { kubernetesCountryPages } from './country-pages';
import { kubernetesRolePages } from './role-pages';
import { kubernetesCityPages, kubernetesCityBreadcrumbMap as cityMap } from './city-pages';
import { kubernetesIncidentPostmortemPages } from './incident-postmortem-pages';

/**
 * Aggregate of the additive Kubernetes + Agentic AI + AI Infrastructure global
 * authority cluster. Consumed by data/landing-pages.ts (spread into allLandingPages
 * → sitemap) and by the generated app/<slug>/page.tsx route files (find-by-slug).
 *
 * Technical content reflects the verified ecosystem state through September/October 2026
 * (Kubernetes v1.37 "Garhwal", NVIDIA Dynamo, GKE Inference Gateway/Agent Sandbox,
 * KServe LLMInferenceService, OpenShift AI llm-d, AWS Bedrock AgentCore, Microsoft
 * Agent Framework 1.0 / Microsoft Foundry).
 */
export const allKubernetesClusterPages: LandingPageConfig[] = [
  ...kubernetesCorePages,
  ...kubernetesAgenticPages,
  ...kubernetesMcpPages,
  ...kubernetesInferencePages,
  ...kubernetesCloudPages,
  ...kubernetesOnpremPages,
  ...kubernetesIncidentPages,
  ...kubernetesIndustryPages,
  ...kubernetesUseCasePages,
  ...kubernetesCountryPages,
  ...kubernetesRolePages,
  ...kubernetesCityPages,
  ...kubernetesIncidentPostmortemPages,
];

export { kubernetesCityBreadcrumbMap } from './city-pages';

// ─── No-orphan guarantee ─────────────────────────────────────────────────────
// The Kubernetes AI master hub (kubernetesAiHub) acts as the cluster index: every
// cluster page is appended to its related-links so the whole cluster is reachable in
// one hop from the hub, and the hub is linked site-wide via Technologies/Services nav.
// Combined with each page's own in-body contextual links (parents, siblings, related
// technologies/clouds/countries/industries/incidents + a commercial CTA), this makes
// the cluster a fully connected graph with zero orphans. Additive: existing curated hub
// links are preserved; we only append hrefs that are not already present.

function shortLabel(title: string): string {
  return title.split(' — ')[0].split(' | ')[0].trim();
}

// ─── Country → city contextual links ─────────────────────────────────────────
// Each parent country page links to its cities so every city has ≥2 contextual
// inbound links (its country + the master hub), not just the hub. Additive.
(() => {
  const countryBySlug = new Map(kubernetesCountryPages.map((p) => [p.slug, p]));
  for (const city of kubernetesCityPages) {
    const meta = cityMap[city.slug];
    if (!meta) continue;
    const parent = countryBySlug.get(meta.countrySlug);
    if (!parent?.relatedLinks) continue;
    const add = (parent.relatedLinks.additionalLinks ??= []);
    const href = `/${city.slug}/`;
    if (add.some((l) => l.href === href)) continue;
    add.push({ label: `${meta.city} Kubernetes AI`, href });
  }
})();

(() => {
  const rl = kubernetesAiHub.relatedLinks;
  if (!rl) return;
  const add = (rl.additionalLinks ??= []);
  const have = new Set<string>();
  // Seed with every href already present anywhere in the hub's related links so we never duplicate.
  for (const l of [
    ...(rl.geoLinks ?? []),
    ...(rl.techLinks ?? []),
    rl.problemLink,
    rl.proxyLink,
    ...(rl.blogLink ? [rl.blogLink] : []),
    ...add,
  ]) {
    if (l?.href) have.add(l.href);
  }
  have.add('/kubernetes-ai-job-support/');
  for (const p of allKubernetesClusterPages) {
    const href = `/${p.slug}/`;
    if (have.has(href)) continue;
    add.push({ label: shortLabel(p.title), href });
    have.add(href);
  }
})();
