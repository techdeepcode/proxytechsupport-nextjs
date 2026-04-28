import { SITE_NAME, SITE_URL } from '@/lib/site-seo';

type Props = {
  headline: string;
  description: string;
  datePublished?: string;
  url: string;
  type?: 'BlogPosting' | 'Article';
};

export default function ArticleStructuredData({
  headline,
  description,
  datePublished,
  url,
  type = 'BlogPosting',
}: Props) {
  const data = {
    '@context': 'https://schema.org',
    '@type': type,
    headline,
    description,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` },
    },
    ...(datePublished
      ? { datePublished: `${datePublished}T12:00:00+05:30`, dateModified: `${datePublished}T12:00:00+05:30` }
      : {}),
    image: `${SITE_URL}/images/previewimg.png`,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
