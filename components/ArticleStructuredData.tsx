import { SITE_NAME, SITE_URL } from '@/lib/site-seo';

export type ArticleFaq = { q: string; a: string };

type Props = {
  headline: string;
  description: string;
  datePublished?: string;
  /** ISO 8601 (e.g. meta.lastmod). When set, JSON-LD `dateModified` uses it instead of mirroring `datePublished`. */
  dateModified?: string;
  url: string;
  /** TechArticle for job-support pages; BlogPosting for general blog content. */
  type?: 'BlogPosting' | 'Article' | 'TechArticle';
  /** Topic — TechArticle maps to `about` + `teaches`; BlogPosting sets schema.org `about` when present. */
  about?: string;
  /** Comma-separated keywords string from meta.ts — emitted as schema `keywords`. */
  keywords?: string;
  /** Article section label (e.g. "Interview Questions"). Defaults to "IT Job Support" for TechArticle. */
  articleSection?: string;
  /** FAQs to emit as an inline FAQPage schema alongside the article schema. */
  faqs?: ArticleFaq[];
};

export default function ArticleStructuredData({
  headline,
  description,
  datePublished,
  dateModified,
  url,
  type = 'BlogPosting',
  about,
  keywords,
  articleSection,
  faqs,
}: Props) {
  const published = datePublished ? `${datePublished}T12:00:00+05:30` : undefined;
  const modified =
    dateModified?.trim() ? dateModified.trim() : published;

  const articleSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': type,
    headline,
    description,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` },
    },
    image: `${SITE_URL}/images/previewimg.png`,
    ...(published ? { datePublished: published, dateModified: modified ?? published } : {}),
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    ...(keywords ? { keywords } : {}),
    ...(articleSection ? { articleSection } : {}),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', 'h3', '.post-content'],
    },
  };

  if (about) {
    articleSchema.about = { '@type': 'Thing', name: about };
  }

  // TechArticle-specific properties
  if (type === 'TechArticle') {
    articleSchema.proficiencyLevel = 'Expert';
    if (!articleSection) articleSchema.articleSection = 'IT Job Support';
    if (about) articleSchema.teaches = about;
  }

  const faqSchema = faqs && faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
