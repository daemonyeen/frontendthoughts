import type { NextPage } from 'next';
import TopBar from '../components/TopBar';
import MainWrapper from '../components/MainWrapper';
import fs from 'fs';
import matter from 'gray-matter';
import { PostMetadata } from '../lib/types/posts';
import Post from '../components/Post';

type HomeProps = Readonly<{
  posts: PostMetadata[];
}>;

const Home: NextPage<HomeProps> = ({ posts }: HomeProps) => {
  return (
    <MainWrapper>
      <TopBar></TopBar>

      <ul className="mt-8">
        {posts.map((post) => (
          <Post {...post} key={post.slug}></Post>
        ))}
      </ul>
    </MainWrapper>
  );
};

export default Home;

export async function getStaticProps() {
  // Get all our posts
  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data } = matter(readFile);

    return {
      slug,
      data,
    } as PostMetadata;
  });

  return {
    props: {
      posts,
    },
  };
}
