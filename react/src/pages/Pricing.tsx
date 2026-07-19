import type { Page } from '@/types';
import { FC } from 'react';
import FullPageLayout from '@/layouts/FullPageLayout';
import PageWrapper from '@/components/common/PageWrapper';
import Navbar from '@/components/sections/global/Navbar.tsx';
import Pricing from '@/components/sections/pricing/Pricing.tsx';
import Testimonial from '@/components/sections/pricing/Testimonial.tsx';
import Footer from '@/components/sections/global/Footer.tsx';

const Pricing1: FC = () => {
  const page = {
    id: 'pricing',
    label: 'Pricing',
    desc: 'Information about different subscription plans and pricing options.',
    link: 'pricing',
  } as Page;

  return (
    <FullPageLayout>
      <PageWrapper page={page}>
        {/* Page Sections */}
        <Navbar />
        <Pricing />
        <Testimonial />
        <Footer />
      </PageWrapper>
    </FullPageLayout>
  );
};

export default Pricing1;
