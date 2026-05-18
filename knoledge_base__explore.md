claude "
You are working inside the existing Next.js project for proxytechsupport.com.

TASK:
Create a mobile-first Knowledge Base Explorer page for all flat guide pages.

This is an ADDITIVE UI/navigation task.

DO NOT:
- Do not remove existing pages.
- Do not rename existing URLs.
- Do not change existing page flow.
- Do not break existing header/footer/layout.
- Do not change the flat guide URLs.
- Do not create nested guide URLs.
- Do not refactor unrelated code.
- Do not remove existing sitemap entries.
- Do not weaken existing SEO metadata.

GOAL:
Make all Knowledge Base guide pages easy to discover for real users, Google, Bing, ChatGPT, Perplexity, Claude, and AI/agentic search bots.

The Knowledge Base Explorer should feel like:
- Confluence-style guide hub
- mobile-first resource center
- searchable knowledge base
- category-based SEO content directory
- clean internal-linking hub

MAIN PAGE:
Update or create:

/knowledge-base/

This page should list all Knowledge Base guide pages category-wise and make them searchable/filterable.

IMPORTANT:
The guide pages must remain flat root URLs.

Correct guide URL:
/what-is-proxy-job-support/

Wrong guide URL:
/knowledge-base/what-is-proxy-job-support/

The /knowledge-base/ page is only an explorer/index hub.

DESIGN REQUIREMENTS:
Mobile-first first.
Desktop second.

Mobile layout:
- Hero title
- Short intro
- Search input
- Category chips/tabs
- Expandable category sections OR clean card lists
- Sticky or visible primary CTA
- Fast scrolling
- No clutter
- Cards should be easy to tap

Desktop layout:
- Left category sidebar OR top category tabs
- Search bar
- Main grid/list of guide cards
- Optional featured guides section
- Clean category grouping
- Good whitespace

STYLE:
Use existing site design system/components/Tailwind classes.
Do not introduce new dependency unless absolutely necessary.
Keep it simple, premium, fast, and crawlable.

SEO REQUIREMENTS:
The /knowledge-base/ page must be fully crawlable.
Do not hide the guide links only inside client-side search.
All category links and guide links must exist in rendered HTML.
Search/filter can enhance UX, but crawler must still see all links.

Add metadata:
Title:
Knowledge Base | IT Job Support, Interview Support & Proxy Support Guides

Description:
Explore guides on proxy job support, real-time IT job support, technical interview support, production issue help, DevOps, AI/ML, cloud, Canada interview scheduling, Ireland, Germany, Australia, and Europe IT support.

Canonical:
/knowledge-base/

Add Open Graph title/description.

CONTENT STRUCTURE:

Hero:
H1:
Knowledge Base for IT Job Support, Interview Support & Career Help

Intro copy:
Explore practical guides on real-time IT job support, proxy job support, technical interview support, production issue help, DevOps/SRE/cloud support, AI/ML/RAG/MLOps support, and interview scheduling guidance for USA, Canada, Ireland, Germany, Australia, and Europe.

Primary CTA:
Need Real-Time Support?
Link:
/job-support-usa/

Secondary CTA:
Get Interview Scheduled in Canada
Link:
/get-interview-scheduled-canada/

Search placeholder:
Search guides by technology, country, interview, job support...

Category chips/tabs:
- All
- Interview Support
- Proxy Job Support
- Trending Tech
- Canada
- Ireland
- Germany
- Australia
- Europe
- Production Help

FEATURED GUIDES SECTION:
Add 6 featured cards at top:
1. What Is Proxy Job Support?
/what-is-proxy-job-support/

2. How Proxy Job Support Works
/how-proxy-job-support-works/

3. What Is Interview Proxy Support?
/what-is-interview-proxy-support/

4. Final Round Interview Support Guide
/final-round-interview-support-guide/

5. Why Canada IT Resume Gets No Calls
/why-canada-it-resume-gets-no-calls/

6. DevOps Job Support Guide
/devops-job-support-guide/

Each card should show:
- title
- short description
- category label
- primary intent label like Guide / Canada / DevOps / Interview / Job Support
- link button or arrow

CATEGORY SECTIONS:
Create these sections and list the pages.

1. Interview Support Guides

Pages:
- /what-is-interview-proxy-support/
- /how-live-technical-interview-support-works/
- /final-round-interview-support-guide/
- /technical-interview-support-usa-guide/
- /interview-proxy-support-risks-expectations/

2. Proxy Job Support Guides

Pages:
- /what-is-proxy-job-support/
- /how-proxy-job-support-works/
- /real-time-it-job-support-guide/
- /production-issue-support-for-it-professionals/
- /client-call-and-standup-support-guide/

3. Trending Technology Support Guides

Pages:
- /ai-ml-job-support-guide/
- /mlops-job-support-guide/
- /rag-agentic-ai-job-support-guide/
- /genai-interview-support-guide/
- /devops-job-support-guide/
- /sre-job-support-guide/
- /aws-job-support-guide/
- /azure-job-support-guide/
- /kubernetes-job-support-guide/
- /react-job-support-guide/
- /dotnet-job-support-guide/
- /java-job-support-guide/
- /nodejs-job-support-guide/
- /full-stack-job-support-guide/
- /qa-automation-job-support-guide/
- /data-engineering-job-support-guide/
- /cybersecurity-devsecops-job-support-guide/

4. Canada Knowledge Guides

Pages:
- /why-canada-it-resume-gets-no-calls/
- /how-to-get-it-interviews-scheduled-in-canada/
- /canada-it-resume-linkedin-positioning-guide/
- /canada-it-job-search-mistakes/
- /recruiter-keywords-for-canada-it-jobs/
- /canada-interview-proxy-support-guide/
- /canada-technical-interview-support-guide/
- /canada-final-round-interview-support-guide/
- /canada-live-coding-interview-support-guide/
- /canada-devops-cloud-interview-support-guide/
- /canada-proxy-job-support-guide/
- /how-proxy-job-support-works-in-canada/
- /canada-real-time-it-job-support-guide/
- /canada-production-issue-support-guide/
- /canada-client-call-standup-support-guide/

5. Ireland Knowledge Guides

Pages:
- /ireland-it-job-support-guide/
- /ireland-interview-proxy-support-guide/
- /ireland-production-support-help-guide/
- /ireland-project-onboarding-help-guide/
- /ireland-ai-ml-devops-sre-support-guide/

6. Germany Knowledge Guides

Pages:
- /germany-it-job-support-guide/
- /germany-interview-support-guide/
- /germany-devops-cloud-job-support-guide/
- /germany-java-dotnet-fullstack-support-guide/
- /germany-ai-ml-data-support-guide/

7. Australia Knowledge Guides

Pages:
- /australia-it-job-support-guide/
- /australia-interview-proxy-support-guide/
- /australia-production-support-help-guide/
- /australia-devops-cloud-sre-support-guide/
- /australia-fullstack-java-dotnet-react-support-guide/

8. Europe Knowledge Guides

Pages:
- /europe-it-job-support-guide/
- /europe-interview-support-guide/
- /europe-devops-cloud-sre-support-guide/
- /europe-ai-ml-rag-mlops-support-guide/
- /europe-fullstack-backend-frontend-support-guide/

CARD COPY REQUIREMENTS:
Every card should have unique short description.
Do not use same description everywhere.

Example card style:

Title:
What Is Proxy Job Support?

Description:
Understand how real-time IT job support helps professionals handle project blockers, debugging, production issues, client calls, and daily delivery pressure.

Category:
Proxy Job Support

CTA:
Read guide

SEARCH / FILTER UX:
Implement simple search/filter if safe.

Search should match:
- title
- description
- category
- country
- technology keywords

Category chips should filter guides.

If implementing client-side filtering, ensure:
- all links still exist in static rendered HTML or noindex issue is avoided
- page remains useful without JavaScript
- no hydration errors

If simple static sections are safer than complex filtering, use static sections plus anchor navigation.

BEST MOBILE APPROACH:
Use:
- horizontal scroll category chips
- search input
- featured cards
- collapsible/accordion category sections OR stacked sections
- card list with clear tap targets

BEST DESKTOP APPROACH:
Use:
- sticky left category navigation if easy
- grid cards
- search at top
- category sections

INTERNAL FUNNEL:
At the bottom of /knowledge-base/, add a funnel CTA section:

Heading:
Need Help Beyond Reading Guides?

Copy:
If you are stuck in an interview, production issue, client call, project onboarding, or job delivery pressure, use the relevant support page to contact Proxy Tech Support.

CTA links:
- USA IT Job Support → /job-support-usa/
- Proxy Job Support → /proxy-job-support/
- USA Interview Support → /proxy-interview-usa/
- Canada Interview Scheduling → /get-interview-scheduled-canada/
- Canada Job Support → /job-support-canada/
- Ireland Job Support → /job-support-ireland/
- Germany Job Support → /job-support-germany/
- Australia Job Support → /job-support-australia/
- Europe Job Support → /job-support-europe/

INTERNAL LINKING:
Add link to /knowledge-base/ from footer if safe:
Label:
Knowledge Base

If footer has sections, place under:
Resources / Company / Support / Guides

Do not crowd header.
Only add header navigation if it fits naturally.

SITEMAP:
Ensure /knowledge-base/ is included in sitemap.
Do not remove any flat guide URLs.
Do not remove existing sitemap URLs.

LLMS.TXT:
Update llms.txt to mention:
- /knowledge-base/ is the main guide explorer
- It organizes guides by interview support, proxy job support, technology support, Canada, Ireland, Germany, Australia, and Europe.

ROBOTS:
Do not add disallow rules.
Ensure /knowledge-base/ is crawlable.

SCHEMA:
If project has schema pattern, add WebPage schema or CollectionPage schema for /knowledge-base/.
Optional ItemList schema listing guide URLs is good if implemented correctly.
Do not add invalid schema.

PERFORMANCE:
Keep page lightweight.
Avoid loading unnecessary heavy libraries.
No external search library.
Use simple local data array if needed.

IMPLEMENTATION SUGGESTION:
Create a structured guide data file if helpful, for example:
data/knowledgeBaseGuides.ts

Fields:
- title
- slug
- category
- region
- technology
- description
- featured
- keywords

Then use it for:
- /knowledge-base/ explorer
- possible future sitemap updates if architecture supports it

But only do this if it fits existing project pattern.

VALIDATION:
After implementation:
- run lint if available
- run typecheck if available
- run build if available
- confirm /knowledge-base/ renders on mobile and desktop
- confirm all guide links work
- confirm flat guide URLs are not changed
- confirm sitemap includes /knowledge-base/
- confirm footer link works
- confirm no existing page broke

REPORT BACK:
1. Files created
2. Files modified
3. Whether guide data file was created
4. Whether footer link was added
5. Whether /knowledge-base/ has search/filter
6. Sitemap update result
7. llms.txt update result
8. Build/lint/typecheck result
9. Confirmation that existing pages were not removed or renamed
"