'use client';

import type { FC } from 'react';
import { ContainerProps } from '@/types';
import PageWrapper from '@/components/common/PageWrapper';
import Navbar from '@/components/sections/global/Navbar';
import Pricing from '@/components/sections/pricing/Pricing';
import Testimonial from '@/components/sections/pricing/Testimonial';
import Footer from '@/components/sections/global/Footer';

const Container: FC<ContainerProps> = ({ page }) => {
  return (
    <PageWrapper page={page}>
      {/* Page Sections */}
      <Navbar />
      <Pricing />
      <Testimonial />
      <Footer />
    </PageWrapper>
  );
};

export default Container;
