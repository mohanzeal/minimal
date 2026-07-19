<script setup lang="ts">
import type { Page } from '@/types';
import PageWrapper from '@/components/common/PageWrapper.vue';

import Navbar from '@/components/sections/global/Navbar.vue';
import Hero from '@/components/sections/home/Hero.vue';
import Feature from '@/components/sections/home/Feature.vue';
import HowItWorks from '@/components/sections/home/HowItWorks.vue';
import Stat from '@/components/sections/home/Stat.vue';
import Testimonial from '@/components/sections/home/Testimonial.vue';
import Integration from '@/components/sections/home/Integration.vue';
import Pricing from '@/components/sections/home/Pricing.vue';
import Cta from '@/components/sections/home/Cta.vue';
import Footer from '@/components/sections/global/Footer.vue';

const page = {
  seo: {
    title: '',
    description: '',
  },
  id: 'home',
  link: 'home',
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
</template>
