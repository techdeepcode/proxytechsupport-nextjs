import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllInterviewSlugs, getInterviewBySlug } from '@/lib/interviews';
import { getInterviewCanonicalUrl } from '@/lib/interview-canonical';
import PostLayout from '@/components/PostLayout';
import ArticleStructuredData from '@/components/ArticleStructuredData';
import { defaultOgImage } from '@/lib/site-seo';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllInterviewSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const interview = await getInterviewBySlug(slug);
  if (!interview) return {};

  const canonical = getInterviewCanonicalUrl(interview);
  const title = `${interview.title} | Proxy Tech Support`;
  const published = interview.date ? `${interview.date}T12:00:00.000Z` : undefined;
  const modifiedIso = interview.lastmod?.trim()
    ? `${interview.lastmod.trim()}T12:00:00.000Z`
    : published;

  return {
    title,
    description: interview.description,
    ...(interview.keywords
      ? { keywords: interview.keywords.split(',').map((k) => k.trim()) }
      : {}),
    alternates: {
      canonical,
      languages: {
        'en-US': canonical,
        'en-CA': canonical,
        'en-GB': canonical,
        'en-AU': canonical,
        'en-IE': canonical,
        'x-default': canonical,
      },
    },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'article',
      title,
      description: interview.description,
      url: canonical,
      siteName: 'Proxy Tech Support',
      locale: 'en_US',
      publishedTime: published,
      modifiedTime: modifiedIso ?? published,
      images: [defaultOgImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: interview.description,
      images: [defaultOgImage.url],
    },
    other: {
      'article:section': 'Interview Questions',
      ...(interview.keywords
        ? { 'article:tag': interview.keywords.split(',').map((k) => k.trim()).slice(0, 6).join(',') }
        : {}),
    },
  };
}

export default async function InterviewPostPage({ params }: Props) {
  const { slug } = await params;
  const interview = await getInterviewBySlug(slug);
  if (!interview) notFound();

  const Article = interview.Article;
  const url = getInterviewCanonicalUrl(interview);

  return (
    <>
      <ArticleStructuredData
        headline={interview.title}
        description={interview.description}
        datePublished={interview.date}
        dateModified={interview.lastmod?.trim()}
        url={url}
        type="Article"
        keywords={interview.keywords}
        articleSection="Interview Questions"
        faqs={interview.faqs}
      />
      <PostLayout
        title={interview.title}
        date={interview.date}
        showInterviewBanner
        wrapWithBlogShell
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Interview Questions', href: '/interview-questions/' },
          { label: interview.title },
        ]}
      >
        <Article />
      </PostLayout>
    </>
  );
}
