# Existing SEO Protection Report

The 500-company cluster is **purely additive**. No existing route, canonical, redirect,
sitemap entry, metadata, component or schema was modified in a way that changes an existing
ranking page.

## Amazon confirmation

- Amazon is `locked: true` in the registry, `supportStatus: dedicated-cluster`.
- Amazon is **excluded from page generation** (the generator only writes `hasHub` slugs;
  Amazon has `hasHub: false`).
- Amazon's dashboard card links to the **existing** `/amazon-interview-career-support/`.
- No Amazon page, slug, canonical, schema or metadata was touched.

## Routes checked before creating URLs

- All 218 new hub slugs (`{company}-career-support`) verified **free** (no existing
  `app/<slug>` directory) before generation. Classification: **NEW**.
- `/tech-companies/` verified free.
- Existing company/vendor clusters were classified **EXISTING** and are cross-linked, never
  recreated: Amazon (245 routes, LOCKED), Microsoft/Azure/Foundry, `google-vertex-ai-job-support`,
  `openai-api-job-support`, `databricks-ml-job-support`, `snowflake-cortex-ai-job-support`,
  Workday, UiPath, Hugging Face, Angular, .NET, AWS.

## What changed (additive only)

- **Added** files under `data/companies/*`, `components/TechCompaniesDashboard.tsx`,
  `components/TechCompaniesHomeSection.tsx`, `app/tech-companies/page.tsx`, 218 generated
  `app/{slug}-career-support/page.tsx`, `scripts/gen-companies-cluster-pages.mjs`.
- **Appended** (no deletions): one import + one spread in `data/landing-pages.ts`; one
  static route in `app/sitemap.ts`; one nav item in `data/navigation.ts`; one section
  import + render in `app/page.tsx`; a curated section in `public/llms.txt` and
  `public/llms-full.txt`.

## Preserved / unchanged

- Existing canonical behaviour, hreflang alternates, robots directives, redirects.
- `app/robots.ts` unchanged (already allows all crawlers + exposes sitemap).
- No global shared component altered; no existing titles/descriptions changed.
- No existing sitemap URL removed; no `noindex` introduced on existing pages.
- `verify-content-urls.mjs` still passes (new canonicals are built inside `data/companies/*`,
  matching the established Amazon/AWS/Azure cluster pattern).
