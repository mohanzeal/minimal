import Container from './container';
import type { Page } from '@/types';
import type { FC } from 'react';
import type { Metadata } from 'next';

const page = {
  seo: { title: '', description: '' },
  id: 'home',
  link: 'home',
  sections: [],
} as Page;

export const metadata: Metadata = page.seo || { title: 'Next App' };

const Home: FC = () => {
  return <Container page={page} />;
};

export default Home;
