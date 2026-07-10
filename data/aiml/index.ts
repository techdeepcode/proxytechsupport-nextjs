import type { LandingPageConfig } from '../landing-pages';
import { aimlCorePages, globalAiMlJobSupport } from './core-pages';
import { aimlCountryPages } from './country-pages';
import { aimlUsaCityPages } from './city-usa-pages';
import { aimlIntlCityPages } from './city-intl-pages';
import { aimlTechPages } from './tech-pages';
import { aimlRolePages } from './role-pages';
import { aimlInterviewPages } from './interview-pages';
import { aimlScheduledPages } from './scheduled-pages';
import { aimlCandidateMarketingPages } from './candidate-marketing-pages';
import { aimlIndustryPages } from './industry-pages';
import { aimlKbPages } from './kb-pages';
import { aimlComparisonPages } from './comparison-pages';

/**
 * Aggregate of the additive global AI/ML SEO cluster. Consumed by
 * data/landing-pages.ts (spread into allLandingPages → sitemap) and by the
 * generated app/<slug>/page.tsx route files (find-by-slug).
 */
export const allAiMlClusterPages: LandingPageConfig[] = [
  ...aimlCorePages,
  ...aimlCountryPages,
  ...aimlUsaCityPages,
  ...aimlIntlCityPages,
  ...aimlTechPages,
  ...aimlRolePages,
  ...aimlInterviewPages,
  ...aimlScheduledPages,
  ...aimlCandidateMarketingPages,
  ...aimlIndustryPages,
  ...aimlKbPages,
  ...aimlComparisonPages,
];

// ─── No-orphan guarantee ─────────────────────────────────────────────────────
// The Global AI/ML hub acts as the cluster index: it links to every non-city
// cluster page so nothing is orphaned. City pages are intentionally reached via
// their country hub (each country page lists its cities), keeping the hub link
// list focused while still guaranteeing full crawl reachability from the hub
// (which is itself linked site-wide from the footer). Additive: existing curated
// hub links are preserved; we only append what is missing.
const citySlugs = new Set([...aimlUsaCityPages, ...aimlIntlCityPages].map((p) => p.slug));

function shortLabel(title: string): string {
  return title.split(' — ')[0].split(' | ')[0].trim();
}

(() => {
  const rl = globalAiMlJobSupport.relatedLinks;
  if (!rl) return;
  const add = (rl.additionalLinks ??= []);
  const have = new Set(add.map((l) => l.href));
  have.add('/global-ai-ml-job-support/');
  for (const p of allAiMlClusterPages) {
    if (citySlugs.has(p.slug)) continue;
    const href = `/${p.slug}/`;
    if (have.has(href)) continue;
    add.push({ label: shortLabel(p.title), href });
    have.add(href);
  }
})();
