import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import { NextPage } from 'next';
import MainWrapper from '../../components/MainWrapper';
import { PostMetadata } from '../../lib/types/posts';
import PostTitle from '../../components/PostTitle';
import TopBar from '../../components/TopBar';

type PostProps = Readonly<{
  data: PostMetadata['data'];
  content: string;
}>;

const PostPage: NextPage<PostProps> = ({ data, content }) => {
  return (
    <MainWrapper>
      <TopBar></TopBar>
      <PostTitle date={data.date}>{data.title}</PostTitle>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </MainWrapper>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data, content } = matter(fileName);

  return {
    props: {
      data,
      content,
    } as PostProps,
  };
}
