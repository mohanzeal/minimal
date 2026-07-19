import type { Page } from '@/types';
import { FC } from 'react';
import FullPageLayout from '@/layouts/FullPageLayout';
import PageWrapper from '@/components/common/PageWrapper';
import Navbar from '@/components/sections/global/Navbar.tsx';
import Hero from '@/components/sections/home/Hero.tsx';
import Feature from '@/components/sections/home/Feature.tsx';
import HowItWorks from '@/components/sections/home/HowItWorks.tsx';
import Stat from '@/components/sections/home/Stat.tsx';
import Testimonial from '@/components/sections/home/Testimonial.tsx';
import Integration from '@/components/sections/home/Integration.tsx';
import Pricing from '@/components/sections/home/Pricing.tsx';
import Cta from '@/components/sections/home/Cta.tsx';
import Footer from '@/components/sections/global/Footer.tsx';

const Index: FC = () => {
  const page = {
    id: 'home',
    label: 'Home',
    desc: 'The main landing page of MailWavy, introducing the email marketing solution for growing businesses.',
    link: 'home',
  } as Page;

  return (
    <FullPageLayout>
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
    </FullPageLayout>
  );
};

export default Index;
