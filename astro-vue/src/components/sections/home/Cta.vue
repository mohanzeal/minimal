<script setup lang="ts">
import { ref } from 'vue';
import SectionWrapper from '@/components/common/SectionWrapper.vue';
import SectionHeader from '@/components/common/SectionHeader.vue';
import type { Section } from '@/types/section.types';

const section = ref({
  id: 'Cta2_o13y0',
  class: 'p-6 lg:p-8 mx-auto',
  backgrounds: [
    {
      label: 'Neutral',
      shade: {
        light: {
          color: 'neutral',
          value: '950',
        },
        dark: {
          color: 'neutral',
          value: '950',
        },
      },
      class: 'bg-neutral-950  text-white/90 dark:bg-transparent',
    },
    {
      image: {
        id: 1,
        src: '/images/landscape-2.webp',
        alt: 'landscape-1',
        overlayClass: 'bg-neutral-900 opacity-50',
      },
    },
  ],
  data: {
    badge: {
      rightIcon: {
        name: 'ArrowUpRight',
      },
      href: '/signup',
      id: '1',
      variant: 'none',
      label: 'Start Free Trial',
    },
    title: {
      content: 'Elevate Your Email Strategy',
      as: 'h2',
      class: 'lg:text-5xl!',
    },
    desc: {
      content: 'Boost engagement and sales with powerful email tools.',
      isHtml: true,
    },
    buttons: [
      {
        href: '/signup',
        id: 'sc7p7',
        variant: 'default',
        label: 'Get Started',
      },
      {
        leftIcon: {
          name: 'Play',
        },
        href: '/features',
        id: 'ct5kq',
        variant: 'outline',
        label: 'See Features',
      },
    ],
    img: {
      id: 1,
      src: '/images/p.svg',
    },
  },
  metadata: {
    isSingleLine: true,
    alignSectionHeaderLeft: true,
    hideBadge: true,
    hideTitle: false,
    hideDesc: false,
    hideButtons: false,
    hideImage: false,
  },
} as Section);
</script>
<template>
  <SectionWrapper :section="section">
    <SectionHeader
      :section="section"
      class="flex min-h-100 flex-col items-center justify-center"
    />
  </SectionWrapper>
</template>
