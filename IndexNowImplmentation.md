You are working on my existing Next.js website for proxytechsupport.com.

Task:
Implement IndexNow support as a pure addition only.

Very important rules:
- Do NOT refactor existing SEO code.
- Do NOT change existing sitemap logic unless absolutely required.
- Do NOT change robots.txt unless only adding a missing sitemap line.
- Do NOT change existing metadata, canonical URLs, redirects, schema, blog routes, service pages, or static export behavior.
- Do NOT break GitHub Pages / Cloudflare deployment.
- This must be additive and safe.

My IndexNow key is:
49dca91567b14de2bde9ba54739351bd

Required implementation:

1. Add the IndexNow key file in the public root:
public/49dca91567b14de2bde9ba54739351bd.txt

The file content must be exactly:
49dca91567b14de2bde9ba54739351bd

After deployment, this URL must work:
https://proxytechsupport.com/49dca91567b14de2bde9ba54739351bd.txt

2. Create a safe IndexNow helper file, for example:
scripts/submit-indexnow.mjs

It should:
- Use Node.js only.
- Not require new packages unless already available.
- Read URLs from the existing sitemap if possible.
- Submit URLs to:
https://api.indexnow.org/indexnow
- Use POST JSON body:
{
  "host": "proxytechsupport.com",
  "key": "49dca91567b14de2bde9ba54739351bd",
  "keyLocation": "https://proxytechsupport.com/49dca91567b14de2bde9ba54739351bd.txt",
  "urlList": [...]
}

3. The script must be defensive:
- If sitemap is missing, do not fail the build.
- If IndexNow API fails, log warning only.
- Never block production deployment.
- Limit URL submissions if needed to avoid huge payload.
- Only submit canonical https://proxytechsupport.com URLs.
- Do not submit localhost, staging, duplicate URLs, or invalid URLs.

4. Add package.json script only if safe:
"indexnow": "node scripts/submit-indexnow.mjs"

Do not modify existing build/start/export scripts unless needed.
Do not run IndexNow automatically inside build unless I explicitly ask later.

5. Add a short comment in the script explaining:
IndexNow helps faster discovery of new/updated URLs but does not guarantee ranking.

6. After implementation, show me:
- Files created
- Exact code added
- How to run manually
- How to verify key file URL
- Confirmation that no existing SEO behavior was changed

Before editing, inspect the project structure first.
Then implement only the minimum safe addition.