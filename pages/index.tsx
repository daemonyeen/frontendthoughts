import type { NextPage } from 'next';
import TopBar from '../components/TopBar';
import { MarkdownMetadata } from '../lib/types/posts';
import PostListItem from '../components/PostListItem';
import MainWrapper from '../components/MainWrapper';
import { getAllPosts } from '../lib/getAllPosts';
import generateRssFeed from '../lib/generateRssFeed';

type HomeProps = Readonly<{
  posts: MarkdownMetadata[];
}>;

const Home: NextPage<HomeProps> = ({ posts }: HomeProps) => {
  return (
    <>
      <TopBar></TopBar>

      <MainWrapper>
        <ul className="mt-10">
          {posts.map((post) => (
            <PostListItem {...post} key={post.slug}></PostListItem>
          ))}
        </ul>
      </MainWrapper>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  await generateRssFeed();

  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
