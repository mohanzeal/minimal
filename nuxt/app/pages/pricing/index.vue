<script setup lang="ts">
import type { Page } from '@/types';
import PageWrapper from '@/components/common/PageWrapper.vue';

import Navbar from '@/components/sections/global/Navbar.vue';
import Pricing from '@/components/sections/pricing/Pricing.vue';
import Testimonial from '@/components/sections/pricing/Testimonial.vue';
import Footer from '@/components/sections/global/Footer.vue';

const page = {
  seo: {
    title: '',
    description: '',
  },
  id: 'pricing',
  link: 'pricing',
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
    <Pricing />
    <Testimonial />
    <Footer />
  </PageWrapper>
</template>
