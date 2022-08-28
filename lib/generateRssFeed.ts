import fs from 'fs';
import { getAllPosts } from './getAllPosts';
import { Feed } from 'feed';

export default async function generateRssFeed() {
  const posts = getAllPosts();
  const siteURL = process.env.VERCEL_URL || '';
  const author = {
    name: 'Максим Мещеряков',
    email: 'daemonyeen@yandex.ru',
    link: 'https://github.com/daemonyeen',
  };

  const feed = new Feed({
    title: 'Your Blog name',
    description: 'Your Blog description',
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/favicon.ico`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `Копирайты для слабаков`,
    updated: new Date(),
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
    },
    author,
  });

  posts.forEach((post) => {
    const { slug, data } = post;
    const url = `${siteURL}/blog/${slug}`;

    feed.addItem({
      title: data.title,
      id: url,
      link: url,
      description: data.excerpt,
      content: data.excerpt,
      author: [author],
      contributor: [author],
      date: new Date(data.date),
    });
  });

  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
  fs.writeFileSync('./public/rss/feed.json', feed.json1());
}
