<script setup lang="ts">
import { ButtonElement, ContentElement } from '../common/elements';
import { cn } from '../../utils';
const { section, class: classList } = defineProps<{
  section: any;
  class?: string;
}>();
</script>

<template>
  <div
    v-if="
      !section.metadata.hideTitle ||
      !section.metadata.hideDesc ||
      !section.metadata.hideButtons
    "
    :class="
      cn([
        'mb-4 flex w-full flex-col',
        !section.metadata?.alignSectionHeaderLeft &&
          'jusitify-center items-center',
        section.metadata?.isSingleLine &&
          'flex-col items-start justify-between gap-4 md:flex-row',
        classList,
      ])
    "
  >
    <div
      :class="
        cn([
          'flex w-full flex-col',
          !section.metadata?.alignSectionHeaderLeft &&
            'items-center justify-center',
        ])
      "
    >
      <!-- Badge -->
      <div>
        <ButtonElement
          v-if="!section.metadata?.hideBadge"
          v-bind="section.data.badge"
          :class="cn('my-1 h-auto py-0.5', section.data.badge?.class)"
        />
      </div>
      <!-- Title -->
      <ContentElement
        v-if="!section.metadata?.hideTitle"
        v-bind="section.data.title"
        :as="section.data.title?.as ?? 'h2'"
        :class="
          cn(
            'mt-2.5 mb-2 max-w-5xl',
            !section.metadata?.alignSectionHeaderLeft && 'text-center',
            section.data.title?.class
          )
        "
      />
    </div>

    <div
      :class="
        cn([
          'my-2 flex w-full flex-col', // default center with title and desc in two lines
          !section.metadata?.alignSectionHeaderLeft &&
            'items-center justify-center',
        ])
      "
    >
      <!-- Desc -->
      <ContentElement
        v-if="!section.metadata?.hideDesc"
        v-bind="section.data.desc"
        :class="
          cn(
            'my-2 max-w-5xl opacity-80',
            !section.metadata?.alignSectionHeaderLeft && 'text-center',
            section.data.desc?.class
          )
        "
      />

      <!-- Buttons -->
      <div
        v-if="section.data.buttons && !section.metadata?.hideButtons"
        :class="[
          'my-4 flex gap-2',
          section.metadata?.isSingleLine && section.metadata?.hideDesc
            ? 'flex-row items-center justify-end'
            : 'justify-start',
        ]"
      >
        <ButtonElement
          v-for="(button, idx) in section.data.buttons"
          :key="button.id"
          v-bind="button"
        />
      </div>
    </div>
  </div>
</template>
