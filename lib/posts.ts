import type { ComponentType } from 'react';
import { blogArticleEntries } from '@/content/blog-articles';

export type PostData = {
  slug: string;
  title: string;
  description: string;
  date: string;
  layout?: string;
  permalink?: string;
  keywords?: string;
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
