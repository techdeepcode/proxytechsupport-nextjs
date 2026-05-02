import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';
import { getCanonicalUrlForPost } from '@/lib/post-canonical';
import PostLayout from '@/components/PostLayout';
import ArticleStructuredData from '@/components/ArticleStructuredData';
import { defaultOgImage } from '@/lib/site-seo';

/**
 * Duplicate URLs: many posts are reachable at both /blog/:slug/ and /:slug/
 * (static export cannot rely on HTTP redirects on GitHub Pages).
 * We render full content here and in app/[slug]/page.tsx and set the same
 * canonical URL (from meta.permalink when present) on both.
 */
const isJobSupportSlug = (slug: string) =>
  slug.includes('job-support') || slug.includes('job-help');

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

  const canonical = getCanonicalUrlForPost(post);
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

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const Article = post.Article;
  const url = getCanonicalUrlForPost(post);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog/' },
    { label: post.title },
  ];

  return (
    <>
      <ArticleStructuredData
        headline={post.title}
        description={post.description}
        datePublished={post.date}
        url={url}
        type="BlogPosting"
      />
      <PostLayout
        title={post.title}
        date={post.date}
        breadcrumbs={breadcrumbs}
        showTopActionBanner
        showInterviewBanner={isJobSupportSlug(slug)}
      >
        <Article />
      </PostLayout>
    </>
  );
}
