import type { LandingPageConfig } from '../landing-pages';
import { companyHubPages } from './hub-pages';

/**
 * Aggregate of the additive 500-COMPANY employer cluster's generated landing pages
 * (Tier A company authority hubs). Spread into data/landing-pages.ts → allLandingPages
 * (→ sitemap) and consumed by the generated app/<slug>/page.tsx route files.
 *
 * The dashboard at /tech-companies/ (data/companies/registry.ts) links to every hub, so
 * no hub is orphaned. Non-hub companies are represented as searchable dashboard cards
 * that link to their existing dedicated cluster or the most relevant existing service.
 *
 * ProxyTechSupport is independent and not affiliated with any listed employer.
 */
export const allCompanyClusterPages: LandingPageConfig[] = [...companyHubPages];

export { companyHubPages } from './hub-pages';
