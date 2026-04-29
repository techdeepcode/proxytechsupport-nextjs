import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';
import PostLayout from '@/components/PostLayout';
import ArticleStructuredData from '@/components/ArticleStructuredData';
import { defaultOgImage } from '@/lib/site-seo';

/**
 * Job-support service pages are canonical at /:slug/ (root level).
 * If a legacy /blog/:slug/ URL arrives for one of these, we 308-redirect
 * it back to the root so rankings stay at the correct canonical URL.
 *
 * Pure blog articles (no "job-support" in slug) ARE canonical here at
 * /blog/:slug/ and are rendered normally.
 */
const isJobSupportSlug = (slug: string) =>
  slug.includes('job-support') || slug.includes('job-help');

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  // Static export (`output: 'export'`): emit every slug so legacy /blog/:slug/ URLs
  // that point at job-support posts still get HTML redirect pages to /:slug/.
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // Metadata is irrelevant for slugs that will redirect
  if (isJobSupportSlug(slug)) return {};

  const post = await getPostBySlug(slug);
  if (!post) return {};

  const canonical = `https://proxytechsupport.com/blog/${slug}/`;
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

  // Job-support pages belong at root level — redirect legacy /blog/:slug/ hits
  if (isJobSupportSlug(slug)) {
    permanentRedirect(`/${slug}/`);
  }

  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const url = `https://proxytechsupport.com/blog/${slug}/`;

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
        content={post.content}
        date={post.date}
        breadcrumbs={breadcrumbs}
        showInterviewBanner
      />
    </>
  );
}
