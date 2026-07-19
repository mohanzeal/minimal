<script lang="ts" setup>
import { cn } from '@/utils';
import { ref } from 'vue';
import SectionWrapper from '@/components/common/SectionWrapper.vue';
import type { Section } from '@/types/section.types';
import {
  ContentElement,
  LinkElement,
  ImageElement,
} from '@/components/common/elements';

const section = ref({
  id: 'footer4_50fcm',
  class: 'p-6 lg:p-8 mx-auto',
  data: {
    siteName: {
      content: 'Logo',
    },
    siteLogo: {
      id: 1,
      src: '/images/bolt.svg',
    },
    credits: {
      content: '© 2025 MailWavy. All rights reserved.',
      isHtml: true,
    },
    links: [
      {
        id: '1',
        variant: 'none',
        label: 'About us',
      },
      {
        id: '2',
        variant: 'none',
        label: 'Pricing',
      },
      {
        id: '3',
        variant: 'none',
        label: 'Contact us',
      },
    ],
  },
  metadata: {
    hideLogo: false,
    hideSiteName: false,
    hideCredits: false,
    hideLinks: false,
  },
} as Section);
</script>
<template>
  <SectionWrapper :section="section">
    <div class="flex flex-col items-center justify-between gap-4 lg:flex-row">
      <div
        class="flex flex-col items-center gap-2 text-center lg:flex-row lg:text-left"
      >
        <ImageElement
          v-if="!section.metadata?.hideLogo"
          :class="
            cn(
              'mx-auto size-8 rounded-none border-none shadow-none lg:mx-0',
              section.data.siteLogo.class
            )
          "
          v-bind="section.data.siteLogo"
        />
        <ContentElement
          v-if="!section.metadata?.hideSiteName"
          v-bind="section.data.siteName"
        />
        <ContentElement
          v-bind="section.data.credits"
          :class="cn('opacity-80', section.data.credits.class)"
        />
      </div>
      <div
        v-if="!section.metadata?.hideLinks"
        class="flex flex-col items-center gap-2 text-center lg:flex-row lg:flex-wrap lg:justify-end lg:gap-6"
      >
        <LinkElement
          v-for="(link, idx) in section.data.links"
          :key="link.id"
          v-bind="link"
        >
        </LinkElement>
      </div>
    </div>
  </SectionWrapper>
</template>
