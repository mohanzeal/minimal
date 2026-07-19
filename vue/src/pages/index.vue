<script setup lang="ts">
import type { Page } from '@/types';
import FullPageLayout from '@/layouts/FullPageLayout.vue';
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
  id: 'home',
  label: 'Home',
  desc: 'The main landing page of MailWavy, introducing the email marketing solution for growing businesses.',
  link: 'home',
} as Page;
</script>

<template>
  <FullPageLayout>
    <PageWrapper :page="page">
      <!-- Page Sections -->
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
</template>
