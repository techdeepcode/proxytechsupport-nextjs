# Jekyll → Next.js Migration Notes

## 0. CONTENT SOURCE PATH

Markdown content is read from **`../proxytechsupport-legacy/_posts`** and **`../proxytechsupport-legacy/_interviews`** (relative to the Next.js app directory). Deploy or CI must include that folder next to `proxytechsupport-nextjs`, or adjust `lib/posts.ts` / `lib/interviews.ts` paths.

SEO parity with legacy (meta, Open Graph, Twitter, JSON-LD, GTM/GA, `robots`, sitemap) lives in `lib/site-seo.ts`, `app/layout.tsx`, `app/page.tsx`, and `components/HomeStructuredData.tsx`. The homepage uses the same primary title, OG title, Twitter title, long descriptions, and keyword list as legacy `index.html`.

## 1. COMPLETE URL CHANGE TABLE

All `/blog/[slug]/` URLs now redirect (301) to `/[slug]/`:

| Old URL | New URL |
|---------|---------|
| /blog/react-interview-proxy-guide/ | /react-interview-proxy-guide/ |
| /blog/real-time-it-job-support-benefits/ | /real-time-it-job-support-benefits/ |
| /blog/angular-job-support/ | /angular-job-support/ |
| /blog/aws-job-support/ | /aws-job-support/ |
| /blog/devops-job-support/ | /devops-job-support/ |
| /blog/dotnet-job-support/ | /dotnet-job-support/ |
| /blog/java-job-support/ | /java-job-support/ |
| /blog/node-job-support/ | /node-job-support/ |
| /blog/python-job-support/ | /python-job-support/ |
| /blog/react-job-support/ | /react-job-support/ |
| /blog/react-native-job-support/ | /react-native-job-support/ |
| /blog/job-support-interview-proxy-from-india/ | /job-support-interview-proxy-from-india/ |
| /blog/proxy-interview-support-job-support-global/ | /proxy-interview-support-job-support-global/ |
| /blog/ai-ml-job-support/ | /ai-ml-job-support/ |
| /blog/backend-enterprise-job-support/ | /backend-enterprise-job-support/ |
| /blog/cloud-technologies-job-support/ | /cloud-technologies-job-support/ |
| /blog/cybersecurity-job-support/ | /cybersecurity-job-support/ |
| /blog/databases-data-platforms-job-support/ | /databases-data-platforms-job-support/ |
| /blog/digital-analytics-job-support/ | /digital-analytics-job-support/ |
| /blog/frontend-fullstack-job-support/ | /frontend-fullstack-job-support/ |
| /blog/java-technologies-job-support/ | /java-technologies-job-support/ |
| /blog/testing-quality-engineering-job-support/ | /testing-quality-engineering-job-support/ |
| /blog/complete-guide-proxy-job-support-interview-assistance-all-technologies/ | /complete-guide-proxy-job-support-interview-assistance-all-technologies/ |
| /blog/angular-job-support-guide/ | /angular-job-support-guide/ |
| /blog/real-time-job-support-guide/ | /real-time-job-support-guide/ |
| /blog/dotnet-job-support/ (Feb) | /dotnet-job-support/ |
| /blog/data-engineer-python-job-support/ | /data-engineer-python-job-support/ |
| /blog/dotnet-job-support-canada/ | /dotnet-job-support-canada/ |
| /blog/it-job-support-proxy-australia-austria/ | /it-job-support-proxy-australia-austria/ |
| /blog/qa-automation-job-support-proxy-usa-uk-canada-australia/ | /qa-automation-job-support-proxy-usa-uk-canada-australia/ |
| /blog/proxy-job-support-interview-support-usa-uk-canada-australia/ | /proxy-job-support-interview-support-usa-uk-canada-australia/ |
| /blog/ai-ml-data-science-proxy-job-support/ | /ai-ml-data-science-proxy-job-support/ |
| /blog/interview-mentoring-for-it-professionals/ | /interview-mentoring-for-it-professionals/ |
| /blog/resume-linkedin-optimization-for-developers/ | /resume-linkedin-optimization-for-developers/ |

Interview posts remain unchanged at `/interviews/[slug]/`.

---

## 2. GOOGLE SEARCH CONSOLE STEPS

After deploying to Vercel (`npx vercel --prod`):

a. Go to **Search Console → Sitemaps**
b. Remove old sitemap if previously submitted
c. Submit: `https://proxytechsupport.com/sitemap.xml`
d. Go to **URL Inspection** → test top 10 pages
e. Request re-indexing for each
f. Monitor Coverage report for 2 weeks

---

## 3. CRITICAL PAGES TO RE-INDEX FIRST (highest traffic)

These old blog URLs will 301 redirect — confirm each is properly indexed at the new URL:

1. `/angular-job-support/`
2. `/react-job-support/`
3. `/aws-job-support/`
4. `/devops-job-support/`
5. `/java-job-support/`
6. `/dotnet-job-support/`
7. `/python-job-support/`
8. `/node-job-support/`
9. `/frontend-fullstack-job-support/`
10. `/backend-enterprise-job-support/`

---

## 4. WHAT TO WATCH IN SEARCH CONSOLE

- **No 404 errors** on old `/blog/` URLs — confirm 301s are working
- **New `/[slug]/` URLs** getting indexed within 2–4 weeks
- **Impressions recovering** within 4–6 weeks post-launch
- **Core Web Vitals** — Next.js static generation should improve LCP significantly
- Check the **Coverage** tab weekly for crawl errors
