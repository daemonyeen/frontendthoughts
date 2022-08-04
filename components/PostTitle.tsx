import { PropsWithChildren } from 'react';

export type PostTitleProps = Readonly<{
  date: string;
}>;

const PostTitle = ({ date, children }: PropsWithChildren<PostTitleProps>) => {
  return (
    <div className="mt-10 mb-8">
      <h1 className="font-mono text-mono text-2xl text-rose-400 dark:text-amber-400">{children}</h1>
      <div className="font-mono text-mono text-sm text-gray-500 dark:text-gray-400 mt-1">
        {date}
      </div>
    </div>
  );
};

export default PostTitle;
