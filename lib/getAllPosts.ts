import fs from 'fs';
import matter from 'gray-matter';
import { MarkdownMetadata } from './types/posts';

export function getAllPosts(): MarkdownMetadata[] {
  // Get all our posts
  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data } = matter(readFile);

    return {
      slug,
      data,
    } as MarkdownMetadata;
  });

  posts.sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });

  return posts;
}
