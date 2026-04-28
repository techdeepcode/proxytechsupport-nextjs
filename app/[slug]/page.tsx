import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';
import PostLayout from '@/components/PostLayout';
import ArticleStructuredData from '@/components/ArticleStructuredData';
import { defaultOgImage } from '@/lib/site-seo';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const canonical = `https://proxytechsupport.com/${slug}/`;
  const title = `${post.title} | Proxy Tech Support`;
  const published = post.date ? `${post.date}T12:00:00.000Z` : undefined;

  return {
    title,
    description: post.description,
    ...(post.keywords ? { keywords: post.keywords.split(',').map((k) => k.trim()) } : {}),
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'article',
      title,
      description: post.description,
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
      description: post.description,
      images: [defaultOgImage.url],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const url = `https://proxytechsupport.com/${slug}/`;

  return (
    <>
      <ArticleStructuredData
        headline={post.title}
        description={post.description}
        datePublished={post.date}
        url={url}
        type="BlogPosting"
      />
      <PostLayout title={post.title} content={post.content} date={post.date} />
    </>
  );
}
