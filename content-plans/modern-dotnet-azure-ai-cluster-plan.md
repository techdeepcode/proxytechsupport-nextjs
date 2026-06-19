# Modern .NET Azure AI Job Support — Cluster Plan

## Architecture

- Framework: Next.js App Router (flat app/ directory)
- Page template: LandingPageTemplate with LandingPageConfig
- Data file: data/dotnet-cluster-pages.ts (new, imported into data/landing-pages.ts)
- Sitemap: app/sitemap.ts (manually maintained — dotnetClusterRoutes block added)
- Pattern: app/[slug]/page.tsx per page

## Existing .NET pages (DO NOT TOUCH)

- app/dotnet-job-support-guide/page.tsx (KnowledgeGuidePage)
- app/dotnet-job-support-usa/page.tsx (LandingPageTemplate — data in landing-pages.ts)

## Entry Points Added

- Homepage: small .NET cluster section added to app/page.tsx
- Existing job support links: links added where safe

## Phase Execution Status

| Phase | Description | Pages | Status |
|-------|-------------|-------|--------|
| A | Parent + 12 Country pages | 13 | in-progress |
| B | 15 USA City pages | 15 | pending |
| C | 12 Canada/UK/EU/AU City pages | 12 | pending |
| D | 11 Core .NET tech pages | 11 | pending |
| E | 15 Azure+.NET pages | 15 | pending |
| F | 15 AI/ML pages | 15 | pending |
| G | 10 Aspire+Cloud-Native pages | 10 | pending |
| H | 10 Architecture pages | 10 | pending |
| I | 8 Full-stack pages | 8 | pending |
| J | 8 Database pages | 8 | pending |
| K | 8 Legacy modernization pages | 8 | pending |
| L | 10 Interview proxy+questions | 10 | pending |
| **Total** | | **135** | |

## Internal Linking Hub URLs

- Parent: /modern-dotnet-azure-ai-job-support/
- Azure hub: /dotnet-azure-job-support/
- AI/ML hub: /dotnet-ai-ml-job-support/
- Interview proxy hub: /dotnet-interview-proxy-support/
