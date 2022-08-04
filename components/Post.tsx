import Link from 'next/link';
import { PostMetadata } from '../lib/types/posts';

export type PostProps = PostMetadata;

const Post = ({ slug, data }: PostProps) => {
  return (
    <li key={slug}>
      <h2 className="text-xl">
        <Link href={`/post/${slug}`} passHref>
          <a className="font-mono text-mono text-base leading-7 text-rose-500 dark:text-amber-300 hover:underline">
            {data.title}
          </a>
        </Link>
        <div className="font-mono text-mono text-sm text-gray-500 dark:text-gray-400">
          {data.date}
        </div>
      </h2>
    </li>
  );
};

export default Post;
