'use client';

import type { FC } from 'react';
import { ContainerProps } from '@/types';
import PageWrapper from '@/components/common/PageWrapper';
import Navbar from '@/components/sections/global/Navbar';
import Hero from '@/components/sections/home/Hero';
import Feature from '@/components/sections/home/Feature';
import HowItWorks from '@/components/sections/home/HowItWorks';
import Stat from '@/components/sections/home/Stat';
import Testimonial from '@/components/sections/home/Testimonial';
import Integration from '@/components/sections/home/Integration';
import Pricing from '@/components/sections/home/Pricing';
import Cta from '@/components/sections/home/Cta';
import Footer from '@/components/sections/global/Footer';

const Container: FC<ContainerProps> = ({ page }) => {
  return (
    <PageWrapper page={page}>
      {/* Page Sections */}
      <Navbar />
      <Hero />
      <Feature />
      <HowItWorks />
      <Stat />
      <Testimonial />
      <Integration />
      <Pricing />
      <Cta />
      <Footer />
    </PageWrapper>
  );
};

export default Container;
