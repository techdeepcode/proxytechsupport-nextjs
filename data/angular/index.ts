import type { LandingPageConfig } from '../landing-pages';
import { angularCorePages, angularSupportServices } from './core-pages';
import { angularCountryPages } from './country-pages';
import { angularUsaCityPages } from './city-usa-pages';
import { angularIntlCityPages } from './city-intl-pages';
import { angularTechPages } from './tech-pages';
import { angularFullStackPages } from './fullstack-pages';
import { angularInterviewPages } from './interview-pages';
import { angularProfilePages } from './profile-pages';
import { angularKbPages } from './kb-pages';

/**
 * Aggregate of the additive Angular SEO cluster. Consumed by
 * data/landing-pages.ts (spread into allLandingPages → sitemap) and by the
 * generated app/<slug>/page.tsx route files (find-by-slug).
 */
export const allAngularClusterPages: LandingPageConfig[] = [
  ...angularCorePages,
  ...angularCountryPages,
  ...angularUsaCityPages,
  ...angularIntlCityPages,
  ...angularTechPages,
  ...angularFullStackPages,
  ...angularInterviewPages,
  ...angularProfilePages,
  ...angularKbPages,
];

// ─── No-orphan guarantee ─────────────────────────────────────────────────────
// The Angular hub (/angular-support-services/) acts as the cluster index: it
// links to every non-city cluster page so nothing is orphaned. City pages are
// reached via their country hub (each country page lists its cities) and via the
// locations directory, keeping the hub link list focused while still guaranteeing
// full crawl reachability from the hub. Additive: existing curated hub links are
// preserved; we only append what is missing.
const citySlugs = new Set(
  [...angularUsaCityPages, ...angularIntlCityPages].map((p) => p.slug),
);

function shortLabel(title: string): string {
  return title.split(' — ')[0].split(' | ')[0].trim();
}

(() => {
  const rl = angularSupportServices.relatedLinks;
  if (!rl) return;
  const add = (rl.additionalLinks ??= []);
  const have = new Set(add.map((l) => l.href));
  have.add('/angular-support-services/');
  for (const p of allAngularClusterPages) {
    if (citySlugs.has(p.slug)) continue;
    const href = `/${p.slug}/`;
    if (have.has(href)) continue;
    add.push({ label: shortLabel(p.title), href });
    have.add(href);
  }
})();
