import { MarkdownMetadata } from '../lib/types/posts';
import md from 'markdown-it';

export type SnippetProps = MarkdownMetadata;

const Snippet = ({ data, content }: SnippetProps) => {
  return (
    <div className="p-6 border gray-200 rounded-lg">
      <h2 className="text-base leading-7 text-rose-500">{data.title}</h2>
      <div className="text-sm text-gray-500">{data.date}</div>

      <div
        className="typography mt-4"
        dangerouslySetInnerHTML={{ __html: md().render(content!) }}
      />
    </div>
  );
};

export default Snippet;
