import type { LandingPageConfig } from '../landing-pages';
import { azureCorePages, azureAiMlHub } from './core-pages';
import { azureFoundryPages } from './foundry-pages';
import { azureOpenAiPages } from './openai-pages';
import { azureAgentPages } from './agent-pages';
import { azureSearchRagPages } from './search-rag-pages';
import { azureMlMlopsPages } from './ml-mlops-pages';
import { azurePlatformPages } from './platform-pages';
import { azureOpsPages } from './ops-pages';
import { azureRolesInterviewPages } from './roles-interview-pages';
import { azureCountryPages } from './country-pages';
import { azureCityPages, azureCitySlugs } from './city-pages';
import { azureIndustryPages } from './industry-pages';
import { azureKbPages } from './kb-pages';
import { azureComparisonPages } from './comparison-pages';

/**
 * Aggregate of the additive Microsoft Azure AI / ML / Generative AI / Agentic AI
 * SEO cluster. Consumed by data/landing-pages.ts (spread into allLandingPages →
 * sitemap) and by the generated app/<slug>/page.tsx route files (find-by-slug).
 *
 * Technical content reflects the verified Microsoft/Azure product state through
 * August 2026 (Microsoft Foundry, Foundry Agent Service, Foundry Models & Model
 * Router, Azure AI Search agentic retrieval, Foundry IQ, Azure ML, Microsoft
 * Agent Framework, Foundry Local).
 *
 * Batch files are added here as they land — keep this list in sync with the
 * per-category exports. Never include an already-live slug (see shared.ts EXISTING).
 */
export const allAzureClusterPages: LandingPageConfig[] = [
  ...azureCorePages,
  ...azureFoundryPages,
  ...azureOpenAiPages,
  ...azureAgentPages,
  ...azureSearchRagPages,
  ...azureMlMlopsPages,
  ...azurePlatformPages,
  ...azureOpsPages,
  ...azureRolesInterviewPages,
  ...azureCountryPages,
  ...azureCityPages,
  ...azureIndustryPages,
  ...azureKbPages,
  ...azureComparisonPages,
];

// ─── No-orphan guarantee ─────────────────────────────────────────────────────
// The Azure AI/ML hub (azureAiMlHub) acts as the cluster index: it links to every
// non-city cluster page so nothing is orphaned. City pages are intentionally
// reached via their country hub (each country page lists its cities), keeping the
// hub link list focused while guaranteeing full crawl reachability from the hub
// (itself linked site-wide via Technologies/Services + footer once integrated).
// Additive: existing curated hub links are preserved; we only append what is missing.
const citySlugs = new Set<string>(azureCitySlugs); // cities reached via their country hub, not the master hub

function shortLabel(title: string): string {
  return title.split(' — ')[0].split(' | ')[0].trim();
}

(() => {
  const rl = azureAiMlHub.relatedLinks;
  if (!rl) return;
  const add = (rl.additionalLinks ??= []);
  const have = new Set(add.map((l) => l.href));
  have.add('/azure-ai-ml-proxy-job-support/');
  for (const p of allAzureClusterPages) {
    if (citySlugs.has(p.slug)) continue;
    const href = `/${p.slug}/`;
    if (have.has(href)) continue;
    add.push({ label: shortLabel(p.title), href });
    have.add(href);
  }
})();
