import type { LandingPageConfig } from '../landing-pages';
import { awsCorePages, awsAiMlHub } from './core-pages';
import { awsBedrockPages } from './bedrock-pages';
import { awsAgentCorePages } from './agentcore-pages';
import { awsSageMakerPages } from './sagemaker-pages';
import { awsSageMakerAiPages } from './sagemaker-ai-pages';
import { awsNovaPages } from './nova-pages';
import { awsMlopsPages } from './mlops-pages';
import { awsDataVectorPages } from './data-vector-pages';
import { awsPurposeBuiltPages } from './purpose-built-pages';
import { awsInfraPages } from './infra-pages';
import { awsSecurityObservabilityPages } from './security-observability-pages';
import { awsIntegrationFrameworkPages } from './integration-frameworks-pages';
import { awsRolePages } from './role-pages';
import { awsCountryPages } from './country-pages';
import { awsUsaCityPages } from './city-usa-pages';
import { awsIntlCityPages } from './city-intl-pages';
import { awsIndustryPages } from './industry-pages';
import { awsKbPages } from './kb-pages';
import { awsComparisonPages } from './comparison-pages';

/**
 * Aggregate of the additive AWS AI/ML + Generative AI + Agentic AI SEO cluster.
 * Consumed by data/landing-pages.ts (spread into allLandingPages → sitemap) and by
 * the generated app/<slug>/page.tsx route files (find-by-slug).
 *
 * Technical content reflects the verified AWS product state through August 2026.
 */
export const allAwsClusterPages: LandingPageConfig[] = [
  ...awsCorePages,
  ...awsBedrockPages,
  ...awsAgentCorePages,
  ...awsSageMakerPages,
  ...awsSageMakerAiPages,
  ...awsNovaPages,
  ...awsMlopsPages,
  ...awsDataVectorPages,
  ...awsPurposeBuiltPages,
  ...awsInfraPages,
  ...awsSecurityObservabilityPages,
  ...awsIntegrationFrameworkPages,
  ...awsRolePages,
  ...awsCountryPages,
  ...awsUsaCityPages,
  ...awsIntlCityPages,
  ...awsIndustryPages,
  ...awsKbPages,
  ...awsComparisonPages,
];

// ─── No-orphan guarantee ─────────────────────────────────────────────────────
// The AWS AI/ML hub (awsAiMlHub) acts as the cluster index: it links to every
// non-city cluster page so nothing is orphaned. City pages are intentionally
// reached via their country hub (each country page lists its cities), keeping the
// hub link list focused while guaranteeing full crawl reachability from the hub
// (itself linked site-wide via Technologies/Services + footer once integrated).
// Additive: existing curated hub links are preserved; we only append what is missing.
const citySlugs = new Set([...awsUsaCityPages, ...awsIntlCityPages].map((p) => p.slug));

function shortLabel(title: string): string {
  return title.split(' — ')[0].split(' | ')[0].trim();
}

(() => {
  const rl = awsAiMlHub.relatedLinks;
  if (!rl) return;
  const add = (rl.additionalLinks ??= []);
  const have = new Set(add.map((l) => l.href));
  have.add('/aws-ai-ml-job-support/');
  for (const p of allAwsClusterPages) {
    if (citySlugs.has(p.slug)) continue;
    const href = `/${p.slug}/`;
    if (have.has(href)) continue;
    add.push({ label: shortLabel(p.title), href });
    have.add(href);
  }
})();
