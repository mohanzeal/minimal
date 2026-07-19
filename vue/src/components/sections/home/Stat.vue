<script setup lang="ts">
import { cn } from '@/utils';
import { ref } from 'vue';
import SectionWrapper from '@/components/common/SectionWrapper.vue';
import SectionHeader from '@/components/common/SectionHeader.vue';
import type { Section } from '@/types/section.types';
import { ContentElement, ImageElement } from '@/components/common/elements';
import ItemWrapper from '@/components/common/ItemWrapper.vue';

const section = ref({
  id: 'Stat3_git15',
  class: 'p-6 lg:p-8 mx-auto',
  backgrounds: [
    {
      pattern: {
        style: {
          background: 'var(--bg)',
          clipPath: 'polygon(0 0, 2880px 352px, 5760px 0, 5760px 100%, 0 100%)',
        },
        class:
          'dark:[--bg:var(--color-secondary-900)] [--bg:var(--color-secondary-100)]',
      },
    },
  ],
  data: {
    badge: {
      rightIcon: {
        name: 'ArrowUpRight',
      },
      href: '/testimonials',
      id: '1',
      variant: 'outline',
      label: 'Trusted by',
    },
    title: {
      content: 'Real Results, Real Business',
      as: 'h2',
    },
    desc: {
      content:
        'Boost engagement and drive sales with proven email marketing solutions. Track your success with real-time analytics.',
      isHtml: true,
    },
    buttons: [
      {
        href: '/signup',
        id: '8v0gy',
        variant: 'default',
        label: 'Start Free Trial',
      },
      {
        href: '/features',
        id: 'zs2k9',
        variant: 'outline',
        label: 'See Features',
      },
    ],
    img: {
      id: 1,
      src: '/images/transparent-34.png',
      alt: 'avatar-22',
      class: 'object-cover object-center',
    },
    stats: [
      {
        id: 1,
        title: {
          content: 'Open Rate',
        },
        value: {
          content: '42%',
          animation: {
            enabled: true,
            preset: 'numberCounter',
          },
        },
        desc: {
          content:
            'Higher than industry average. Engage your audience effectively.',
          isHtml: true,
        },
        backgrounds: [
          {
            pattern: {
              style: {
                backgroundImage:
                  '        linear-gradient(to right, var(--color-1) 1px, transparent 1px),   linear-gradient(to bottom, var(--color-1) 1px, transparent 1px)     ',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 0',
                maskImage:
                  '\n            repeating-linear-gradient(\n              to right,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            repeating-linear-gradient(\n              to bottom,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            radial-gradient(ellipse 80% 80% at 100% 0%, var(--color-2) 50%, transparent 90%)\n          ',
                WebkitMaskImage:
                  '\n            repeating-linear-gradient(\n              to right,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            repeating-linear-gradient(\n              to bottom,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            radial-gradient(ellipse 80% 80% at 100% 0%, var(--color-2) 50%, transparent 90%)\n          ',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in',
              },
              class:
                'dark:[--color-1:var(--color-secondary-800)] dark:[--color-2:var(--color-secondary-700)] [--color-1:var(--color-secondary-400)] [--color-2:var(--color-secondary-400)]',
            },
          },
        ],
      },
      {
        id: 2,
        title: {
          content: 'Conversion Rate',
        },
        value: {
          content: '8%',
          animation: {
            enabled: true,
            preset: 'numberCounter',
          },
        },
        desc: {
          content:
            'Drive more sales with targeted campaigns and smart automation.',
          isHtml: true,
        },
        backgrounds: [
          {
            pattern: {
              style: {
                backgroundImage:
                  '        linear-gradient(to right, var(--color-1) 1px, transparent 1px),   linear-gradient(to bottom, var(--color-1) 1px, transparent 1px)     ',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 0',
                maskImage:
                  '\n            repeating-linear-gradient(\n              to right,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            repeating-linear-gradient(\n              to bottom,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            radial-gradient(ellipse 80% 80% at 100% 0%, var(--color-2) 50%, transparent 90%)\n          ',
                WebkitMaskImage:
                  '\n            repeating-linear-gradient(\n              to right,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            repeating-linear-gradient(\n              to bottom,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            radial-gradient(ellipse 80% 80% at 100% 0%, var(--color-2) 50%, transparent 90%)\n          ',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in',
              },
              class:
                'dark:[--color-1:var(--color-secondary-800)] dark:[--color-2:var(--color-secondary-700)] [--color-1:var(--color-secondary-400)] [--color-2:var(--color-secondary-400)]',
            },
          },
        ],
      },
      {
        id: 3,
        title: {
          content: 'Autoresponders',
        },
        value: {
          content: '150K+',
          animation: {
            enabled: true,
            preset: 'numberCounter',
          },
        },
        desc: {
          content:
            'Active workflows helping businesses automate customer interactions.',
          isHtml: true,
        },
        backgrounds: [
          {
            pattern: {
              style: {
                backgroundImage:
                  '        linear-gradient(to right, var(--color-1) 1px, transparent 1px),   linear-gradient(to bottom, var(--color-1) 1px, transparent 1px)     ',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 0',
                maskImage:
                  '\n            repeating-linear-gradient(\n              to right,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            repeating-linear-gradient(\n              to bottom,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            radial-gradient(ellipse 80% 80% at 100% 0%, var(--color-2) 50%, transparent 90%)\n          ',
                WebkitMaskImage:
                  '\n            repeating-linear-gradient(\n              to right,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            repeating-linear-gradient(\n              to bottom,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            radial-gradient(ellipse 80% 80% at 100% 0%, var(--color-2) 50%, transparent 90%)\n          ',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in',
              },
              class:
                'dark:[--color-1:var(--color-secondary-800)] dark:[--color-2:var(--color-secondary-700)] [--color-1:var(--color-secondary-400)] [--color-2:var(--color-secondary-400)]',
            },
          },
        ],
      },
    ],
  },
  metadata: {
    isSingleLine: true,
    alignSectionHeaderLeft: true,
    hideBadge: false,
    hideTitle: false,
    hideDesc: false,
    hideButtons: false,
    fourColumns: false,
    hideStats: false,
    hideImage: false,
  },
} as Section);
</script>
<template>
  <SectionWrapper :section="section">
    <div class="flex flex-col items-center justify-center gap-4">
      <SectionHeader :section="section" />
      <!-- Center Image Box -->
      <div
        v-if="!section?.metadata?.hideImage && section.data.img"
        class="my-2 flex w-full items-center justify-center overflow-hidden p-8"
      >
        <ImageElement
          v-bind="section.data.img"
          :class="
            cn(
              'aspect-16/9 w-full rounded-xl object-contain',
              section.data.img.class
            )
          "
        />
      </div>
      <!-- Stats Grid -->
      <div
        v-if="!section?.metadata?.hideStats"
        :class="[
          'grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12',
          section.metadata?.fourColumns && 'lg:grid-cols-4',
          section.data?.stats?.length < 3 ? 'lg:grid-cols-2' : '',
        ]"
      >
        <ItemWrapper
          :item="stat"
          v-for="stat in section.data.stats"
          :key="stat.id"
          :class="
            cn(
              'w-full p-4 text-left transition-all duration-300 hover:scale-105',
              stat.class
            )
          "
        >
          <ContentElement
            v-bind="stat.title"
            :class="
              cn('!text-sm font-semibold tracking-wide', stat.title?.class)
            "
          />
          <div class="mt-4 flex items-baseline justify-between gap-1">
            <ContentElement
              v-bind="stat.value"
              :as="stat.value?.as ?? 'h3'"
              :class="
                cn('!text-5xl font-extrabold tracking-tight', stat.value?.class)
              "
            />
          </div>
          <ContentElement
            v-if="stat.desc"
            v-bind="stat.desc"
            :class="
              cn(
                'mt-3 !text-sm leading-relaxed font-medium opacity-80',
                stat.desc.class
              )
            "
          />
        </ItemWrapper>
      </div>
    </div>
  </SectionWrapper>
</template>
