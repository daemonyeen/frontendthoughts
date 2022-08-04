import { GrayMatterFile } from 'gray-matter';

export type PostMetadata = Readonly<{
  slug: string;
  data: GrayMatterFile<any>['data'];
}>;
