import type { Background } from './site.types';

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
  label?: string;
  link: string;
  class?: string;
  backgrounds?: Background[];
  seo?: Seo;
};
