import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Article } from '@/components/ArticleCard';

const contentDirectory = path.join(process.cwd(), 'src/content');

export function getAllPosts(): Article[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title || 'Untitled',
        excerpt: matterResult.data.excerpt || '',
        category: matterResult.data.category || 'Uncategorized',
        date: matterResult.data.date || '',
        readTime: matterResult.data.readTime || '5 min read',
        image: matterResult.data.image,
      } as Article;
    });

  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title || 'Untitled',
    excerpt: data.excerpt || '',
    category: data.category || 'Uncategorized',
    date: data.date || '',
    readTime: data.readTime || '5 min read',
    image: data.image,
  };
}
