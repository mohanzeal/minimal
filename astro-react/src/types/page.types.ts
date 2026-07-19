import type { Background } from './section.types';

export type ContainerProps = {
  page: Page;
};

export type Seo = {
  title: string;
  description: string;
};

export type PageId = any;
export type Page = {
  id: PageId;
  link: string;
  label?: string;
  className?: string;
  backgrounds?: Background[];
  seo?: Seo;
};
