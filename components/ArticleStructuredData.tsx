import { SITE_NAME, SITE_URL } from '@/lib/site-seo';

export type ArticleFaq = { q: string; a: string };

type Props = {
  headline: string;
  description: string;
  datePublished?: string;
  url: string;
  /** TechArticle for job-support pages; BlogPosting for general blog content. */
  type?: 'BlogPosting' | 'Article' | 'TechArticle';
  /** Technology / topic this article teaches — used in TechArticle `about` and `teaches`. */
  about?: string;
  /** FAQs to emit as an inline FAQPage schema alongside the article schema. */
  faqs?: ArticleFaq[];
};

export default function ArticleStructuredData({
  headline,
  description,
  datePublished,
  url,
  type = 'BlogPosting',
  about,
  faqs,
}: Props) {
  const published = datePublished ? `${datePublished}T12:00:00+05:30` : undefined;

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
    ...(published ? { datePublished: published, dateModified: published } : {}),
    /**
     * Speakable specification — tells AI agents and voice assistants which
     * CSS selectors contain the most important extractable content.
     * h1 = canonical subject; h2 = section labels; .post-content = body text.
     */
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', 'h3', '.post-content'],
    },
  };

  // TechArticle-specific properties
  if (type === 'TechArticle') {
    articleSchema.proficiencyLevel = 'Expert';
    articleSchema.articleSection = 'IT Job Support';
    if (about) {
      articleSchema.about = {
        '@type': 'Thing',
        name: about,
      };
      articleSchema.teaches = about;
    }
    articleSchema.inLanguage = 'en-US';
    articleSchema.isAccessibleForFree = true;
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
