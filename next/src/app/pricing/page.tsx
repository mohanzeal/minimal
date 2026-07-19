import Container from './container';
import type { Page } from '@/types';
import type { FC } from 'react';
import type { Metadata } from 'next';

const page = {
  seo: { title: '', description: '' },
  id: 'pricing',
  link: 'pricing',
  sections: [],
} as Page;

export const metadata: Metadata = page.seo || { title: 'Next App' };

const Pricing: FC = () => {
  return <Container page={page} />;
};

export default Pricing;
