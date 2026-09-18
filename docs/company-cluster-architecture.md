# Company Cluster — Architecture

Additive **500-Company Tech Employer Cluster + Centralized Company Support Dashboard**.

## Flat URL rules

- Dashboard hub: **`/tech-companies/`** (flat).
- Company hubs: **`/{company}-career-support/`** (flat, root-level). No nested paths.
- Logical hierarchy (Home → Tech Companies → Company → Roles → …) is expressed via
  **breadcrumbs / BreadcrumbList JSON-LD only**, never in the URL.

## Tier system (depth scales; every company covered)

| Tier | Count | Treatment |
| --- | --- | --- |
| A | 39 | Deepest hubs. 29 marquee employers use hand-written, verified facts; the rest use the registry-driven builder. |
| B | 54 | Medium-depth company hubs (registry-driven, industry-accurate). |
| C | 129 | Lighter company hubs (registry-driven). |
| D | 278 | Searchable dashboard card + valid existing destination; hubs expanded demand-driven. |

- **218** dedicated new hubs generated (Tier A/B/C, minus locked/dedicated-cluster).
- **Amazon** stays LOCKED → existing `/amazon-interview-career-support/`.
- **Workday / UiPath / Hugging Face** → their existing clusters (never recreated).

## Data model

- `data/companies/registry.ts` — all 500 companies (name, slug, aliases, category,
  industry, tier, supportStatus, supportTypes, featured, blurb, primaryUrl, hasHub, locked).
  `hasHub` is auto-derived: Tier A/B/C, not locked, not dedicated-cluster, no explicit
  existing `url`.
- `data/companies/category-profiles.ts` — 23 industry profiles (roles/tech/interview
  focus/products/disciplines/links) that supply accurate context to registry-driven hubs.
- `data/companies/shared.ts` — `companyHub()` builder + FAQ generator + verified existing
  cross-link map (`EX`). Weaves company facts into unique highlights/use-cases/proxy/FAQs.
- `data/companies/hub-pages.ts` — 29 hand-written `CompanyHubFacts` + a `liteFacts()`
  builder; emits one hub per `hasHub` company (rich facts take precedence).
- `data/companies/index.ts` — `allCompanyClusterPages` → spread into `allLandingPages`.

## Page types

- **Dashboard** (`/tech-companies/`) — server page + client `TechCompaniesDashboard`
  (search, industry filter, support-type filter, A–Z, featured, all-500 crawlable cards).
- **Company hub** (`/{slug}-career-support/`) — `LandingPageTemplate` config: interview
  landscape, roles, technologies, proxy interview + job support sections, FAQs, internal links.

## Internal linking model (hub-and-spoke, no orphans)

- Dashboard links to **every** company (500 crawlable `<a>`s in the default view).
- Every hub links back to `/tech-companies/`, to relevant existing clusters (`EX`), to
  proxy interview / proxy job support / get-scheduled / candidate marketing, and (for AI/
  peer sets) to sibling hubs.
- Homepage funnel (`TechCompaniesHomeSection`) + navbar entry + sitemap route.

## Breadcrumb model

`Home → Tech Companies → {Company} → {Engineering Roles / Interviews}` via BreadcrumbList
JSON-LD on the dashboard; hubs render the LandingPageTemplate breadcrumb + WebPage schema.

## Sitemap model

`app/sitemap.ts` maps `allLandingPages` → URLs automatically, so all 218 hubs are included
with self-referencing canonicals; `/tech-companies/` added to static routes (priority 0.9).

## Homepage funnel

Home → **Tech Companies** section (featured chips + "Browse all companies") → `/tech-companies/`
→ search/browse → company hub → role/tech/proxy → existing support service → contact.
