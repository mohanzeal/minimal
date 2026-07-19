<script setup lang="ts">
import { cn } from '@/utils';
import { ref } from 'vue';
import SectionWrapper from '@/components/common/SectionWrapper.vue';
import SectionHeader from '@/components/common/SectionHeader.vue';
import type { Section } from '@/types/section.types';
import {
  ContentElement,
  ImageElement,
  ButtonElement,
} from '@/components/common/elements';
import ItemWrapper from '@/components/common/ItemWrapper.vue';

const section = ref({
  id: 'ib7v9',
  class: 'p-6 lg:p-8 mx-auto',
  data: {
    badge: {
      rightIcon: {
        name: 'ArrowUpRight',
      },
      href: '/features',
      id: '1',
      variant: 'outline',
      label: 'Effortless Email Marketing',
    },
    title: {
      content: 'Streamline Your Communication',
      as: 'h2',
    },
    desc: {
      content:
        'Effortlessly create, send, and track emails that drive results.',
      isHtml: true,
    },
    buttons: [
      {
        href: '/signup',
        id: 'a8v5x',
        variant: 'default',
        label: 'Start Free Trial',
      },
      {
        href: '/features',
        id: '4zfc9',
        variant: 'outline',
        label: 'See Features',
      },
    ],
    steps: [
      {
        id: 4,
        step: {
          id: '4',
          variant: 'default',
          label: '1',
        },
        img: {
          id: 1,
          src: '/images/transparent-39.png',
          alt: 'transparent-6',
        },
        title: {
          content: 'Create Campaigns',
          as: 'h3',
        },
        desc: {
          content: 'Design and send professional emails with ease.',
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
        id: 5,
        step: {
          id: '5',
          variant: 'default',
          label: '2',
        },
        img: {
          id: 1,
          src: '/images/transparent-16.png',
          alt: 'transparent-40',
        },
        title: {
          content: 'Segment Audiences',
          as: 'h3',
        },
        desc: {
          content: 'Target the right people with personalized messages.',
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
        id: 6,
        step: {
          id: '6',
          variant: 'default',
          label: '3',
        },
        img: {
          id: 1,
          src: '/images/transparent-18.png',
          alt: 'transparent-52',
        },
        title: {
          content: 'Track Performance',
          as: 'h3',
        },
        desc: {
          content: 'Access detailed analytics to refine your strategy.',
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
    hideStepLabel: false,
    hideSteps: false,
  },
} as Section);
</script>
<template>
  <SectionWrapper :section="section">
    <!-- Header: Title, Description & Badge -->
    <SectionHeader :section="section" />
    <div
      v-if="!section?.metadata?.hideSteps"
      class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      <ItemWrapper
        :item="step"
        v-for="(step, idx) in section.data.steps"
        :key="step.id"
        :class="cn('relative', step.class)"
      >
        <div class="relative overflow-hidden">
          <ImageElement
            :class="cn('aspect-square w-full object-cover', step.img.class)"
            v-bind="step.img"
          />
          <div
            v-if="!section?.metadata?.hideStepLabel"
            class="absolute top-5 left-5 flex items-center justify-center"
          >
            <ButtonElement v-bind="step.step" />
          </div>
        </div>
        <div class="px-3 py-4">
          <ContentElement
            v-bind="step.title"
            :class="cn('!text-lg font-semibold', step.title.class)"
            :as="step.title.as ?? 'h3'"
          />
          <ContentElement
            v-bind="step.desc"
            :class="cn('mt-2 opacity-80', step.desc.class)"
          />
        </div>
      </ItemWrapper>
    </div>
  </SectionWrapper>
</template>
