

claude "
You are working on the existing Proxy Tech Support website codebase.

Add these execution rules at the very top of the prompt, before everything else:

EXECUTION RULES — READ FIRST:
- Work in batches. Do not attempt all 150 pages in one response.
- Batch size: maximum 15-20 files per turn.
- After each batch, stop and output exactly:
  BATCH COMPLETE: [batch name] — [N files created] — type "next" to continue
- Do not proceed to next batch until I type "next".
- If you feel context window getting large, stop earlier and checkpoint.
- Start with: inspection only. Output project structure summary. Wait for "next".
- Then: data file + template only. Wait for "next".
- Then: navigation/menu changes only. Wait for "next".
- Then: sitemap/SEO files only. Wait for "next".
- Then: pages in batches of 20. Wait for "next" between each batch.
- Run build only after all 150 pages are done.

API TIMEOUT PREVENTION RULES:
- Never write more than 200 lines of code in a single tool call.
- When creating page content files, write a maximum of 3 pages per tool call, then pause.
- Never batch multiple large file writes into one operation.
- After every file write, output a one-line status: FILE WRITTEN: [filename]
- If generating page data arrays (like pharmaPages.ts), split into multiple smaller
  files if the array exceeds 100 lines. For example:
  pharmaPages-cat1.ts, pharmaPages-cat2.ts, then import and merge in index.
- Prefer many small writes over one large write.
- Never attempt to write the full 150-page data object in one shot.
  Write 20-25 entries at a time, checkpoint, then continue on "next".

CRITICAL BUSINESS WARNING:
This is a live revenue-generating SEO website. Existing IT job support, proxy interview, location, technology, blog, homepage, header, footer, sitemap, redirects, schema, styling, layout, routes, menu behavior, and content MUST NOT be broken, renamed, removed, refactored, reordered, or visually changed.

This pharma work can impact revenue, SEO indexing, and the existing IT business. Make additive changes only.

MAIN TASK:
Add a completely new PHARMA JOB SUPPORT + PHARMA INTERVIEW SEO cluster with exactly 150 new pharma pages as an additive feature only.

VERY IMPORTANT:
- This must be a new addition only.
- Do not mix pharma into existing IT pages.
- Do not redesign the existing website.
- Do not change any existing theme, styling, color system, buttons, cards, spacing, layout, or typography.
- Do not add a new pharma theme.
- Use the same existing site theme and components.
- Do not disturb the current IT proxy job support theme.
- Do not change the existing homepage hero.
- Do not change current menu behavior except adding exactly two new pharma menu items.
- Do not break existing SEO indexing.
- Do not break current WhatsApp, call, CTA, analytics, tracking, sitemap, robots, IndexNow, or redirect behavior.
- All new pharma public routes must be flat root-level paths.
- No nested /pharma/... URLs.
- Mobile responsiveness is critical because mobile users are more important.

BEFORE CHANGING ANYTHING:
1. Inspect the project structure carefully.
2. Identify current routing pattern.
3. Identify current page/content generation pattern.
4. Identify current header/menu implementation.
5. Identify current desktop menu behavior.
6. Identify current mobile menu behavior.
7. Identify current sitemap generation.
8. Identify current metadata/schema pattern.
9. Identify SEO/indexing files such as sitemap, robots, llms.txt, ai.txt, agents.txt, IndexNow scripts, metadata generators, route manifests, redirects, schema helpers, and content registries.
10. Make the smallest additive implementation possible.

DO NOT:
- Do not delete or rename any existing files.
- Do not modify existing IT page content.
- Do not change existing homepage hero.
- Do not change existing IT theme.
- Do not add pharma-specific theme colors.
- Do not add new global CSS variables for pharma.
- Do not change global CSS, Tailwind config, theme config, button styles, card styles, header styles, or layout styles unless absolutely required for the two new menu links to appear safely.
- Do not touch, rename, reorder, remove, or redesign any existing menu item.
- Do not remove existing SEO metadata.
- Do not remove existing sitemap URLs.
- Do not modify existing redirects.
- Do not change current CTA buttons.
- Do not change existing WhatsApp/call tracking behavior.
- Do not mix pharma content into existing IT pages except one small homepage pharma section if safe.
- Do not create nested pharma URLs.
- Do not create /pharma/... public paths.
- Do not use the word Resume for pharma service labels. Use Profile Marketing instead.
- Do not create /pharma-resume-marketing/.
- Do not use fake medical claims.
- Do not write anything suggesting exam fraud, impersonation, illegal interview activity, credential fraud, fake experience, or fake certifications.
- Do not write 'we attend interview as you'.
- Do not write 'we impersonate'.
- Do not write 'we guarantee selection'.
- Do not write 'pass exam for you'.
- Do not write 'we take test for you'.
- Do not write 'we clear certification for you'.
- Do not create thin duplicate doorway pages.
- Do not create public nested /pharma routes.
- Do not introduce mobile horizontal scrolling.
- Do not break existing Call Now and WhatsApp CTAs.

MUST DO:
1. Add exactly 150 pharma pages.
2. Add exactly two new top-level pharma menu items:
   - PHARMA JOB SUPPORT -> /pharma-job-support/
   - PHARMA INTERVIEW -> /pharma-interview-support/
3. Keep all existing IT behavior unchanged.
4. Keep the existing site theme unchanged.
5. Use existing site components and existing styling patterns.
6. Make all pharma pages crawlable and indexable.
7. Add all pharma pages to sitemap generation.
8. Add SEO metadata, canonical URLs, Open Graph metadata, schema, and internal links.
9. Add pharma pages to agentic/LLM discovery files if present or safely supported.
10. Add internal linking funnel so no pharma page is orphaned.
11. Keep route paths flat, root-level, and SEO-friendly.
12. Use Profile Marketing, not Resume Marketing.
13. Use proxy keyword safely for SEO, without unsafe/illegal wording.
14. Make country/city pages locally relevant with regional pharma/healthcare/regulatory context.
15. Create desktop mega menu for pharma if safe using existing menu style.
16. Create mobile accordion/collapsible menu for pharma if safe using existing mobile menu style.
17. Run build and validation.

========================
MENU REQUIREMENT
========================

Strictly do not touch, rename, reorder, remove, or redesign any existing menu item.

Existing menu items must remain exactly as they are:
- Home
- Job Support
- Locations
- Interview
- Technologies
- Blog
- Contact
- Call Now
- WhatsApp

Only add exactly two new pharma menu items as new additions:

1. PHARMA JOB SUPPORT
   Link: /pharma-job-support/

2. PHARMA INTERVIEW
   Link: /pharma-interview-support/

Do not move pharma under existing Job Support.
Do not move pharma under existing Interview.
Do not rename Job Support.
Do not rename Interview.
Do not merge menus.
Do not convert existing menu into Services.
Do not remove existing dropdowns.
Do not change existing dropdown content.

Desktop final menu should be additive only:

Home | Job Support | Locations | Interview | PHARMA JOB SUPPORT | PHARMA INTERVIEW | Technologies | Blog | Contact

If desktop space becomes tight:
- Do not break layout.
- Keep existing menu unchanged.
- Add the two pharma links in the safest visible way.
- Mobile menu must show both pharma links clearly.

MENU STYLE:
- Use the existing menu style.
- Do not create a new pharma color style.
- Do not change existing green Job Support styling.
- Do not change existing Locations, Interview, Technologies, Blog, Contact styling.
- Keep desktop and mobile header safe and responsive.

========================
DESKTOP + MOBILE PHARMA MENU UX REQUIREMENT
========================

For the two new pharma menu items:
- PHARMA JOB SUPPORT
- PHARMA INTERVIEW

Design desktop and mobile navigation carefully using the existing site menu style.

Do not disturb any existing menu item, existing dropdown, existing mobile menu behavior, or existing IT menu styling.

DESKTOP MENU REQUIREMENT:
On desktop, PHARMA JOB SUPPORT and PHARMA INTERVIEW should open a large column-wise mega dropdown menu, similar to Amazon-style category navigation, if current header architecture safely supports it.

Desktop mega menu behavior:
- Open on hover and keyboard focus if current site supports hover/focus dropdowns.
- Use clean multi-column layout.
- Each column should represent one section.
- Keep it readable, not too tall.
- Use existing site dropdown styling.
- Do not add pharma-specific colors/theme.
- Do not overlap CTA buttons badly.
- Do not break header responsiveness.
- Must work on common desktop widths.
- Use max-width container and wrap safely if needed.
- Add clear section headings using existing typography.
- Add short helper text only if space allows.
- Links must be flat URLs.
- Do not change existing IT dropdown behavior.

PHARMA JOB SUPPORT desktop mega menu columns:

Column 1: Main Pharma Job Support
- Pharma Job Support -> /pharma-job-support/
- Pharma Real-Time Job Support -> /pharma-real-time-job-support/
- Pharma Online Job Support -> /pharma-online-job-support/
- Pharma Remote Job Support -> /pharma-remote-job-support/
- Pharma Proxy Job Support -> /pharma-proxy-job-support/

Column 2: Clinical SAS & Data
- Clinical SAS Job Support -> /clinical-sas-job-support/
- SAS Programmer Job Support -> /sas-programmer-job-support/
- Statistical Programmer Job Support -> /statistical-programmer-job-support/
- SDTM Programmer Job Support -> /sdtm-programmer-job-support/
- ADaM Programmer Job Support -> /adam-programmer-job-support/
- TLF Programming Job Support -> /tlf-programming-job-support/
- CDISC Job Support -> /cdisc-job-support/
- Clinical Data Management -> /clinical-data-management-job-support/

Column 3: Quality, GMP & Validation
- GMP Job Support -> /gmp-job-support/
- Pharma QA Job Support -> /pharma-qa-job-support/
- Pharma Quality Job Support -> /pharma-quality-job-support/
- Validation Job Support -> /validation-job-support/
- CSV Job Support -> /csv-job-support/
- Batch Record Review -> /batch-record-review-support/
- CAPA / Deviation Support -> /capa-support/

Column 4: Regulatory, PV, QC & Manufacturing
- Regulatory Affairs Job Support -> /regulatory-affairs-job-support/
- Pharmacovigilance Job Support -> /pharmacovigilance-job-support/
- Drug Safety Associate Support -> /drug-safety-associate-job-support/
- QC Chemist Job Support -> /qc-chemist-job-support/
- HPLC Job Support -> /hplc-job-support/
- Pharma Manufacturing Support -> /pharma-manufacturing-job-support/
- SAP Pharma Support -> /sap-pharma-support/

Column 5: Pharma Locations
- USA Pharma Job Support -> /usa-pharma-job-support/
- Canada Pharma Job Support -> /canada-pharma-job-support/
- UK Pharma Job Support -> /uk-pharma-job-support/
- Europe Pharma Job Support -> /europe-pharma-job-support/
- Australia Pharma Job Support -> /australia-pharma-job-support/
- New Zealand Pharma Job Support -> /new-zealand-pharma-job-support/
- View All Pharma Pages -> /pharma-job-support/

PHARMA INTERVIEW desktop mega menu columns:

Column 1: Interview Support
- Pharma Interview Support -> /pharma-interview-support/
- Pharma Proxy Interview Support -> /pharma-proxy-interview-support/
- Pharma Mock Interview Support -> /pharma-mock-interview-support/
- Clinical SAS Interview Support -> /clinical-sas-interview-support/
- GMP Interview Support -> /gmp-interview-support/
- Validation Interview Support -> /validation-interview-support/

Column 2: Interview Scheduling
- Get Pharma Interview Scheduled -> /get-pharma-interview-scheduled/
- Pharma Profile Marketing -> /pharma-profile-marketing/
- Pharma Profile Engineering -> /pharma-profile-engineering/
- Pharma Career Support -> /pharma-career-support/

Column 3: Proxy Interview Support
- Clinical SAS Proxy Interview Support -> /clinical-sas-proxy-interview-support/
- SAS Programmer Proxy Interview Support -> /sas-programmer-proxy-interview-support/
- Statistical Programmer Proxy Interview Support -> /statistical-programmer-proxy-interview-support/
- Clinical Data Management Proxy Interview Support -> /clinical-data-management-proxy-interview-support/
- GMP Proxy Interview Support -> /gmp-proxy-interview-support/
- Validation Proxy Interview Support -> /validation-proxy-interview-support/

Column 4: Regulatory, PV & Country Proxy
- Regulatory Affairs Proxy Interview Support -> /regulatory-affairs-proxy-interview-support/
- Pharmacovigilance Proxy Interview Support -> /pharmacovigilance-proxy-interview-support/
- USA Pharma Proxy Interview Support -> /usa-pharma-proxy-interview-support/
- Canada Pharma Proxy Interview Support -> /canada-pharma-proxy-interview-support/
- UK Pharma Proxy Interview Support -> /uk-pharma-proxy-interview-support/
- Europe Pharma Proxy Interview Support -> /europe-pharma-proxy-interview-support/
- Australia Pharma Proxy Interview Support -> /australia-pharma-proxy-interview-support/

MOBILE MENU REQUIREMENT:
Mobile users are very important, so the pharma menu must be fully responsive and easy to navigate.

Mobile behavior:
- Do not show a huge desktop mega menu on mobile.
- Use accordion/collapsible sections.
- PHARMA JOB SUPPORT and PHARMA INTERVIEW should appear clearly in mobile navigation.
- Tapping each pharma menu should expand grouped sections.
- Each section should be collapsible:
  - Main Pharma Job Support
  - Clinical SAS & Data
  - Quality, GMP & Validation
  - Regulatory, PV, QC & Manufacturing
  - Pharma Locations
  - Interview Support
  - Interview Scheduling
  - Proxy Interview Support
- Links should be large enough to tap.
- Use good vertical spacing.
- Keep WhatsApp and Call CTA visible or accessible.
- Do not require horizontal scrolling.
- Do not overflow outside viewport.
- Menu should close after clicking a link if current mobile menu behavior supports that.
- Must work on common mobile widths like 360px, 375px, 390px, 414px.
- Must work on tablet widths.
- Use accessible buttons for collapsible headings.
- Add aria-expanded / aria-controls if current project style supports accessibility.
- Keyboard focus should be safe.
- Do not introduce layout shift that breaks existing mobile header.
- Existing IT mobile menu behavior must remain unchanged.

RESPONSIVE TESTING:
After implementation, verify:
1. Desktop header still fits.
2. Desktop pharma mega menu opens correctly.
3. Mega menu columns are readable.
4. Mobile menu shows PHARMA JOB SUPPORT and PHARMA INTERVIEW clearly.
5. Mobile accordion sections expand/collapse correctly.
6. No horizontal scrolling on mobile.
7. Existing IT mobile menu behavior is unchanged.
8. Existing Call Now and WhatsApp buttons are not broken.

========================
ROUTE / PATH RULE
========================

All new pharma pages must use flat root-level URL paths only.

Correct examples:
- /pharma-job-support/
- /pharma-interview-support/
- /clinical-sas-job-support/
- /clinical-sas-proxy-interview-support/
- /gmp-job-support/
- /validation-job-support/
- /usa-pharma-job-support/
- /canada-pharma-job-support/
- /new-jersey-pharma-job-support/

Do NOT create nested route paths like:
- /pharma/job-support/
- /pharma/clinical-sas-job-support/
- /services/pharma-job-support/
- /job-support/pharma/
- /locations/usa/pharma-job-support/
- /pharma/countries/usa/

All 150 pharma URLs must live at root-level flat slugs exactly as listed below.

If the project uses dynamic routing:
- /[slug] style is acceptable if already used by the project.
- /pharma/[slug] is NOT acceptable.
- Nested public URLs are NOT acceptable.
- Internal file organization can be data-driven, but public URLs must remain flat.

Menu links, internal links, sitemap entries, canonical URLs, breadcrumbs, and related page links must all use these flat paths exactly.

Do not change any existing IT flat URLs.
Do not move existing IT pages into nested folders.
Only add new pharma root-level flat URL pages.

========================
HOMEPAGE REQUIREMENT
========================

Do not redesign homepage.
Do not change existing homepage hero.
Do not change existing primary messaging.
Do not change current IT conversion sections.
Do not change homepage theme.

If safe, add only one small new pharma section below the existing main hero or below the existing services section using the existing site component/style pattern.

Section title:
New: Pharma Job Support & Clinical SAS Interview Support

Short text:
Real-time support for Clinical SAS, SDTM, ADaM, TLF, GMP, validation, regulatory affairs, pharmacovigilance, QC, clinical data, and pharma profile marketing.

CTA:
Explore Pharma Job Support

CTA link:
/pharma-job-support/

This section must be small and must not alter existing homepage layout.

========================
NEW PHARMA PAGES — EXACT 150 FLAT URLS
========================

Create exactly these 150 pharma-related SEO pages using reusable templates and structured content.

IMPORTANT NAMING:
Use /pharma-profile-marketing/
Do not create /pharma-resume-marketing/
Do not use Resume Marketing label for pharma.
Use Profile Marketing.

CATEGORY 1: Main Pharma Service Pages
1 /pharma-job-support/
2 /pharma-interview-support/
3 /pharma-proxy-interview-support/
4 /pharma-proxy-job-support/
5 /pharma-real-time-job-support/
6 /pharma-profile-engineering/
7 /pharma-profile-marketing/
8 /get-pharma-interview-scheduled/
9 /pharma-career-support/
10 /pharma-mock-interview-support/
11 /pharma-online-job-support/
12 /pharma-remote-job-support/

CATEGORY 2: Clinical SAS & Statistical Programming
13 /clinical-sas-job-support/
14 /clinical-sas-interview-support/
15 /clinical-sas-proxy-interview-support/
16 /clinical-sas-proxy-job-support/
17 /sas-programmer-job-support/
18 /sas-programmer-interview-support/
19 /sas-programmer-proxy-interview-support/
20 /statistical-programmer-job-support/
21 /statistical-programmer-interview-support/
22 /statistical-programmer-proxy-interview-support/
23 /sdtm-programmer-job-support/
24 /sdtm-interview-support/
25 /adam-programmer-job-support/
26 /adam-interview-support/
27 /tlf-programming-job-support/
28 /tlf-interview-support/
29 /cdisc-job-support/
30 /cdisc-interview-support/
31 /sas-macro-programming-support/
32 /clinical-trial-programming-support/
33 /clinical-trial-sas-94-support/
34 /sas-certification-support/

CATEGORY 3: Clinical Data & Clinical Research
35 /clinical-data-management-job-support/
36 /clinical-data-management-interview-support/
37 /clinical-data-management-proxy-interview-support/
38 /clinical-data-reviewer-job-support/
39 /clinical-data-coordinator-support/
40 /clinical-database-support/
41 /clinical-data-cleaning-support/
42 /clinical-query-resolution-support/
43 /clinical-data-reconciliation-support/
44 /clinical-research-associate-job-support/
45 /cra-interview-support/
46 /clinical-trial-associate-job-support/
47 /clinical-trial-coordinator-support/
48 /clinical-operations-job-support/
49 /edc-job-support/
50 /medidata-rave-support/

CATEGORY 4: GMP, QA & Pharma Quality
51 /gmp-job-support/
52 /gmp-interview-support/
53 /gmp-proxy-interview-support/
54 /pharma-quality-job-support/
55 /pharma-qa-job-support/
56 /quality-assurance-pharma-interview-support/
57 /qa-associate-job-support/
58 /quality-systems-job-support/
59 /batch-record-review-support/
60 /batch-release-job-support/
61 /deviation-management-support/
62 /capa-support/
63 /change-control-support/
64 /root-cause-analysis-support/
65 /audit-readiness-support/
66 /sop-documentation-support/
67 /gdp-documentation-support/
68 /qms-job-support/
69 /alcoa-data-integrity-support/
70 /medical-device-quality-support/
71 /iso-13485-job-support/
72 /fda-21-cfr-820-support/

CATEGORY 5: Validation, CSV & Compliance
73 /validation-job-support/
74 /validation-interview-support/
75 /validation-proxy-interview-support/
76 /csv-job-support/
77 /csv-interview-support/
78 /csv-proxy-interview-support/
79 /computer-system-validation-support/
80 /iq-oq-pq-support/
81 /process-validation-support/
82 /cleaning-validation-support/
83 /equipment-validation-support/
84 /method-validation-support/
85 /qa-validation-support/
86 /cqv-engineer-job-support/
87 /validation-protocol-support/
88 /validation-report-writing-support/
89 /fmea-risk-assessment-support/

CATEGORY 6: Pharmacovigilance, Regulatory & Medical Writing
90 /pharmacovigilance-job-support/
91 /pharmacovigilance-interview-support/
92 /pharmacovigilance-proxy-interview-support/
93 /drug-safety-associate-job-support/
94 /drug-safety-interview-support/
95 /regulatory-affairs-job-support/
96 /regulatory-affairs-interview-support/
97 /regulatory-affairs-proxy-interview-support/
98 /regulatory-submission-support/
99 /fda-submission-support/
100 /ema-submission-support/
101 /medical-writing-job-support/
102 /medical-writing-interview-support/
103 /clinical-study-report-writing-support/
104 /regulatory-documentation-support/

CATEGORY 7: QC, Lab, Analytical & Manufacturing
105 /qc-chemist-job-support/
106 /qc-analyst-job-support/
107 /qc-chemist-interview-support/
108 /qc-chemist-proxy-interview-support/
109 /analytical-chemist-job-support/
110 /hplc-job-support/
111 /empower-3-support/
112 /stability-testing-support/
113 /microbiology-analyst-support/
114 /pharma-manufacturing-job-support/
115 /gmp-manufacturing-support/
116 /manufacturing-documentation-support/
117 /production-batch-support/
118 /cleanroom-compliance-support/
119 /line-clearance-support/
120 /sap-pharma-support/

CATEGORY 8: Country Pages
121 /usa-pharma-job-support/
122 /usa-pharma-proxy-interview-support/
123 /canada-pharma-job-support/
124 /canada-pharma-proxy-interview-support/
125 /uk-pharma-job-support/
126 /uk-pharma-proxy-interview-support/
127 /europe-pharma-job-support/
128 /europe-pharma-proxy-interview-support/
129 /australia-pharma-job-support/
130 /australia-pharma-proxy-interview-support/
131 /new-zealand-pharma-job-support/
132 /new-zealand-pharma-proxy-interview-support/
133 /ireland-pharma-job-support/
134 /germany-pharma-job-support/
135 /france-pharma-job-support/
136 /switzerland-pharma-job-support/
137 /netherlands-pharma-job-support/
138 /poland-pharma-job-support/

CATEGORY 9: Russia, Ukraine & Nearby
139 /russia-pharma-job-support/
140 /russia-pharma-proxy-interview-support/
141 /ukraine-pharma-job-support/
142 /ukraine-pharma-proxy-interview-support/
143 /georgia-pharma-job-support/
144 /kazakhstan-pharma-job-support/

CATEGORY 10: Major City Pages
145 /new-jersey-pharma-job-support/
146 /boston-pharma-job-support/
147 /toronto-pharma-job-support/
148 /london-pharma-job-support/
149 /dublin-pharma-job-support/
150 /sydney-pharma-job-support/

========================
PAGE CONTENT REQUIREMENTS
========================

Each pharma page must include:
- SEO title
- meta description
- canonical URL
- Open Graph metadata
- Twitter/X card metadata if current site supports it
- H1
- breadcrumb
- short intro
- service scope section
- roles/tasks covered section
- who this page is for
- why choose Proxy Tech Support
- WhatsApp CTA
- related pharma pages
- FAQ section with 5-7 unique FAQs
- FAQ schema JSON-LD
- BreadcrumbList schema JSON-LD
- Service schema JSON-LD where existing site pattern supports it
- contextual internal links
- conversion funnel CTA

Use existing page layout and existing site components.
Do not create a new pharma visual theme.

GENERAL PHARMA POSITIONING:
Use wording like:
- real-time pharma job support
- pharma interview support
- proxy interview support keyword for SEO
- profile-based interview preparation
- mock interview support
- pharma profile engineering
- pharma profile marketing
- get pharma interview scheduled
- Clinical SAS, SDTM, ADaM, TLF, CDISC
- GMP, QA, validation, CSV, regulatory, pharmacovigilance, QC, clinical data
- USA, Canada, UK, Europe, Australia, New Zealand, Ireland, Germany, France, Switzerland, Netherlands, Poland, Russia, Ukraine, Georgia, Kazakhstan

COMPLIANCE / BRAND SAFETY:
When using 'proxy interview' keyword, do not describe impersonation or fraud.
Use careful phrasing:
- proxy interview support
- real-time preparation
- mock interview guidance
- interview confidence support
- profile-based technical explanation support
- live preparation support
- role-based interview coaching

Avoid:
- we attend interview as you
- we impersonate
- we guarantee selection
- fake experience
- fake certification
- pass exam for you
- we take test for you
- we clear certification for you

========================
UNIQUE CONTENT + LOCAL SEO REQUIREMENT
========================

Every pharma page must have unique, page-specific content. Do not create 150 pages with only title/slug changes.

Each page must have unique:
- SEO title
- meta description
- H1
- hero subtitle or page subtitle if existing template supports it
- intro paragraph
- service scope
- task examples
- role examples
- FAQs
- related links
- CTA wording
- schema description

Do not use copy-paste duplicate paragraphs across all pages.

CONTENT UNIQUENESS RULE:
Use category-specific and intent-specific language.

Examples:
- Clinical SAS pages must focus on SAS, CDISC, SDTM, ADaM, TLF, SAP, datasets, specs, validation, clinical trial reporting.
- GMP/QA pages must focus on batch records, deviations, CAPA, change control, QMS, SOPs, GDP, ALCOA+, audit readiness.
- Validation/CSV pages must focus on IQ/OQ/PQ, validation plans, protocols, reports, risk assessment, test scripts, GxP systems.
- Regulatory pages must focus on submissions, documentation, labeling, CTD/eCTD awareness, FDA/EMA-style regulatory workflows.
- Pharmacovigilance pages must focus on drug safety, case processing, adverse events, signal detection basics, safety documentation.
- QC/Lab pages must focus on HPLC, Empower, stability, analytical testing, OOS/OOT, lab documentation, GMP lab records.
- Clinical Data pages must focus on EDC, data cleaning, query management, reconciliation, CRF/eCRF, Medidata Rave.

COUNTRY / CITY LOCALIZATION REQUIREMENT:
Country and city pages must include local pharma/healthcare/regulatory context so they do not look like duplicate doorway pages.

For each country page, include:
- local pharma job market wording
- local clinical research / life science / healthcare industry context
- local regulatory or compliance terms where appropriate
- local candidate audience
- local time zone support wording
- local pharma hubs/cities
- region-specific FAQs
- links to matching role pages and nearby city pages

Do not make country pages identical except country name.

LOCAL REGULATORY / SEO CONTEXT EXAMPLES:

USA pages:
Use natural references to FDA, 21 CFR Part 11, 21 CFR 820 for medical devices, CDISC, Clinical SAS, CRO/pharma roles, GMP, GxP, CAPA, validation, audit readiness, New Jersey, Boston, Philadelphia, San Diego, Research Triangle, and New York pharma markets.

Canada pages:
Use natural references to Health Canada, GMP, clinical research and life sciences roles, Toronto, Mississauga, Brampton, Montreal, Vancouver, Canadian pharma, CRO, quality, validation, regulatory roles.

UK pages:
Use natural references to MHRA, UK clinical research, NHS-related clinical environment where relevant, GxP, GMP, validation, pharmacovigilance, regulatory documentation, London, Manchester, Birmingham, Cambridge, Oxford pharma/life science market.

Europe pages:
Use natural references to EMA, EU-GMP, EudraVigilance where relevant for PV pages, GDPR/data privacy wording where relevant for clinical data pages, Switzerland, Germany, France, Netherlands, Ireland, Poland life science markets.

Ireland pages:
Use natural references to HPRA, Dublin, Cork, Galway pharma and medtech market, GMP, batch release, validation, QA, medical device quality.

Germany pages:
Use natural references to EU-GMP, BfArM / PEI only where naturally relevant, Berlin, Munich, Frankfurt pharma and biotech context, validation, regulatory, quality, clinical research support.

France pages:
Use natural references to ANSM, Paris, Lyon pharma/life science context, EU-GMP, regulatory documentation, PV, clinical research.

Switzerland pages:
Use natural references to Swissmedic, Basel, Zurich, Geneva pharma/biotech market, regulatory, clinical, QA, validation, global pharma support.

Netherlands pages:
Use natural references to EMA presence in Amsterdam, Dutch life sciences, clinical research, regulatory and PV roles, Amsterdam, Rotterdam.

Poland pages:
Use natural references to EU-GMP, Warsaw, Krakow clinical research, PV, regulatory, and shared services market, pharma support for international students and working professionals.

Australia pages:
Use natural references to TGA, GMP, Sydney, Melbourne, Brisbane pharma/clinical research market, regulatory, validation, QA, clinical data roles.

New Zealand pages:
Use natural references to Medsafe, GMP, quality, clinical research, regulatory documentation, Auckland and Wellington candidate market.

Russia pages:
Use natural references to local pharma manufacturing, clinical research, regulatory documentation, GMP-style quality systems, Moscow and Saint Petersburg pharma/life science market, Indian pharma/MBBS/life science students and working professionals where relevant.

Ukraine pages:
Use natural references to clinical research, pharma documentation, GMP-quality, regulatory and PV support, Kyiv and Lviv candidate market, international students and healthcare/pharma professionals where relevant.

Georgia / Kazakhstan pages:
Use natural references to international medical/pharma students, local healthcare/pharma education pathway, remote pharma interview/job support, clinical research, regulatory, QA, and pharma operations support.

CITY PAGE REQUIREMENT:
City pages must mention local pharma/life science context and nearby hubs.

Examples:
- /new-jersey-pharma-job-support/ should mention New Jersey pharma corridor, pharma companies, CRO/clinical SAS demand, QA, regulatory, validation support.
- /boston-pharma-job-support/ should mention Boston/Cambridge biotech, clinical research, statistical programming, regulatory, validation support.
- /toronto-pharma-job-support/ should mention Toronto/Mississauga/Brampton pharma and clinical research job market.
- /london-pharma-job-support/ should mention London UK clinical research, MHRA-related regulatory environment, pharma QA/PV roles.
- /dublin-pharma-job-support/ should mention Dublin/Cork/Galway pharma and medtech ecosystem, HPRA, GMP, batch release, QA.
- /sydney-pharma-job-support/ should mention Sydney/Melbourne pharma, TGA, clinical research, validation, regulatory, QA roles.

LOCAL CONTENT SAFETY:
Do not overclaim legal/regulatory expertise.
Use phrases like:
- familiar with
- aligned with
- commonly used in
- support around documentation and interview preparation for
- role-based understanding of
- pharma job support for regulated environments

Avoid:
- certified legal/regulatory advice
- official regulatory representation
- guaranteed compliance
- guaranteed job placement
- guaranteed interview selection

REGIONAL FAQ REQUIREMENT:
Country and city pages must have location-specific FAQs.

SEO QUALITY RULE:
Do not create thin pages.
Each pharma page should have enough meaningful content to stand alone as an SEO landing page.

Minimum recommended structure:
- Hero/page intro section using existing template
- 300-500 words of unique page-specific content
- 5-8 service/task bullets
- 4-6 role/task examples
- 5-7 unique FAQs
- 6-10 contextual related links
- conversion CTA
- JSON-LD schema

========================
PHARMA INTERNAL LINKING / FUNNEL REQUIREMENT
========================

All 150 pharma pages must be internally linked with each other in a structured SEO funnel.

Do not create isolated pharma pages.

Create this pharma funnel structure:

1. Main Hub Funnel:
/pharma-job-support/ must act as the main pharma hub and link to:
- /pharma-interview-support/
- /pharma-proxy-interview-support/
- /pharma-proxy-job-support/
- /clinical-sas-job-support/
- /clinical-data-management-job-support/
- /gmp-job-support/
- /validation-job-support/
- /csv-job-support/
- /regulatory-affairs-job-support/
- /pharmacovigilance-job-support/
- /qc-chemist-job-support/
- /pharma-profile-marketing/
- /get-pharma-interview-scheduled/

2. Interview Funnel:
/pharma-interview-support/ must link to:
- /pharma-proxy-interview-support/
- /clinical-sas-interview-support/
- /gmp-interview-support/
- /validation-interview-support/
- /regulatory-affairs-interview-support/
- /pharmacovigilance-interview-support/
- /get-pharma-interview-scheduled/
- /pharma-profile-marketing/
- /pharma-profile-engineering/

3. Proxy Funnel:
/pharma-proxy-interview-support/ must link to:
- /clinical-sas-proxy-interview-support/
- /sas-programmer-proxy-interview-support/
- /statistical-programmer-proxy-interview-support/
- /clinical-data-management-proxy-interview-support/
- /gmp-proxy-interview-support/
- /validation-proxy-interview-support/
- /regulatory-affairs-proxy-interview-support/
- /pharmacovigilance-proxy-interview-support/
- /usa-pharma-proxy-interview-support/
- /canada-pharma-proxy-interview-support/
- /uk-pharma-proxy-interview-support/
- /europe-pharma-proxy-interview-support/

4. Role Cluster Linking:
Each role page must link to:
- its matching interview page if available
- its matching proxy interview page if available
- related role pages in the same cluster
- /pharma-job-support/
- /pharma-interview-support/
- /get-pharma-interview-scheduled/

5. Country Funnel:
Each country page must link to:
- /pharma-job-support/
- /pharma-interview-support/
- /pharma-proxy-interview-support/
- its country proxy page if available
- top role pages: Clinical SAS, GMP, Validation, Regulatory, Pharmacovigilance, QC
- nearby city pages where relevant

6. City Funnel:
Each city page must link to:
- parent country page
- /pharma-job-support/
- /pharma-interview-support/
- /pharma-proxy-interview-support/
- top role pages
- /get-pharma-interview-scheduled/

7. Career Conversion Funnel:
Every pharma page should include a conversion section linking to:
- /get-pharma-interview-scheduled/
- /pharma-profile-marketing/
- /pharma-profile-engineering/
- /pharma-interview-support/

Use section title:
Need Pharma Interviews or Job Support?

CTA links:
- Get Pharma Interview Scheduled
- Improve Your Pharma Profile
- Talk to Pharma Support Team on WhatsApp

8. Related Pages Section:
Every pharma page must have a 'Related Pharma Support Pages' section with 6-10 relevant internal links.
These links must be context-specific, not random.

9. Breadcrumbs:
Every pharma page must include breadcrumb links:
Home -> Pharma Job Support -> Current Page

For interview-related pages:
Home -> Pharma Interview -> Current Page

For country/city pages:
Home -> Pharma Job Support -> Country/City Page

10. Footer / Hub Link:
If safe, add one small pharma hub link in footer or existing services area:
Pharma Job Support -> /pharma-job-support/
Do not disturb existing footer layout.

Goal:
Create strong topical authority and a clear conversion funnel:
Home -> Pharma Menu -> Hub Page -> Role/Location Page -> Interview/Profile Marketing/WhatsApp CTA.

========================
SEO / INDEXING / AGENTIC DISCOVERY REQUIREMENT
========================

Add pharma pages to all SEO, indexing, metadata, LLM, and agentic discovery files/systems used by this project.

Strictly do not break or remove anything existing.

First inspect the project and identify all SEO-related files and generators, including but not limited to:
- sitemap.xml generator
- app/sitemap.ts or sitemap config
- robots.txt
- metadata generation files
- canonical URL logic
- schema JSON-LD components
- structured data helpers
- redirects config
- indexnow / Bing submission scripts
- Google Search Console related files
- llms.txt if present
- ai.txt if present
- agents.txt if present
- any SEO route manifest
- any content registry used for generating pages
- any page index / route index / service index
- any footer or crawl hub link system

MUST DO:
1. Add all 150 pharma flat URLs to sitemap generation.
2. Do not remove any existing sitemap URL.
3. Keep all pharma URLs indexable.
4. Add canonical URLs for all pharma pages.
5. Add SEO title and meta description for all pharma pages.
6. Add Open Graph metadata for all pharma pages.
7. Add Twitter/X card metadata if the site already supports it.
8. Add FAQ schema for all pharma pages.
9. Add Service schema for all pharma pages if existing site supports Service schema.
10. Add BreadcrumbList schema for all pharma pages.
11. Add Organization/LocalBusiness reference only if existing site already uses it.
12. Add pharma pages into any existing SEO route registry.
13. Add pharma pages into any existing sitemap URL array/list.
14. Add pharma pages into any existing IndexNow URL submission script if present.
15. Add pharma pages into llms.txt if the project has llms.txt.
16. If llms.txt does not exist, create one only if it is safe and consistent with the project.
17. If created, include existing important site sections plus new pharma hub/major pharma pages. Do not replace existing SEO content.
18. If ai.txt or agents.txt exists, update it safely with pharma page discovery information.
19. Do not create experimental SEO files if the project has no pattern for them, unless clearly safe.
20. Do not add noindex to pharma pages.
21. Do not add disallow rules for pharma pages.
22. Do not block pharma pages in robots.txt.
23. Do not change existing robots.txt rules unless needed to include sitemap reference safely.
24. Do not remove existing canonical, sitemap, robots, or metadata behavior.

AGENTIC / LLM DISCOVERY:
If the project supports LLM/agentic discovery files, add a pharma section like:

Pharma Job Support:
- /pharma-job-support/
- /pharma-interview-support/
- /pharma-proxy-interview-support/
- /clinical-sas-job-support/
- /gmp-job-support/
- /validation-job-support/
- /csv-job-support/
- /regulatory-affairs-job-support/
- /pharmacovigilance-job-support/
- /qc-chemist-job-support/
- /pharma-profile-marketing/
- /get-pharma-interview-scheduled/

Purpose:
Help AI search engines, LLM agents, and crawlers understand that Proxy Tech Support now provides pharma job support, pharma interview support, profile marketing, Clinical SAS support, GMP/QA support, validation/CSV support, regulatory support, pharmacovigilance support, QC support, and pharma career support.

INDEXNOW / SEARCH ENGINE SUBMISSION:
If the project already has IndexNow or Bing URL submission scripts:
- Add all 150 pharma URLs to the submission source.
- Do not trigger live submission unless the project workflow already does that during deployment.
- Do not modify existing deployment flow unless needed.
- Keep pharma URLs flat.

SEO SAFETY:
- No duplicate title tags.
- No duplicate meta descriptions.
- No duplicate canonical URLs.
- No broken canonical paths.
- No nested /pharma/... URLs.
- No orphan pharma pages.
- No removed IT pages.
- No removed IT sitemap entries.
- No removed redirect rules.
- No removed robots rules.
- No accidental noindex.

========================
IMPLEMENTATION PREFERENCE
========================

Prefer data-driven implementation.

Create a pharma pages data/config file if current architecture allows, for example:
src/data/pharmaPages.ts
or equivalent based on existing structure.

Create reusable pharma page template/component.

Do not hand-code 150 totally separate duplicated files unless the project structure requires static files.

Use the same styling approach already used by the site.

Keep TypeScript types strict if project uses TypeScript.

Keep build clean.

Do not create public nested /pharma routes.

========================
TESTING REQUIRED
========================

After implementation, run:
- npm run build

If there are lint/type/build commands available in package.json, run them too:
- npm run lint
- npm run typecheck

Only run commands that exist in package.json.

Fix any errors caused by your changes.

========================
FINAL VALIDATION REQUIRED
========================

Before final answer, provide:

1. List of files changed.
2. Confirmation existing IT routes were not modified, removed, renamed, or moved.
3. Confirmation existing IT pages/content were not changed.
4. Confirmation existing IT metadata was not removed.
5. Confirmation existing sitemap entries were not removed.
6. Confirmation existing redirects were not changed.
7. Confirmation existing global theme/header/homepage hero was not changed.
8. Confirmation no theme, color system, Tailwind config, global CSS, button style, or card style was changed for pharma.
9. Confirmation existing menu items were not touched, renamed, reordered, or removed.
10. Confirmation exactly two new pharma menu items were added:
   - PHARMA JOB SUPPORT -> /pharma-job-support/
   - PHARMA INTERVIEW -> /pharma-interview-support/
11. Confirmation desktop pharma menus use column-wise mega menu layout where safely supported.
12. Confirmation mobile pharma menus are responsive accordion/collapsible menus.
13. Confirmation no mobile horizontal overflow was introduced.
14. Confirmation existing IT desktop and mobile menu behavior was not changed.
15. Confirmation Call Now and WhatsApp CTAs still work on mobile.
16. Confirmation all 150 pharma routes are generated.
17. Confirmation all 150 pharma routes are flat root-level paths.
18. Confirmation no /pharma/... nested public URLs were created.
19. Confirmation /pharma-profile-marketing/ exists and /pharma-resume-marketing/ was not created.
20. Confirmation sitemap includes all 150 pharma routes.
21. Confirmation robots.txt does not block pharma pages.
22. Confirmation no pharma page has noindex.
23. Confirmation canonicals are flat and correct.
24. Confirmation metadata exists for every pharma page.
25. Confirmation FAQ schema exists for every pharma page.
26. Confirmation BreadcrumbList schema exists for every pharma page.
27. Confirmation Service schema exists where supported.
28. Confirmation llms.txt / ai.txt / agents.txt were updated only if present or safely created.
29. Confirmation IndexNow/Bing submission source includes pharma URLs if the project already uses IndexNow.
30. Confirmation pharma pages are internally linked using hub, role, country, city, proxy, and conversion funnel structure.
31. Confirmation no pharma page is isolated without related links.
32. Confirmation country and city pharma pages have local SEO wording, regional pharma/healthcare terms, and local regulatory context where appropriate.
33. Confirmation country/city pages are not duplicate doorway pages.
34. Confirmation no duplicate pharma title tags.
35. Confirmation no duplicate pharma meta descriptions.
36. Confirmation proxy pages include proxy keyword naturally without unsafe wording.
37. Confirmation Profile Marketing is used, not Resume Marketing.
38. Confirmation build passed.
39. Any risks or manual review notes.

IMPORTANT:
This is a high-risk revenue site. Make minimal additive changes only. Preserve existing SEO and UI. Do not refactor unrelated code.
"