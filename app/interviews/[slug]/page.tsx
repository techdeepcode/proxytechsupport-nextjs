import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllInterviewSlugs, getInterviewBySlug } from '@/lib/interviews';
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

  const canonical = `https://proxytechsupport.com/interviews/${slug}/`;
  const title = `${interview.title} | Proxy Tech Support`;
  const published = interview.date ? `${interview.date}T12:00:00.000Z` : undefined;

  return {
    title,
    description: interview.description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'article',
      title,
      description: interview.description,
      url: canonical,
      siteName: 'Proxy Tech Support',
      locale: 'en_US',
      publishedTime: published,
      modifiedTime: published,
      images: [defaultOgImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: interview.description,
      images: [defaultOgImage.url],
    },
  };
}

export default async function InterviewPostPage({ params }: Props) {
  const { slug } = await params;
  const interview = await getInterviewBySlug(slug);
  if (!interview) notFound();

  const url = `https://proxytechsupport.com/interviews/${slug}/`;

  return (
    <>
      <ArticleStructuredData
        headline={interview.title}
        description={interview.description}
        datePublished={interview.date}
        url={url}
        type="Article"
      />
      <PostLayout
        title={interview.title}
        content={interview.content}
        date={interview.date}
        showInterviewBanner
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Interview Questions', href: '/interviews/' },
          { label: interview.title },
        ]}
      />
    </>
  );
}
