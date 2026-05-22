// IndexNow helps faster discovery of new/updated URLs but does not guarantee ranking.
// Run manually after deployment: npm run indexnow
// Docs: https://www.indexnow.org/documentation

import { readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';

const HOST = 'proxytechsupport.com';
const KEY = '49dca91567b14de2bde9ba54739351bd';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const API_URL = 'https://api.indexnow.org/indexnow';
const MAX_URLS = 10_000;

function extractUrlsFromSitemap(xml) {
  const urls = [];
  const locRegex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(xml)) !== null) {
    urls.push(match[1].trim());
  }
  return urls;
}

function isCanonical(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' && parsed.hostname === HOST;
  } catch {
    return false;
  }
}

async function main() {
  const root = resolve(import.meta.dirname, '..');
  const sitemapPath = join(root, 'out', 'sitemap.xml');

  if (!existsSync(sitemapPath)) {
    console.warn('[IndexNow] sitemap.xml not found at', sitemapPath, '— skipping submission.');
    return;
  }

  let xml;
  try {
    xml = readFileSync(sitemapPath, 'utf8');
  } catch (err) {
    console.warn('[IndexNow] Failed to read sitemap.xml:', err.message);
    return;
  }

  const allUrls = extractUrlsFromSitemap(xml);
  const urlList = [...new Set(allUrls.filter(isCanonical))].slice(0, MAX_URLS);

  if (urlList.length === 0) {
    console.warn('[IndexNow] No valid canonical URLs found in sitemap — skipping submission.');
    return;
  }

  console.log(`[IndexNow] Submitting ${urlList.length} URLs to IndexNow...`);

  const body = JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList });

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body,
    });
    if (res.ok) {
      console.log(`[IndexNow] Success — HTTP ${res.status}`);
    } else {
      console.warn(`[IndexNow] API returned HTTP ${res.status}: ${await res.text()}`);
    }
  } catch (err) {
    console.warn('[IndexNow] API request failed (network issue?):', err.message);
  }
}

main();
