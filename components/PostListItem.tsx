import Link from 'next/link';
import { MarkdownMetadata } from '../lib/types/posts';

export type PostProps = MarkdownMetadata;

const PostListItem = ({ slug, data }: PostProps) => {
  return (
    <li className="mt-8 first:mt-0" key={slug}>
      <div className="text-sm text-gray-400 pb-1">{data.date}</div>
      <h2>
        <Link href={`/post/${slug}`} passHref>
          <a className="text-2xl text-gray-700 hover:underline">{data.title}</a>
        </Link>
      </h2>
    </li>
  );
};

export default PostListItem;
