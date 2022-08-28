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

  return posts;
}
