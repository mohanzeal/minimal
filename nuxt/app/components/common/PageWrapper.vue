<script setup lang="ts">
import type { Page } from '../../types';
import { cn } from '../../utils';
import RenderBackgrounds from './RenderBackgrounds.vue';
import { SITE_BACKGROUNDS } from '../../constants';
import { computed } from 'vue';

const { page } = defineProps<{
  page: Page;
}>();

const bgs = computed(() => {
  return [...SITE_BACKGROUNDS, ...(page.backgrounds || [])];
});
const colorScheme = computed(() =>
  Array.isArray(bgs.value)
    ? bgs.value.find((bg: any) => 'shade' in bg)
    : ({} as any)
);
</script>

<template>
  <main
    :data-page="page.id"
    :id="page.id"
    :class="
      cn(
        'relative mx-auto min-h-screen max-w-7xl min-w-min overflow-clip',
        colorScheme?.class
      )
    "
  >
    <RenderBackgrounds v-if="bgs?.length > 0" :backgrounds="bgs || []" />

    <div :class="cn('relative', page.class)">
      <slot />
    </div>
  </main>
</template>
