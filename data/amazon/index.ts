import type { LandingPageConfig } from '../landing-pages';
import { amazonCorePages, amazonMasterHub } from './core-pages';
import { amazonLeadershipPrinciplesPages } from './leadership-principles-pages';
import { amazonRoundPages } from './interview-round-pages';
import { amazonRoleInfoPages } from './role-info-pages';
import { amazonRoleProxyInterviewPages } from './role-proxy-interview-pages';
import { amazonRoleProxyJobPages } from './role-proxy-job-pages';
import { amazonTechnologyPages } from './technology-pages';
import { amazonTeamPages } from './team-pages';
import { amazonCountryPages } from './country-pages';
import { amazonCityPages } from './city-pages';

/**
 * Aggregate of the additive AMAZON GLOBAL AUTHORITY cluster. Consumed by
 * data/landing-pages.ts (spread into allLandingPages → sitemap) and by the
 * generated app/<slug>/page.tsx route files (find-by-slug).
 *
 * Content reflects publicly documented Amazon guidance and amazon.jobs observations
 * current through August 2026. INFORMATIONAL pages use clean URLs; COMMERCIAL pages
 * make "proxy" explicit. ProxyTechSupport is independent of Amazon/AWS.
 */
export const allAmazonClusterPages: LandingPageConfig[] = [
  ...amazonCorePages,
  ...amazonLeadershipPrinciplesPages,
  ...amazonRoundPages,
  ...amazonRoleInfoPages,
  ...amazonRoleProxyInterviewPages,
  ...amazonRoleProxyJobPages,
  ...amazonTechnologyPages,
  ...amazonTeamPages,
  ...amazonCountryPages,
  ...amazonCityPages,
];

// ─── No-orphan guarantee ─────────────────────────────────────────────────────
// The Amazon master hub (amazonMasterHub) acts as the cluster index: it links to
// EVERY other cluster page (including all country and city commercial variants) so
// nothing is orphaned. The hub itself is surfaced site-wide via the Job Support
// menu + footer. Additive: existing curated hub links are preserved; we only append
// what is missing.
function shortLabel(title: string): string {
  return title.split(' — ')[0].split(' | ')[0].split(':')[0].trim();
}

(() => {
  const rl = amazonMasterHub.relatedLinks;
  if (!rl) return;
  const add = (rl.additionalLinks ??= []);
  const have = new Set(add.map((l) => l.href));
  have.add('/amazon-interview-career-support/');
  for (const p of allAmazonClusterPages) {
    const href = `/${p.slug}/`;
    if (have.has(href)) continue;
    add.push({ label: shortLabel(p.title), href });
    have.add(href);
  }
})();
