<script setup lang="ts">
import type { Page } from '@/types';
import FullPageLayout from '@/layouts/FullPageLayout.vue';
import PageWrapper from '@/components/common/PageWrapper.vue';

import Navbar from '@/components/sections/global/Navbar.vue';
import Faq from '@/components/sections/faq/Faq.vue';
import Footer from '@/components/sections/global/Footer.vue';

const page = {
  id: 'faq',
  label: 'FAQ',
  desc: 'Frequently asked questions and answers about MailWavy.',
  link: 'faq',
} as Page;
</script>

<template>
  <FullPageLayout>
    <PageWrapper :page="page">
      <!-- Page Sections -->
      <Navbar />
      <Faq />
      <Footer />
    </PageWrapper>
  </FullPageLayout>
</template>
