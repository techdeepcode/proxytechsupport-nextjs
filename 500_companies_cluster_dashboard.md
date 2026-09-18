==================================================
CENTRALIZED COMPANY SUPPORT DASHBOARD
==================================================

Create a centralized public dashboard where users can quickly see which major companies ProxyTechSupport supports.

This dashboard must become the main discovery surface for the entire company cluster.

Primary URL:

/tech-companies/

IMPORTANT:
Keep the URL flat.

This page is not just a simple directory.
It should function like a searchable company-support dashboard.

PURPOSE:

Users frequently ask questions such as:

- Do you support Microsoft?
- Do you provide interview support for Google?
- Do you support NVIDIA?
- Do you support Netflix interviews?
- Do you support Salesforce?
- Do you provide proxy interview support for ServiceNow?
- Do you provide job support for Databricks?
- Do you support this company?

The dashboard should answer these questions immediately.

==================================================
DASHBOARD UX
==================================================

The page should make it extremely easy to:

- search companies
- browse companies
- scroll companies
- filter companies
- identify supported companies
- open the relevant company support page
- navigate into interview/job-support/company-specific content

Include a prominent search box near the top.

Example placeholder:

Search Microsoft, Google, NVIDIA, Netflix, Salesforce...

Search should support:

- company name
- common aliases
- product names where useful
- company abbreviations

Examples:

Microsoft
MSFT
Google
Alphabet
Meta
Facebook
AWS
Amazon
NVIDIA
Salesforce

==================================================
COMPANY CARDS
==================================================

Display companies using clean cards or compact rows.

Each card may show:

Company Name
Industry / Category
Support status
Available support areas
Primary CTA

Example:

Microsoft

Cloud • Enterprise Software • AI

Supported

Available:
✓ Technical Interview Support
✓ Proxy Interview Support
✓ Job Support
✓ Azure
✓ .NET
✓ DevOps
✓ AI/ML
✓ Data Engineering

[View Microsoft Support]

Another example:

NVIDIA

AI • GPU • Semiconductor

Supported

Available:
✓ Technical Interviews
✓ AI/ML
✓ CUDA
✓ MLOps
✓ Systems Engineering
✓ Job Support

[View NVIDIA Support]

==================================================
SUPPORT STATUS
==================================================

Use clear support statuses such as:

Supported
Limited Coverage
Coming Soon
Existing Dedicated Cluster

Do not claim support where we do not have meaningful coverage.

For Amazon:

Status:
Existing Dedicated Cluster

The dashboard may link to the existing Amazon cluster.

DO NOT create or modify Amazon pages.

==================================================
SEARCH & FILTERING
==================================================

Allow filtering by useful categories.

Possible filters:

All Companies
Big Tech
AI
Cloud
SaaS
Cybersecurity
Data
FinTech
Semiconductors
Enterprise Software
E-commerce
Streaming
Consulting
Healthcare Technology
Automotive
Aerospace

Also consider filters by support type:

Interview Support
Proxy Interview
Job Support
AI/ML
DevOps
Cloud
Data Engineering
SRE
Software Engineering
Cybersecurity

Do not generate crawlable filter URLs unless there is a deliberate SEO reason.

Filtering can remain client-side while core company links remain server-rendered/crawlable.

==================================================
A–Z NAVIGATION
==================================================

Provide alphabetical navigation:

A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

Users should be able to jump quickly to companies.

This is especially important with ~500 companies.

==================================================
FEATURED COMPANIES
==================================================

Near the top show a compact Featured Companies section.

Possible high-demand examples:

Microsoft
Google
Meta
NVIDIA
Netflix
Salesforce
Oracle
ServiceNow
Databricks
Snowflake
Apple
IBM

Amazon may also be listed but must link to its EXISTING cluster.

Do not modify Amazon.

==================================================
HOME PAGE CONNECTION
==================================================

The company dashboard MUST be discoverable directly from the homepage.

Do NOT redesign the whole homepage.

Add a clean section such as:

"Interview & Job Support for Major Tech Companies"

Supporting text:

"Search 500+ major technology and technology-driven employers to see available technical interview, proxy interview, job support, cloud, DevOps, AI/ML, data engineering and software engineering support."

Then include:

- search or mini-search
- a few featured company logos/names if legally appropriate
- a CTA:

"Browse All Companies"

Link:

/tech-companies/

Optional secondary CTA:

"Search Company Support"

Do not place hundreds of company links directly on the homepage.

==================================================
HOME PAGE MINI SEARCH
==================================================

If technically clean and lightweight, add a small company search field on the homepage.

Example:

"Which company are you interviewing with?"

Placeholder:

Search Microsoft, Google, NVIDIA...

Behavior:

User types:
Microsoft

Then route them to:

/microsoft-career-support/

or the best matching company page.

If a company has no dedicated deep cluster yet, route to its dashboard entry or company hub.

If no match exists, show:

"Can't find your company? Contact us and we'll check coverage."

Use the site's existing contact/WhatsApp mechanisms.

Do not invent contact details.

==================================================
USER QUESTION REDUCTION
==================================================

The dashboard should reduce repetitive support inquiries.

It should make answers visible without requiring users to message first.

For example, someone asking:

"Do you provide interview support for Microsoft?"

should be able to search Microsoft and immediately see:

Microsoft — Supported

Technical Interview Support
Proxy Interview Support
Azure
.NET
DevOps
Cloud
AI/ML
Data Engineering

Then open the Microsoft page.

==================================================
COMPANY DETAIL DRAWER / QUICK VIEW
==================================================

If compatible with the current frontend architecture, consider a lightweight quick-view panel.

When the user clicks a company card, show:

Company
Supported services
Relevant technologies
Relevant roles
Relevant countries
Primary company page

Do not make the drawer the only way to access content.

Every company must still have crawlable HTML links.

==================================================
MOBILE UX
==================================================

This dashboard must work very well on mobile.

On mobile:

- search must remain visible
- cards must remain compact
- filters should collapse cleanly
- avoid giant grids
- avoid horizontal overflow
- alphabet navigation should be usable
- CTA buttons should be touch friendly

==================================================
SEO FOR DASHBOARD
==================================================

The dashboard should target broad discovery intent naturally.

Possible title direction:

Tech Company Interview & Job Support Directory | 500+ Employers

Possible H1:

Technical Interview & Job Support for 500+ Major Companies

Possible supporting keywords:

company interview support
technical interview support
proxy interview support
interview proxy
company job support
tech company interview support
software engineer interview support
cloud interview support
DevOps interview support
AI interview support
data engineer interview support

Do not keyword stuff.

==================================================
STRUCTURED DATA FOR DASHBOARD
==================================================

Consider:

WebPage
ItemList
BreadcrumbList

The ItemList may represent major company entries.

Do not mark every company as ProxyTechSupport's own Organization.

Do not misuse employer schema.

==================================================
DASHBOARD PERFORMANCE
==================================================

Do not load 500 heavy cards with large image assets.

Prefer:

text-first company cards
lazy-loaded optional imagery
small icons
server-rendered company names/links

Search/filter behavior should remain lightweight.

Do not create a huge JavaScript payload.

==================================================
DASHBOARD INTERNAL LINKING
==================================================

Every company displayed must link to:

its existing company hub
OR
the newly created company authority page
OR
its existing dedicated cluster

No dead cards.

Amazon:
must link to existing Amazon content.

Each Tier A company:
should have a direct company hub.

Lower-tier companies:
may initially point to their company authority page.

==================================================
NO ORPHAN COMPANY RULE
==================================================

Every company hub created in this project must be linked from:

/tech-companies/

and at least one relevant category/filter/browse surface where applicable.

This dashboard becomes the primary root for the company cluster.

==================================================
SUPPORT COVERAGE DATA MODEL
==================================================

Extend the company registry with:

supportStatus
supportTypes
featured
searchAliases
dashboardDescription
primarySupportUrl

Example:

{
  "name": "Microsoft",
  "slug": "microsoft",
  "supportStatus": "supported",
  "supportTypes": [
    "technical-interview",
    "proxy-interview",
    "job-support",
    "cloud",
    "devops",
    "ai-ml",
    "data-engineering",
    "software-engineering"
  ],
  "featured": true,
  "searchAliases": [
    "Microsoft",
    "MSFT",
    "Azure"
  ],
  "primarySupportUrl": "/microsoft-career-support/"
}

Amazon:

{
  "name": "Amazon",
  "supportStatus": "existing-dedicated-cluster",
  "primarySupportUrl": "<existing Amazon hub URL>",
  "locked": true
}

==================================================
DASHBOARD FALLBACK
==================================================

If a user searches for a company not yet in the supported company list:

Show:

"Company not listed?"

Then provide a simple CTA:

"Ask us about support for this company"

Route through existing contact/WhatsApp flow.

Do not create a dynamic indexable page for arbitrary company names.

==================================================
ANALYTICS / DEMAND SIGNAL
==================================================

If the existing site has analytics/event tracking, add non-invasive tracking for:

company search
company card click
no-result search
filter usage
company CTA click

This can later help prioritize which Tier B/C/D companies deserve deeper clusters.

Do not introduce a new analytics provider solely for this feature if none exists.

==================================================
FINAL DASHBOARD VERIFICATION
==================================================

Before completion verify:

[ ] /tech-companies/ exists
[ ] all ~500 companies appear in the centralized directory
[ ] Amazon links to existing cluster
[ ] Amazon remains untouched
[ ] company search works
[ ] aliases work
[ ] filters work
[ ] A-Z navigation works
[ ] featured companies work
[ ] mobile layout works
[ ] all company links are crawlable
[ ] no dead links
[ ] no company cards point to missing pages
[ ] homepage links to dashboard
[ ] homepage company discovery does not overwhelm existing design
[ ] dashboard metadata is unique
[ ] dashboard schema validates
[ ] dashboard is included in sitemap
[ ] dashboard is included in llms.txt
[ ] dashboard is included in llms-full.txt
[ ] company hubs receive inbound links from dashboard
[ ] no new orphan company pages exist