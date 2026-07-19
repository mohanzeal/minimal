import type { Page } from '@/types';
import { FC } from 'react';
import FullPageLayout from '@/layouts/FullPageLayout';
import PageWrapper from '@/components/common/PageWrapper';
import Navbar from '@/components/sections/global/Navbar.tsx';
import Faq from '@/components/sections/faq/Faq.tsx';
import Footer from '@/components/sections/global/Footer.tsx';

const Faqs: FC = () => {
  const page = {
    id: 'faq',
    label: 'FAQ',
    desc: 'Frequently asked questions and answers about MailWavy.',
    link: 'faq',
  } as Page;

  return (
    <FullPageLayout>
      <PageWrapper page={page}>
        {/* Page Sections */}
        <Navbar />
        <Faq />
        <Footer />
      </PageWrapper>
    </FullPageLayout>
  );
};

export default Faqs;
