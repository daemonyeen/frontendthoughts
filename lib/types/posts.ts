import { GrayMatterFile } from 'gray-matter';

export type MarkdownMetadata = Readonly<{
  slug: string;
  data: GrayMatterFile<any>['data'];
  content?: string;
}>;
