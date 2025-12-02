import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export type ContentType = 'root' | 'logs' | 'deployments' | 'cronjobs';

export interface PostData {
  slug: string;
  contentHtml?: string;
  [key: string]: any;
}

export async function getPostBySlug(slug: string, type: ContentType): Promise<PostData> {
  const fullPath = path.join(contentDirectory, type, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Content not found: ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
}

export function getAllPosts(type: ContentType) {
  const typeDirectory = path.join(contentDirectory, type);

  if (!fs.existsSync(typeDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(typeDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(typeDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        ...matterResult.data,
      };
    });

  // Sort posts by date if available
  return allPostsData.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getConfig() {
  const fullPath = path.join(contentDirectory, 'etc', 'config.yaml');

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const config = matter(fileContents);

  return config.data;
}
