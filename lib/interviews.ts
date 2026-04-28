import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

export type InterviewData = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
  layout?: string;
};

const interviewsDirectory = path.join(process.cwd(), '../proxytechsupport-legacy/_interviews');

async function parseInterview(filename: string): Promise<InterviewData> {
  const filePath = path.join(interviewsDirectory, filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // slug = full filename without .md extension (preserves date in URL)
  const slug = filename.replace(/\.md$/, '');

  const date = data.date
    ? String(data.date).substring(0, 10)
    : (filename.match(/^(\d{4}-\d{2}-\d{2})/)?.[1] || '');

  const processed = await remark().use(remarkHtml).process(content);
  const htmlContent = processed.toString();

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date,
    content: htmlContent,
    layout: data.layout,
  };
}

export async function getAllInterviews(): Promise<InterviewData[]> {
  let filenames: string[] = [];
  try {
    filenames = fs.readdirSync(interviewsDirectory).filter((f) => f.endsWith('.md'));
  } catch {
    return [];
  }

  const interviews = await Promise.all(filenames.map(parseInterview));
  return interviews.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getInterviewBySlug(slug: string): Promise<InterviewData | null> {
  let filenames: string[] = [];
  try {
    filenames = fs.readdirSync(interviewsDirectory).filter((f) => f.endsWith('.md'));
  } catch {
    return null;
  }

  const filename = filenames.find((f) => f.replace(/\.md$/, '') === slug);
  if (!filename) return null;
  return parseInterview(filename);
}

export async function getAllInterviewSlugs(): Promise<string[]> {
  let filenames: string[] = [];
  try {
    filenames = fs.readdirSync(interviewsDirectory).filter((f) => f.endsWith('.md'));
  } catch {
    return [];
  }
  return filenames.map((f) => f.replace(/\.md$/, ''));
}
