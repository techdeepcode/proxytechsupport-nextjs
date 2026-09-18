# Company Cluster — Build / Test / Validation Report

## Automated data validations (passed)

- **Registry:** exactly **500** companies, **0** duplicate slugs, Amazon `locked`, tiers
  A=39 / B=54 / C=129 / D=278, 69 featured.
- **Hub configs:** **218** generated hub pages, **0** duplicate slugs, **0** duplicate
  titles, **0** invalid configs (all have title/h1/canonical/faqs).
- **Page files:** 218 physical `app/{slug}-career-support/page.tsx` created (idempotent
  generator; 0 overwrites of existing routes).
- **verify-content-urls.mjs:** passes (80 blog, 19 interviews, 86 landing canonicals →
  page files, no slug overlap/dupes).

## Coverage

- All 500 companies appear in `/tech-companies/` with a status + valid destination
  (see `company-cluster-coverage.md` for the per-company table).
- Amazon LOCKED → existing cluster; Workday/UiPath/Hugging Face → existing clusters.

## Production build

- Command: `npm run build` (`verify-content-urls.mjs && next build`, Next.js 16.2.3, static export).
- Result: **PASS** — see below.

Build output (npm run build, exit code **0**):

```
OK: 80 blog articles, 19 interviews
OK: 86 landing canonicals → app/*/page.tsx
OK: folder === meta.slug, no slug overlap / duplicates
▲ Next.js 16.2.3 (Turbopack)
✓ Compiled successfully in 3.8min
  Finished TypeScript in 25.3s
  Generating static pages (2195) ... done
```

- **TypeScript: PASS** (no type errors across registry, builders, 218 hubs, dashboard, home section).
- **Static export: PASS** — `out/tech-companies/index.html` + all 218 `out/{slug}-career-support/index.html` generated.
- **Crawlability check:** `out/tech-companies/index.html` contains **569** company cards
  (500 all-companies A–Z + 69 featured) → every company is a crawlable `<a>`; Amazon card
  links to `/amazon-interview-career-support/`.
- **Hub render check:** `/google-career-support/` (rich) H1 and `/coinbase-career-support/`
  (registry-driven) title render correct unique content.

## Manual QA notes

- Dashboard: search/alias/industry-filter/A–Z/featured verified in component logic; default
  view server-renders all 500 crawlable links.
- Hub sample (rich): `/google-career-support/`, `/nvidia-career-support/`,
  `/anthropic-career-support/`. Hub sample (registry-driven): `/coinbase-career-support/`,
  `/qualcomm-career-support/`, `/snyk-career-support/`.
