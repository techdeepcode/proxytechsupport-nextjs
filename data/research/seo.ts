import type { Metadata } from 'next';
import { landingPageMetadata } from '@/lib/site-seo';
import {
  getPublication,
  publicationUrl,
  RESEARCH_AUTHOR,
  RESEARCH_BASE,
  SERIES_NAME,
} from '@/data/research/cluster';

/** Metadata for a research publication page. */
export function researchMetadata(slug: string): Metadata {
  const p = getPublication(slug);
  if (!p) return {};
  const canonical = publicationUrl(slug);
  return {
    ...landingPageMetadata({
      title: p.seoTitle,
      description: p.metaDescription,
      canonical,
      ogTitle: p.title,
      ogDescription: p.summary,
      lastmod: `${p.updated}T12:00:00.000Z`,
    }),
    openGraph: {
      type: 'article',
      title: p.title,
      description: p.summary,
      url: canonical,
      siteName: 'Proxy Tech Support',
      locale: 'en_US',
      publishedTime: `${p.published}T12:00:00.000Z`,
      modifiedTime: `${p.updated}T12:00:00.000Z`,
      authors: [RESEARCH_AUTHOR.url],
      section: p.area,
    },
  };
}

/** TechArticle + BreadcrumbList JSON-LD for a research publication. */
export function researchSchemas(slug: string): object[] {
  const p = getPublication(slug);
  if (!p) return [];
  const canonical = publicationUrl(slug);

  const article = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: p.title,
    description: p.metaDescription,
    inLanguage: 'en',
    url: canonical,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    datePublished: `${p.published}T12:00:00.000Z`,
    dateModified: `${p.updated}T12:00:00.000Z`,
    articleSection: p.area,
    keywords: [p.area, SERIES_NAME, ...p.primaryEvidence].join(', '),
    author: {
      '@type': 'Organization',
      name: RESEARCH_AUTHOR.name,
      url: RESEARCH_AUTHOR.url,
    },
    publisher: { '@id': 'https://proxytechsupport.com/#organization' },
    isPartOf: {
      '@type': 'CreativeWorkSeries',
      name: SERIES_NAME,
      url: `${RESEARCH_BASE}/research/`,
    },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: RESEARCH_BASE },
      { '@type': 'ListItem', position: 2, name: 'Research', item: `${RESEARCH_BASE}/research/` },
      { '@type': 'ListItem', position: 3, name: p.navTitle, item: canonical },
    ],
  };

  return [article, breadcrumb];
}
