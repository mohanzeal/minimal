<script lang="ts" setup>
import { cn } from '@/utils';
import { ref } from 'vue';
import SectionWrapper from '@/components/common/SectionWrapper.vue';
import SectionHeader from '@/components/common/SectionHeader.vue';
import type { Section } from '@/types/section.types';
import {
  ContentElement,
  ButtonElement,
  ImageElement,
} from '@/components/common/elements/index';

const section = ref({
  id: '53rus',
  class: 'p-0',
  data: {
    badge: {
      leftIcon: {
        name: 'CircleDashed',
      },
      rightIcon: {
        name: 'ArrowUpRight',
      },
      href: '/pricing',
      id: '1',
      variant: 'outline',
      label: 'Email Marketing',
    },
    title: {
      content: 'Grow Your Business with MailWavy',
      as: 'h1',
      class: 'lg:text-6xl!',
    },
    desc: {
      content:
        'Create, automate, and analyze emails to boost engagement and sales.',
      isHtml: true,
    },
    buttons: [
      {
        leftIcon: {
          name: 'Play',
        },
        href: '/signup',
        id: 'x7ew2',
        variant: 'default',
        label: 'Start Free Trial',
      },
    ],
    img: {
      id: 1,
      src: '/images/transparent-43.png',
      class: 'rounded-0',
    },
  },
  metadata: {
    isSingleLine: false,
    alignSectionHeaderLeft: true,
    hideBadge: false,
    hideTitle: false,
    hideDesc: false,
    hideButtons: false,
    hideImage: false,
    alignImageLeft: false,
  },
} as Section);
</script>
<template>
  <SectionWrapper :section="section">
    <div
      class="grid items-stretch gap-0"
      :class="
        section.metadata?.hideImage
          ? 'grid-cols-1'
          : 'grid-cols-1 lg:grid-cols-2'
      "
    >
      <!-- Image Column (takes full height using stretch on the grid) -->
      <div
        v-if="!section.metadata?.hideImage"
        class="relative min-h-[350px] sm:min-h-[450px] lg:min-h-[600px]"
        :class="section.metadata?.alignImageLeft ? 'lg:order-1' : 'lg:order-2'"
      >
        <ImageElement
          :class="
            cn(
              'absolute inset-0 h-full w-full object-cover lg:mask-[linear-gradient(to_right,var(--background)_20%,transparent_99%)] lg:mask-no-repeat',
              section.data.img.class
            )
          "
          v-bind="section.data.img"
        />
      </div>
      <!-- Content Column -->
      <div
        class="flex items-center px-6 py-16 sm:px-12 sm:py-24 lg:px-16 xl:px-24"
        :class="section.metadata?.alignImageLeft ? 'lg:order-2' : 'lg:order-1'"
      >
        <SectionHeader :section="section" />
      </div>
    </div>
  </SectionWrapper>
</template>
