<script setup lang="ts">
import type { Page } from '@/types';
import PageWrapper from '@/components/common/PageWrapper.vue';

import Navbar from '@/components/sections/global/Navbar.vue';
import Faq from '@/components/sections/faq/Faq.vue';
import Footer from '@/components/sections/global/Footer.vue';

const page = {
  seo: {
    title: '',
    description: '',
  },
  id: 'faq',
  link: 'faq',
  sections: [],
} as Page;

definePageMeta({
  layout: 'full-page-layout',
  seo: page.seo,
});
</script>

<template>
  <PageWrapper :page="page">
    <!-- Sections -->
    <Navbar />
    <Faq />
    <Footer />
  </PageWrapper>
</template>
