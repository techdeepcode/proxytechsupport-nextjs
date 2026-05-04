import type { ComponentType } from 'react';
import { blogArticleEntries } from '@/content/blog-articles';
import type { ArticleFaq } from '@/components/ArticleStructuredData';

export type PostData = {
  slug: string;
  title: string;
  description: string;
  date: string;
  layout?: string;
  permalink?: string;
  keywords?: string;
  /** Optional topic label for TechArticle `about` / `teaches` schema fields. */
  about?: string;
  /** Optional FAQs to emit as FAQPage JSON-LD alongside the article schema. */
  faqs?: ArticleFaq[];
  /** Server Component that renders the article body (HTML/TSX). */
  Article: ComponentType;
};

let cached: PostData[] | null = null;

function toPostData(): PostData[] {
  return blogArticleEntries.map(({ meta, Article }) => ({
    slug: meta.slug,
    title: meta.title,
    description: meta.description,
    date: meta.date,
    keywords: meta.keywords?.trim() ? meta.keywords : undefined,
    layout: 'blog',
    permalink: meta.permalink?.trim() ? meta.permalink.trim() : undefined,
    about: (meta as Record<string, unknown>).about as string | undefined,
    faqs: (meta as Record<string, unknown>).faqs as ArticleFaq[] | undefined,
    Article,
  }));
}

export async function getAllPosts(): Promise<PostData[]> {
  if (!cached) {
    cached = toPostData().sort((a, b) => (a.date < b.date ? 1 : -1));
  }
  return cached;
}

export async function getPostBySlug(slug: string): Promise<PostData | null> {
  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((p) => p.slug);
}
