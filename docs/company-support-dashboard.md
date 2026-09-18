# Company Support Dashboard (`/tech-companies/`)

The centralized public dashboard that answers **"Do you support interviews / job support
for <company>?"** for 500+ employers.

## Implementation

- Server page `app/tech-companies/page.tsx` — hero, breadcrumb, metadata, `CollectionPage`
  + `ItemList` (500) + `BreadcrumbList` JSON-LD.
- Client component `components/TechCompaniesDashboard.tsx` — search, filters, A–Z, cards.
- Data: `data/companies/registry.ts` (all 500).

## Features

- **Search** by company name, aliases (e.g. MSFT → Microsoft, Facebook → Meta), industry,
  and support type.
- **Industry filter** — 23 categories (Big Tech, AI, Cloud, SaaS, Enterprise, Dev Tools,
  Data, Cybersecurity, FinTech, Finance, Semiconductors, Hardware, E-commerce, Streaming/
  Gaming, Telecom, Healthtech, Pharma, Automotive, Aerospace, Space, Consulting, Logistics,
  Consumer/Retail).
- **A–Z navigation** to jump across the 500.
- **Featured companies** (69 marked featured; 16 on the homepage funnel).
- **Cards** show name, industry line, support status badge (Supported / Dedicated Cluster /
  Limited / Coming Soon), support-type chips, company-specific blurb, and a CTA to the
  destination.
- **No-result fallback** — "Can't find your company?" → existing WhatsApp contact
  (`lib/whatsapp.ts`), no dynamic indexable pages created.

## Crawlability & performance

- Default (no filter) view server-renders **all 500** company `<Link>`s (A–Z grouped) so
  every destination is in crawlable HTML — filtering is purely client-side on top.
- Text-first cards, no logos/heavy images, no large JS payload (single client component).

## Status semantics

- `supported` — meaningful coverage (has a hub or valid destination).
- `dedicated-cluster` — existing deep cluster (Amazon → its hub; Workday/UiPath/Hugging Face).
- `limited` / `coming-soon` — reserved for accurate future signalling.

## Amazon

Listed, badged **Dedicated Cluster**, card links to existing `/amazon-interview-career-support/`.
Never modified.

## Final dashboard checklist

- [x] `/tech-companies/` exists  · [x] all ~500 companies searchable  · [x] aliases work
- [x] filters + A–Z + featured work  · [x] Amazon → existing cluster, untouched
- [x] all company links crawlable  · [x] no dead cards  · [x] homepage links to dashboard
- [x] unique metadata + valid schema  · [x] in sitemap  · [x] in llms.txt + llms-full.txt
- [x] hubs receive inbound links from dashboard  · [x] no new orphan pages
