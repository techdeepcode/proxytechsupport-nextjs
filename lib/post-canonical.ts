import type { PostData } from '@/lib/posts';

const SITE = 'https://proxytechsupport.com';

/** Normalize stored permalink from front matter to a pathname with slashes. */
export function normalizePermalinkToPath(permalink: string | undefined): string | null {
  const raw = (permalink ?? '').trim();
  if (!raw) return null;
  let path: string;
  if (raw.startsWith('http')) {
    try {
      path = new URL(raw).pathname;
    } catch {
      return null;
    }
  } else {
    path = raw.startsWith('/') ? raw : `/${raw}`;
  }
  if (!path.endsWith('/')) path = `${path}/`;
  return path;
}

/**
 * Preferred public path for this post (matches historical permalinks and indexing).
 * When `permalink` is set in meta, it wins. Otherwise: slug contains job-support or job-help → root, else → /blog/{slug}/.
 * Legacy root URLs that omit job-support in the slug (e.g. interview guides) must set `permalink` in meta; see MIGRATION_NOTES.md.
 */
export function getCanonicalPathForPost(post: Pick<PostData, 'slug' | 'permalink'>): string {
  const fromPermalink = normalizePermalinkToPath(post.permalink);
  if (fromPermalink) return fromPermalink;

  if (post.slug.includes('job-support') || post.slug.includes('job-help')) {
    return `/${post.slug}/`;
  }
  return `/blog/${post.slug}/`;
}

export function getCanonicalUrlForPost(post: Pick<PostData, 'slug' | 'permalink'>): string {
  const path = getCanonicalPathForPost(post);
  return `${SITE}${path}`;
}

/** Blog index / sitemap: single href per article (always the canonical path). */
export function getPostPublicHref(post: Pick<PostData, 'slug' | 'permalink'>): string {
  return getCanonicalPathForPost(post);
}
