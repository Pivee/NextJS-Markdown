import { IMDFrontMatter } from './IMDFrontMatter';

export interface IMDArticle {
  slug?: string;
  frontMatter?: IMDFrontMatter;
  content?: string;
}

