import type { NextPage } from 'next';
import fs from 'fs';
import matter from 'gray-matter';
import MainWrapper from '../../components/MainWrapper';
import TopBar from '../../components/TopBar';
import { MarkdownMetadata } from '../../lib/types/posts';
import Snippet from '../../components/Snippet';

type SnippetsProps = Readonly<{
  snippets: MarkdownMetadata[];
}>;

const Snippets: NextPage<SnippetsProps> = ({ snippets }: SnippetsProps) => {
  return (
    <>
      <TopBar></TopBar>

      <MainWrapper>
        <ul className="mt-8">
          {snippets.map((snippet) => (
            <Snippet {...snippet} key={snippet.slug}></Snippet>
          ))}
        </ul>
      </MainWrapper>
    </>
  );
};

export default Snippets;

export async function getStaticProps() {
  // Get all our posts
  const files = fs.readdirSync('snippets');

  const snippets = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`snippets/${fileName}`, 'utf-8');
    const { data, content } = matter(readFile);

    return {
      slug,
      data,
      content,
    } as MarkdownMetadata;
  });

  return {
    props: {
      snippets,
    },
  };
}
