'use client';

import type { FC } from 'react';
import { ContainerProps } from '@/types';
import PageWrapper from '@/components/common/PageWrapper';
import Navbar from '@/components/sections/global/Navbar';
import Faq from '@/components/sections/faq/Faq';
import Footer from '@/components/sections/global/Footer';

const Container: FC<ContainerProps> = ({ page }) => {
  return (
    <PageWrapper page={page}>
      {/* Page Sections */}
      <Navbar />
      <Faq />
      <Footer />
    </PageWrapper>
  );
};

export default Container;
