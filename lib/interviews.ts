import type { ComponentType } from 'react';
import { interviewArticleEntries } from '@/content/interview-articles';

export type InterviewData = {
  slug: string;
  title: string;
  description: string;
  date: string;
  layout?: string;
  keywords?: string;
  /** Server Component that renders the interview body (HTML from body.html). */
  Article: ComponentType;
};

let cached: InterviewData[] | null = null;

function toInterviewData(): InterviewData[] {
  return interviewArticleEntries.map(({ meta, Article }) => ({
    slug: meta.slug,
    title: meta.title,
    description: meta.description,
    date: meta.date,
    layout: meta.layout,
    keywords: meta.keywords?.trim() ? meta.keywords : undefined,
    Article,
  }));
}

export async function getAllInterviews(): Promise<InterviewData[]> {
  if (!cached) {
    cached = toInterviewData().sort((a, b) => (a.date < b.date ? 1 : -1));
  }
  return cached;
}

export async function getInterviewBySlug(slug: string): Promise<InterviewData | null> {
  const interviews = await getAllInterviews();
  return interviews.find((i) => i.slug === slug) ?? null;
}

export async function getAllInterviewSlugs(): Promise<string[]> {
  const interviews = await getAllInterviews();
  return interviews.map((i) => i.slug);
}
