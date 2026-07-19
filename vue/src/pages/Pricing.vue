<script setup lang="ts">
import type { Page } from '@/types';
import FullPageLayout from '@/layouts/FullPageLayout.vue';
import PageWrapper from '@/components/common/PageWrapper.vue';

import Navbar from '@/components/sections/global/Navbar.vue';
import Pricing from '@/components/sections/pricing/Pricing.vue';
import Testimonial from '@/components/sections/pricing/Testimonial.vue';
import Footer from '@/components/sections/global/Footer.vue';

const page = {
  id: 'pricing',
  label: 'Pricing',
  desc: 'Information about different subscription plans and pricing options.',
  link: 'pricing',
} as Page;
</script>

<template>
  <FullPageLayout>
    <PageWrapper :page="page">
      <!-- Page Sections -->
      <Navbar />
      <Pricing />
      <Testimonial />
      <Footer />
    </PageWrapper>
  </FullPageLayout>
</template>
