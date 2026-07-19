<script setup lang="ts">
import type { ImageEle } from '@/types/section.types';
import { computed } from 'vue';
import RenderBackgrounds from '../RenderBackgrounds.vue';
import { DEFAULT_CLASSES, DEFAULT_PLACEHOLDER_IMG } from '../../../constants';
import { cn, getEleAnimation } from '@/utils';

const { class: classList, ...restProps } = defineProps<ImageEle>();

/**
 * Alt tag Attribute
 */
const altTag = computed(() => (restProps.alt || 'image') as string);

/**
 * Class Attribute
 */
const classes = computed(() =>
  cn(
    Object.values(DEFAULT_CLASSES?.img || {}).join(' '), // base
    classList
  )
);

/**
 * Props
 */
const imageProps = computed(() => ({
  ...restProps,
  alt: altTag.value,
  src: restProps.src ?? DEFAULT_PLACEHOLDER_IMG,
}));

/**
 * Animation
 * returns {
 *   component: img or motion.create(img)
 *   details: animation props
 * }
 */
const animation = computed(() => getEleAnimation('image', restProps.animation));

const backgrounds = computed(() => restProps.backgrounds ?? []);
</script>

<template>
  <!-- main image -->
  <component
    :is="animation.component"
    v-bind="{ ...imageProps, ...animation.details }"
    :class="classes"
    loading="lazy"
  />
  <!-- image backgrounds -->
  <div
    v-if="backgrounds?.length > 0"
    :class="cn('absolute inset-0 -z-1', classes)"
  >
    <RenderBackgrounds :backgrounds="backgrounds" :render-color-scheme="true" />
  </div>
</template>
