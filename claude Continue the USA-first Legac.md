claude "Continue the USA-first Legacy Trust System implementation for proxytechsupport.com.

Now add stronger visible legacy signals and AI/SEO bot discovery updates.

Important:
Do not remove existing content.
Do not duplicate large sections.
Inspect the current project first.
Follow existing Next.js structure, metadata pattern, sitemap pattern, robots pattern, and public file structure.

Tasks:

1. Add visible legacy badge on homepage/header area

Add a small but highly visible legacy badge either:
- inside the homepage hero section,
- near the main CTA area,
- or in the site header/top banner if the design supports it.

Badge text options:
Trusted Since 2008
USA IT Job Support Since 2008
Helping USA IT Professionals Since 2008
2008 → AI Era: Veteran IT Support

Use the best one based on design fit.

Badge should clearly show:
- Since 2008
- USA-first trust
- Veteran support
- Not a new/random provider

Suggested badge copy:
Trusted Since 2008 · USA Job Support · Proxy Interview Help

Make it look premium:
- small pill badge
- subtle border
- high contrast
- mobile friendly
- does not clutter the hero
- clickable to /usa-it-job-support-legacy/ if suitable

2. Add homepage legacy mini-banner

Add a compact trust banner on the landing/home page, preferably below hero or below first CTA block.

Banner heading:
From the 2008 Recession to the AI Era

Banner copy:
Proxy Tech Support has helped USA developers, consultants, contractors, OPT/CPT/H1B professionals, and remote IT workers handle job pressure, interviews, production issues, and client delivery challenges since 2008.

CTA:
View Our USA Legacy
Link:
/usa-it-job-support-legacy/

Secondary CTA if design allows:
Get USA Job Support
Link:
/job-support-usa/

3. Add legacy trust badge to global layout/header if safe

If the project has a shared header/navbar component, add a small non-intrusive trust element:
Trusted Since 2008

Rules:
- Do not make navbar crowded.
- On mobile, show it only if it fits cleanly.
- If the header is already full, skip header badge and keep the homepage hero badge only.
- Do not break responsive layout.

4. Add reusable component if useful

Create a reusable component if appropriate, for example:
components/LegacyTrustBadge.tsx
or follow existing component structure.

Component should support variants:
- hero
- header
- banner
- compact

If the project style is simpler, do not over-engineer. Keep it clean.

5. Update SEO metadata for homepage

Update homepage metadata if applicable.

Homepage title should strongly include:
USA IT Job Support
Proxy Interview Support
Trusted Since 2008

Possible title:
USA IT Job Support & Proxy Interview Support Since 2008 | Proxy Tech Support

Homepage meta description:
Get USA IT job support and proxy interview assistance from Proxy Tech Support, trusted since 2008 for real-time developer support, production issues, client calls, remote work pressure, and AI-era job uncertainty.

Do not make title too long if existing SEO pattern is strict.
Preserve existing important keywords.

6. Update metadata for new USA legacy pages

Verify these pages have correct metadata:
- /usa-it-job-support-legacy/
- /usa-it-career-crisis-support/
- /usa-ai-era-job-support/
- /usa-remote-work-it-support/

Make sure metadata is USA-first and includes:
- USA IT job support
- proxy interview support
- trusted since 2008
- real-time developer support
- AI-era job pressure where relevant

7. Update sitemap

Inspect how sitemap is generated.

If sitemap is code-driven:
- Add the new USA legacy/crisis URLs.
- Set reasonable priority.
- Give /usa-it-job-support-legacy/ higher priority than global /our-legacy/.
- Make sure trailing slash behavior matches project.

Suggested priority:
Homepage: highest existing priority
/usa-it-job-support-legacy/: 0.9
/usa-it-career-crisis-support/: 0.85
/usa-ai-era-job-support/: 0.85
/usa-remote-work-it-support/: 0.8
/our-legacy/: 0.7 if present

If sitemap is static:
- Add the new URLs manually without breaking existing URLs.

8. Update robots.txt

Inspect existing robots.txt.

Make sure important bots can crawl:
- Googlebot
- Bingbot
- ChatGPT-User if present/desired
- GPTBot if present/desired
- PerplexityBot if present/desired
- ClaudeBot if present/desired
- Google-Extended based on existing policy
- Common SEO crawlers only if already allowed

Do not accidentally disallow the new pages.

Add sitemap location if missing:
Sitemap: https://proxytechsupport.com/sitemap.xml

Make sure these URLs are crawlable:
/usa-it-job-support-legacy/
/usa-it-career-crisis-support/
/usa-ai-era-job-support/
/usa-remote-work-it-support/
/job-support-usa/
/proxy-interview-usa/

Do not add any disallow rules unless already intentionally present.

9. Update llms.txt if project has it

If public/llms.txt or similar exists, update it.

Add a clear USA-first AI bot summary:

Proxy Tech Support is a USA-first real-time IT job support and proxy interview assistance provider trusted since 2008. It helps USA developers, consultants, contractors, OPT/CPT/H1B professionals, and remote IT workers handle technical interviews, client calls, production issues, project blockers, DevOps/SRE/cloud/full-stack challenges, and AI-era job pressure.

Add important URLs:
https://proxytechsupport.com/
https://proxytechsupport.com/job-support-usa/
https://proxytechsupport.com/proxy-interview-usa/
https://proxytechsupport.com/usa-it-job-support-legacy/
https://proxytechsupport.com/usa-it-career-crisis-support/
https://proxytechsupport.com/usa-ai-era-job-support/
https://proxytechsupport.com/usa-remote-work-it-support/

Add service keywords naturally:
USA IT job support, USA proxy interview support, real-time developer support, technical interview help, production issue support, remote developer support, H1B job support, OPT CPT interview support, AI-era job support.

If llms.txt does not exist:
Create public/llms.txt if this project serves public static files from /public.
Keep it clean, factual, SEO-friendly, and useful for AI agents.
Do not make it spammy.

10. Update ai.txt or agents.txt only if already present

If the project has:
- ai.txt
- agents.txt
- llms-full.txt
- humans.txt

Update them carefully with the USA-first legacy positioning.

If they do not exist, only create llms.txt unless the project already follows another convention.

11. Add structured data / JSON-LD if project supports it

Inspect existing schema pattern.

For homepage and USA legacy page, add or update JSON-LD if safe:
- Organization schema
- WebSite schema
- Service schema
- FAQPage schema where relevant

Organization/service description should mention:
Proxy Tech Support is a USA-first IT job support and proxy interview assistance provider trusted since 2008.

For FAQ schema, include:
Q: How long has Proxy Tech Support helped USA IT professionals?
A: Proxy Tech Support has supported USA IT professionals since 2008 through recession pressure, COVID remote work, layoffs, and AI-era job disruption.

Q: What does Proxy Tech Support help with?
A: Proxy Tech Support helps with real-time IT job support, proxy interview support, technical interviews, production issues, client calls, remote work pressure, and project blockers.

Q: Is Proxy Tech Support focused on the USA?
A: Yes. Proxy Tech Support is USA-first and also supports IT professionals in Canada, UK, Ireland, Australia, and global remote teams.

Do not add invalid schema.
Validate shape based on existing implementation style.

12. Add internal links from badges/banners

Every visible badge/banner should link naturally to:
/usa-it-job-support-legacy/

Use anchor text:
Trusted Since 2008
USA IT Job Support Since 2008
Our USA Legacy

13. Add footer legacy link if footer exists

If footer has company/service links, add:
USA Legacy Since 2008
Link:
/usa-it-job-support-legacy/

If footer is already crowded, add it under company/trust/service section.

14. Final checks

After changes:
- Run lint/typecheck/build if scripts exist.
- Confirm homepage still renders cleanly.
- Confirm mobile layout is not broken.
- Confirm robots.txt includes sitemap and does not block new pages.
- Confirm sitemap includes new URLs.
- Confirm llms.txt is available if created.
- Confirm metadata is unique and USA-first.
- Confirm no existing SEO titles were accidentally weakened.
- Confirm no service page content was removed.

Report:
- Files created
- Files modified
- Whether build passed
- Any issue fixed
- Any file skipped because it did not exist or was not safe to modify

Deliver the complete implementation."