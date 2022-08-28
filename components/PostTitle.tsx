import { PropsWithChildren } from 'react';

export type PostTitleProps = Readonly<{
  date: string;
}>;

const PostTitle = ({ date, children }: PropsWithChildren<PostTitleProps>) => {
  return (
    <div className="mt-12 mb-8">
      <div className="text-sm text-gray-500 pb-2">{date}</div>
      <h1 className="font-bold text-3xl sm:text-4xl text-gray-700">{children}</h1>
    </div>
  );
};

export default PostTitle;
