<script setup lang="ts">
import { cn, getEleAnimation } from '@/utils';
import { computed } from 'vue';
import type { ColorSchemeBg } from '@/types';
import RenderBackgrounds from './RenderBackgrounds.vue';

const props = defineProps<{ section: any }>();

const colorScheme = computed<ColorSchemeBg>(() =>
  Array.isArray(props.section.backgrounds)
    ? (props.section.backgrounds.find(
        (bg: ColorSchemeBg) => 'shade' in bg
      ) as ColorSchemeBg)
    : ({} as ColorSchemeBg)
);

/**
 * Animations
 *
 * returns {
 *   component: section or motion.create(section)
 *   details: animation props
 * }
 */
const animation = computed(() =>
  getEleAnimation('section', props.section?.animation)
);
</script>

<template>
  <component
    :is="animation.component"
    v-bind="animation.details"
    :data-section="section.id"
    :id="section.id"
    :class="cn('relative max-w-screen', colorScheme?.class)"
  >
    <RenderBackgrounds :backgrounds="section?.backgrounds || []" />

    <div :class="cn('relative', section.class)">
      <slot />
    </div>
  </component>
</template>
