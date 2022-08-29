import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import { NextPage } from 'next';
import MainWrapper from '../../components/MainWrapper';
import { MarkdownMetadata } from '../../lib/types/posts';
import PostTitle from '../../components/PostTitle';
import TopBar from '../../components/TopBar';
import Head from 'next/head';

type PostProps = Readonly<{
  data: MarkdownMetadata['data'];
  content: string;
}>;

const PostPage: NextPage<PostProps> = ({ data, content }) => {
  return (
    <>
      <Head>
        <title>Хаскикодинг / {data.title}</title>
        <meta name="description" content={data.excerpt} />
      </Head>
      <TopBar></TopBar>
      <MainWrapper>
        <PostTitle date={data.date}>{data.title}</PostTitle>
        <div
          className="typography pb-20"
          dangerouslySetInnerHTML={{ __html: md({ html: true }).render(content) }}
        />
      </MainWrapper>
    </>
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
