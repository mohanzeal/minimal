<script setup lang="ts">
import { cn } from '@/utils';
import { computed } from 'vue';
import type { Background, ColorSchemeBg, ElementAnimation } from '@/types';
import RenderBackgrounds from './RenderBackgrounds.vue';
import { DEFAULT_CLASSES } from '../../constants';

type ItemRenderer = {
  item: {
    backgrounds: Background[];
    class?: string;
    id: string | number;
    animation: ElementAnimation;
  };
  class?: string;
  contentClass?: string;
};
const props = defineProps<ItemRenderer>();

const bgs = computed(() => props.item.backgrounds || []);

const colorScheme = computed<ColorSchemeBg>(() =>
  Array.isArray(bgs.value)
    ? (bgs.value.find((bg) => 'shade' in bg) as ColorSchemeBg)
    : ({} as ColorSchemeBg)
);

const classes = computed(() => {
  const defaultClassesStr = Object.values(DEFAULT_CLASSES?.card || {}).join(
    ' '
  );

  return cn(
    'relative',
    defaultClassesStr,
    colorScheme.value?.class,
    props.class,
    // override all classes with item class
    props.item.class
  );
});
</script>

<template>
  <div :class="classes">
    <RenderBackgrounds :backgrounds="bgs" />

    <div :class="cn('relative z-0', contentClass)">
      <slot />
    </div>
  </div>
</template>
