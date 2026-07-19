<script setup lang="ts">
import { cn } from '@/utils';
import { ref } from 'vue';
import SectionWrapper from '@/components/common/SectionWrapper.vue';
import SectionHeader from '@/components/common/SectionHeader.vue';
import type { Section } from '@/types/section.types';
import { ContentElement } from '@/components/common/elements';
import ItemWrapper from '@/components/common/ItemWrapper.vue';

const section = ref({
  id: '036kf',
  class: 'p-6 lg:p-8 mx-auto',
  data: {
    badge: {
      rightIcon: {
        name: 'ArrowRight',
      },
      id: '1',
      variant: 'outline',
      label: 'v2 Released',
    },
    title: {
      content: 'Common Questions, Clear Answers',
      as: 'h1',
    },
    desc: {
      content:
        "We've answered the most frequently asked questions to help you get started with confidence.",
      isHtml: true,
    },
    buttons: [
      {
        id: '0svd8',
        variant: 'default',
        label: 'Button',
      },
    ],
    faqs: [
      {
        id: 0,
        question: {
          content: 'How do I get started?',
          as: 'h3',
        },
        answer: {
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu hendrerit libero, at dignissim turpis. Nullam ut facilisis metus.',
          isHtml: true,
        },
      },
      {
        id: 1,
        question: {
          content: 'What payment methods do you accept?',
          as: 'h3',
        },
        answer: {
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu hendrerit libero, at dignissim turpis. Nullam ut facilisis metus.',
          isHtml: true,
        },
      },
      {
        id: 2,
        question: {
          content: 'Can I cancel my subscription?',
          as: 'h3',
        },
        answer: {
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu hendrerit libero, at dignissim turpis. Nullam ut facilisis metus.',
          isHtml: true,
        },
      },
      {
        id: 3,
        question: {
          content: 'How do I contact support?',
          as: 'h3',
        },
        answer: {
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu hendrerit libero, at dignissim turpis. Nullam ut facilisis metus.',
          isHtml: true,
        },
      },
      {
        id: 4,
        question: {
          content: 'What is your refund policy?',
          as: 'h3',
        },
        answer: {
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu hendrerit libero, at dignissim turpis. Nullam ut facilisis metus.',
          isHtml: true,
        },
      },
    ],
  },
  metadata: {
    isSingleLine: false,
    alignSectionHeaderLeft: false,
    hideBadge: false,
    hideTitle: false,
    hideDesc: false,
    hideButtons: true,
    hideFaq: false,
  },
} as Section);
</script>
<template>
  <SectionWrapper :section="section">
    <!-- Header: Title, Description & Badge -->
    <SectionHeader :section="section" />
    <div
      v-if="!section?.metadata?.hideFaq"
      class="mx-auto mt-12 flex max-w-3xl flex-col gap-4 text-left"
    >
      <ItemWrapper
        :item="faq"
        v-for="faq in section.data.faqs"
        :key="faq.id"
        :class="cn('p-4 lg:p-8', faq.class)"
      >
        <ContentElement
          v-bind="faq.question"
          :class="cn('mb-4 !text-xl font-semibold', faq.question.class)"
          :as="faq.question.as ?? 'h3'"
        />
        <ContentElement
          v-bind="faq.answer"
          :class="cn('opacity-80', faq.answer.class)"
        />
      </ItemWrapper>
    </div>
  </SectionWrapper>
</template>
