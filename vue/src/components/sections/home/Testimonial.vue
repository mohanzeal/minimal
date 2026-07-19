<script setup lang="ts">
import { cn } from '@/utils';
import { ref } from 'vue';
import { Star } from 'lucide-vue-next';
import SectionWrapper from '@/components/common/SectionWrapper.vue';
import SectionHeader from '@/components/common/SectionHeader.vue';
import type { Section } from '@/types/section.types';
import { ContentElement, ImageElement } from '@/components/common/elements';
import ItemWrapper from '@/components/common/ItemWrapper.vue';

const section = ref({
  id: 'mpdym',
  class: 'p-6 lg:p-8 mx-auto',
  data: {
    badge: {
      rightIcon: {
        name: 'ArrowUpRight',
      },
      href: '/testimonials',
      id: '1',
      variant: 'outline',
      label: 'Trusted by 5000+ Businesses',
    },
    title: {
      content: 'Real Results from Real Customers',
      as: 'h2',
    },
    desc: {
      content:
        'See how businesses like yours are boosting engagement and sales with MailWavy.',
      isHtml: true,
    },
    buttons: [
      {
        href: '/testimonials',
        id: 'yi5it',
        variant: 'default',
        label: 'Read Stories',
      },
      {
        id: '8n95h',
        variant: 'outline',
        label: 'View More',
      },
    ],
    testimonials: [
      {
        id: 1,
        rating: 5,
        quote: {
          content:
            'MailWavy transformed our email strategy and boosted our sales by 40%.',
          isHtml: true,
        },
        name: {
          content: 'Sarah Chen',
        },
        role: {
          content: 'Marketing Director',
        },
        avatar: {
          id: 1,
          src: '/images/avatar-1.webp',
          alt: 'avatar-1',
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
        rating: 4,
        quote: {
          content:
            'The automation features saved us hours each week and improved customer retention.',
          isHtml: true,
        },
        name: {
          content: 'Mike Thompson',
        },
        role: {
          content: 'Startup Founder',
        },
        avatar: {
          id: 1,
          src: '/images/avatar-2.webp',
          alt: 'avatar-2',
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
        rating: 5,
        quote: {
          content:
            'Easy to use and powerful. Our team loves the analytics and reporting tools.',
          isHtml: true,
        },
        name: {
          content: 'Emily Rodriguez',
        },
        role: {
          content: 'E-commerce Manager',
        },
        avatar: {
          id: 1,
          src: '/images/avatar-5.webp',
          alt: 'avatar-5',
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
        id: 857758,
        rating: 4,
        quote: {
          content:
            "We've never had such a smooth onboarding process with an email platform.",
          isHtml: true,
        },
        name: {
          content: 'David Kim',
        },
        role: {
          content: 'Digital Marketer',
        },
        avatar: {
          id: 1,
          src: '/images/avatar-13.webp',
          alt: 'avatar-13',
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
        id: 248733,
        rating: 5,
        quote: {
          content:
            'MailWavy helps us stay connected with our audience and grow our brand.',
          isHtml: true,
        },
        name: {
          content: 'Rachel Lee',
        },
        role: {
          content: 'Brand Manager',
        },
        avatar: {
          id: 1,
          src: '/images/avatar-10.webp',
          alt: 'avatar-10',
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
        rating: 4,
        quote: {
          content:
            'Security and compliance used to be our biggest bottleneck. This platform handles it all automatically, letting us focus on the models.',
          isHtml: true,
        },
        name: {
          content: 'James Harrison',
        },
        role: {
          content: 'Infrastructure Manager, CloudAI',
        },
        avatar: {
          id: 1,
          src: '/images/avatar-4.webp',
          alt: 'avatar-4',
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
    hideImage: false,
    hideName: false,
    hideRole: false,
    hideRating: false,
    hideQuote: false,
    hideTestimonials: false,
  },
} as Section);
</script>
<template>
  <SectionWrapper :section="section">
    <!-- Header: Title, Description & Badge -->
    <SectionHeader :section="section" />
    <div
      v-if="!section?.metadata?.hideTestimonials"
      class="mx-auto mt-12 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
    >
      <ItemWrapper
        :item="item"
        v-for="item in section.data.testimonials"
        :key="item.id"
        :class="cn('p-4', item.class)"
      >
        <div class="relative p-6">
          <div
            v-if="!section?.metadata?.hideRating"
            class="absolute right-6 mb-4 flex items-center gap-1"
          >
            <Star
              v-for="(_, starIdx) in 5"
              :key="`${item.id}-star-${starIdx}`"
              class="size-4"
              :class="starIdx < item.rating ? 'fill-current' : 'text-gray-400'"
            />
          </div>
          <svg
            v-if="!section?.metadata?.hideQuote"
            class="h-12 opacity-20 dark:opacity-30"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <ContentElement
            v-if="!section?.metadata?.hideQuote"
            v-bind="item.quote"
            :class="cn('mt-3 text-sm leading-7 opacity-80', item.quote.class)"
          />
        </div>
        <div class="mt-7 flex items-center gap-4 px-1">
          <ImageElement
            v-if="!section?.metadata?.hideImage"
            :class="cn('size-12 rounded-full object-cover', item.avatar.class)"
            v-bind="item.avatar"
          />
          <div class="flex flex-col">
            <ContentElement
              v-if="!section?.metadata?.hideName"
              v-bind="item.name"
              :class="cn('text-xl leading-none font-semibold', item.name.class)"
            />
            <ContentElement
              v-if="!section?.metadata?.hideRole"
              v-bind="item.role"
              :class="cn('mt-1 text-sm opacity-70', item.role.class)"
            />
          </div>
        </div>
      </ItemWrapper>
    </div>
  </SectionWrapper>
</template>
