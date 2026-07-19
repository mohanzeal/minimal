<script setup lang="ts">
import { cn } from '@/utils';
import { ref } from 'vue';
import SectionWrapper from '@/components/common/SectionWrapper.vue';
import SectionHeader from '@/components/common/SectionHeader.vue';
import type { Section } from '@/types/section.types';
import {
  ContentElement,
  ImageElement,
  Icon,
} from '@/components/common/elements/index';
import ItemWrapper from '@/components/common/ItemWrapper.vue';

const section = ref({
  id: 'qfa9s',
  class: 'p-6 lg:p-8 mx-auto',
  data: {
    badge: {
      rightIcon: {
        name: 'ArrowUpRight',
      },
      href: '/features',
      id: '1',
      variant: 'outline',
      label: 'Most Loved',
    },
    title: {
      content: 'Powerful Features for Your Business',
      as: 'h2',
    },
    desc: {
      content:
        'Intuitive tools to create, manage, and optimize your email campaigns.',
      isHtml: true,
    },
    buttons: [
      {
        href: '/signup',
        id: 'n5zes',
        variant: 'default',
        label: 'Start Free Trial',
      },
      {
        leftIcon: {
          name: 'Play',
        },
        href: '/pricing',
        id: '3a7z6',
        variant: 'outline',
        label: 'See Pricing',
      },
    ],
    img: {
      id: 1,
      src: '/images/transparent-36.png',
      class: 'aspect-3/4',
      backgrounds: [
        {
          pattern: {
            style: {
              backgroundImage:
                '        linear-gradient(to right, var(--color-1) 1px, transparent 1px),   linear-gradient(to bottom, var(--color-1) 1px, transparent 1px)     ',
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 0 0',
              maskImage:
                '\n            repeating-linear-gradient(\n              to right,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            repeating-linear-gradient(\n              to bottom,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n          radial-gradient(ellipse 60% 60% at 50% 50%, var(--color-2) 30%, transparent 70%)\n          ',
              WebkitMaskImage:
                '\n            repeating-linear-gradient(\n              to right,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            repeating-linear-gradient(\n              to bottom,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n          radial-gradient(ellipse 60% 60% at 50% 50%, var(--color-2) 30%, transparent 70%)\n          ',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in',
            },
            class:
              'dark:[--color-1:var(--color-secondary-700)] dark:[--color-2:var(--color-secondary-700)] [--color-1:var(--color-secondary-300)] [--color-2:var(--color-secondary-700)]',
          },
        },
      ],
    },
    features: [
      {
        id: 1,
        icon: {
          name: 'MessageSquareCode',
        },
        title: {
          content: 'Automate Workflows',
          as: 'h3',
        },
        desc: {
          content: 'Save time with smart automation for customer journeys.',
          isHtml: true,
        },
      },
      {
        id: 2,
        icon: {
          name: 'Share',
        },
        title: {
          content: 'Drag &amp; Drop Editor',
          as: 'h3',
        },
        desc: {
          content: 'Create stunning newsletters without coding skills.',
          isHtml: true,
        },
      },
      {
        id: 3,
        icon: {
          name: 'Smile',
        },
        title: {
          content: 'Track Performance',
          as: 'h3',
        },
        desc: {
          content: 'Get real-time insights and analytics on campaign success.',
          isHtml: true,
        },
      },
      {
        id: 4,
        icon: {
          name: 'Users',
        },
        title: {
          content: 'Community Groups',
          as: 'h3',
        },
        desc: {
          content: 'Join or create groups around shared interests.',
          isHtml: true,
        },
      },
    ],
  },
  metadata: {
    isSingleLine: false,
    alignSectionHeaderLeft: true,
    hideBadge: false,
    hideTitle: false,
    hideDesc: false,
    hideButtons: false,
    hideImage: false,
    alignImageLeft: true,
    hideFeatureTitle: false,
    hideFeatureDesc: false,
  },
} as Section);
</script>
<template>
  <SectionWrapper :section="section">
    <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
      <!-- Image Column -->
      <div
        class="relative flex justify-center lg:col-span-5"
        :class="section.metadata?.alignImageLeft ? 'lg:order-1' : 'lg:order-2'"
        v-if="!section.metadata?.hideImage"
      >
        <ImageElement
          v-bind="section.data.img"
          :class="cn('aspect-3/4 w-full object-cover', section.data.img?.class)"
        />
      </div>
      <!-- Content Column -->
      <div
        :class="[
          'flex flex-col text-left lg:col-span-7',
          section.metadata?.alignImageLeft ? 'lg:order-2' : 'lg:order-1',
          section.metadata?.hideImage ? 'lg:col-span-12' : '',
        ]"
      >
        <!-- Section Header -->
        <SectionHeader :section="section" />
        <!-- Features 2x2 Grid -->
        <div
          class="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-10"
        >
          <div v-for="feature in section.data.features" :key="feature.id">
            <ItemWrapper
              :item="feature"
              :class="
                cn(
                  'p-4 transition-all duration-300 hover:scale-105',
                  feature.class
                )
              "
            >
              <div class="flex items-start gap-4">
                <div
                  class="mt-1 inline-flex shrink-0 items-center justify-center"
                >
                  <Icon
                    v-bind="feature.icon"
                    :class="cn('text-primary size-6', feature.icon?.class)"
                  />
                </div>
                <div>
                  <ContentElement
                    v-bind="feature.title"
                    :as="feature.title.as ?? 'h3'"
                    :class="cn('!text-lg font-semibold', feature.title?.class)"
                  />
                  <ContentElement
                    v-bind="feature.desc"
                    :class="
                      cn(
                        'mt-1.5 !text-sm leading-relaxed opacity-80',
                        feature.desc.class
                      )
                    "
                  />
                </div>
              </div>
            </ItemWrapper>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
