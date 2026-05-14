const SITE = 'https://proxytechsupport.com';

/** Path for interview posts — must stay stable for indexed URLs. */
export function getCanonicalInterviewPath(slug: string): string {
  return `/interviews/${slug}/`;
}

export function getCanonicalInterviewUrl(slug: string): string {
  return `${SITE}${getCanonicalInterviewPath(slug)}`;
}

/** Public canonical URL for an interview (alias pages point at the primary slug). */
export function getInterviewCanonicalUrl(interview: {
  slug: string;
  canonicalSlug?: string;
}): string {
  return getCanonicalInterviewUrl(interview.canonicalSlug ?? interview.slug);
}
