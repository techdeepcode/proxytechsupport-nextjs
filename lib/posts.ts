import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

export type PostData = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
  layout?: string;
  permalink?: string;
  keywords?: string;
};

const postsDirectory = path.join(process.cwd(), 'content/posts');

function getSlugFromFilename(filename: string): string {
  const withoutExt = filename.replace(/\.md$/, '');
  // Strip date prefix YYYY-MM-DD- if present
  const dateMatch = withoutExt.match(/^\d{4}-\d{2}-\d{2}-(.+)$/);
  return dateMatch ? dateMatch[1] : withoutExt;
}

function getDateFromFilename(filename: string): string {
  const match = filename.match(/^(\d{4}-\d{2}-\d{2})/);
  return match ? match[1] : '';
}

async function parsePost(filename: string): Promise<PostData> {
  const filePath = path.join(postsDirectory, filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const slug = getSlugFromFilename(filename);
  const date = data.date
    ? (data.date instanceof Date
        ? data.date.toISOString().substring(0, 10)
        : String(data.date).substring(0, 10))
    : getDateFromFilename(filename);

  const processed = await remark().use(remarkHtml).process(content);
  const htmlContent = processed.toString();

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date,
    content: htmlContent,
    layout: data.layout,
    permalink: data.permalink,
    keywords: data.keywords ? String(data.keywords) : undefined,
  };
}

export async function getAllPosts(): Promise<PostData[]> {
  let filenames: string[] = [];
  try {
    filenames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'));
  } catch {
    return [];
  }

  const posts = await Promise.all(filenames.map(parsePost));
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<PostData | null> {
  let filenames: string[] = [];
  try {
    filenames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'));
  } catch {
    return null;
  }

  const filename = filenames.find((f) => getSlugFromFilename(f) === slug);
  if (!filename) return null;
  return parsePost(filename);
}

export async function getAllPostSlugs(): Promise<string[]> {
  let filenames: string[] = [];
  try {
    filenames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'));
  } catch {
    return [];
  }
  return filenames.map(getSlugFromFilename);
}
