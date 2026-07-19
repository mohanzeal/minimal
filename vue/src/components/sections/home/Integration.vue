<script setup lang="ts">
import { cn } from '@/utils';
import { ref, computed } from 'vue';
import SectionWrapper from '@/components/common/SectionWrapper.vue';
import type { Section } from '@/types/section.types';
import {
  ImageElement,
  ButtonElement,
} from '@/components/common/elements/index';
import SectionHeader from '@/components/common/SectionHeader.vue';
import ItemWrapper from '@/components/common/ItemWrapper.vue';

const section = ref({
  id: 'Integration3_egets',
  class: 'p-6 lg:p-8 mx-auto',
  data: {
    badge: {
      href: '/testimonials',
      id: '1',
      variant: 'outline',
      label: 'Trusted by 10,000+ Businesses',
    },
    title: {
      content: 'Seamless Integrations for Your Workflow',
      as: 'h2',
    },
    desc: {
      content:
        'Easily connect MailWavy with your favorite tools and streamline your email marketing.',
      isHtml: true,
    },
    buttons: [
      {
        href: '/integrations',
        id: '1',
        variant: 'default',
        label: 'See all',
      },
    ],
    integrations: [
      {
        id: '40',
        title: {
          content: 'Facebook',
          as: 'h3',
        },
        desc: {
          content:
            'Easily sync your data with facebook for seamless automation.',
          isHtml: true,
        },
        img: {
          id: 1,
          src: '/images/c-40.svg',
        },
        backgrounds: [
          {
            pattern: {
              style: {
                backgroundImage:
                  'repeating-linear-gradient(45deg, transparent, transparent 2px, var(--color-1) 2px, var(--color-1) 4px)',
              },
              class:
                'dark:[--color-1:var(--color-secondary-800)] [--color-1:var(--color-primary-100)]',
            },
          },
        ],
      },
      {
        id: '41',
        title: {
          content: 'Instagram',
          as: 'h3',
        },
        desc: {
          content:
            'Receive updates and notifications directly in your instagram channels.',
          isHtml: true,
        },
        img: {
          id: 1,
          src: '/images/c-41.svg',
        },
        backgrounds: [
          {
            pattern: {
              style: {
                backgroundImage:
                  'repeating-linear-gradient(45deg, transparent, transparent 2px, var(--color-1) 2px, var(--color-1) 4px)',
              },
              class:
                'dark:[--color-1:var(--color-secondary-800)] [--color-1:var(--color-primary-100)]',
            },
          },
        ],
      },
      {
        id: '42',
        title: {
          content: 'Tiktok',
          as: 'h3',
        },
        desc: {
          content:
            'Import your videos from tictok and streamline your reel creation process.',
          isHtml: true,
        },
        img: {
          id: 1,
          src: '/images/c-42.svg',
        },
        backgrounds: [
          {
            pattern: {
              style: {
                backgroundImage:
                  'repeating-linear-gradient(45deg, transparent, transparent 2px, var(--color-1) 2px, var(--color-1) 4px)',
              },
              class:
                'dark:[--color-1:var(--color-secondary-800)] [--color-1:var(--color-primary-100)]',
            },
          },
        ],
      },
      {
        id: '43',
        title: {
          content: 'Reddit',
          as: 'h3',
        },
        desc: {
          content: 'Collaborate blazing-fast with reddit integration.',
          isHtml: true,
        },
        img: {
          id: 1,
          src: '/images/c-43.svg',
        },
        backgrounds: [
          {
            pattern: {
              style: {
                backgroundImage:
                  'repeating-linear-gradient(45deg, transparent, transparent 2px, var(--color-1) 2px, var(--color-1) 4px)',
              },
              class:
                'dark:[--color-1:var(--color-secondary-800)] [--color-1:var(--color-primary-100)]',
            },
          },
        ],
      },
      {
        id: '44',
        title: {
          content: 'Discord',
          as: 'h3',
        },
        desc: {
          content:
            'Sync your discord store data and streamline order management.',
          isHtml: true,
        },
        img: {
          id: 1,
          src: '/images/c-44.svg',
        },
        backgrounds: [
          {
            pattern: {
              style: {
                backgroundImage:
                  'repeating-linear-gradient(45deg, transparent, transparent 2px, var(--color-1) 2px, var(--color-1) 4px)',
              },
              class:
                'dark:[--color-1:var(--color-secondary-800)] [--color-1:var(--color-primary-100)]',
            },
          },
        ],
      },
      {
        id: '49',
        title: {
          content: 'Claude',
          as: 'h3',
        },
        desc: {
          content:
            'Automate your workflows and track changes with claude integration.',
          isHtml: true,
        },
        img: {
          id: 1,
          src: '/images/c-49.svg',
        },
        backgrounds: [
          {
            pattern: {
              style: {
                backgroundImage:
                  'repeating-linear-gradient(45deg, transparent, transparent 2px, var(--color-1) 2px, var(--color-1) 4px)',
              },
              class:
                'dark:[--color-1:var(--color-secondary-800)] [--color-1:var(--color-primary-100)]',
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
    hideGrayscale: true,
    fourColumns: false,
    hideImages: false,
  },
} as Section);

// Compute section header data to hide buttons inside the SectionHeader component
const sectionHeaderData = computed(() => {
  return {
    ...section.value,
    metadata: {
      ...section.value.metadata,
      hideButtons: true,
    },
  };
});
</script>
<template>
  <SectionWrapper :section="section">
    <!-- Header: Centered Title & Description -->
    <SectionHeader :section="sectionHeaderData" />
    <!-- Centered Logo Row Containment -->
    <div
      v-if="!section.metadata?.hideImages"
      class="mx-auto mb-10 flex w-full max-w-4xl flex-wrap items-center justify-center gap-6 px-8 py-6"
    >
      <div
        v-for="item in section.data.integrations"
        :key="item.id"
        class="transition-all duration-300 hover:scale-110"
      >
        <ItemWrapper
          :item="item"
          :class="cn('flex items-center justify-center p-2', item.class)"
        >
          <ImageElement
            v-bind="item.img"
            :class="
              cn(
                'aspect-square max-h-30 min-w-20 object-contain p-1',
                !section?.metadata?.hideGrayscale &&
                  'grayscale dark:brightness-200 dark:invert',
                item.img.class
              )
            "
          />
        </ItemWrapper>
      </div>
    </div>
    <!-- Centered Bottom Button -->
    <div
      v-if="
        section.data.buttons &&
        section.data.buttons.length &&
        !section.metadata?.hideButtons
      "
      class="flex items-center justify-center"
    >
      <ButtonElement
        v-for="(button, idx) in section.data.buttons"
        :key="button.id"
        v-bind="button"
      />
    </div>
  </SectionWrapper>
</template>
