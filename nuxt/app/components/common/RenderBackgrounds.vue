<script setup lang="ts">
import type { PropType } from 'vue';
import { computed } from 'vue';
import { cn } from '@/utils';
import type {
  Background,
  ImageBg,
  VideoBg,
  PatternBg,
  ColorSchemeBg,
} from '@/types';

const props = defineProps({
  backgrounds: {
    type: Object as PropType<Background[]>,
    required: true,
    default: () => [],
  },
  renderColorScheme: {
    type: Boolean,
    default: false,
  },
});

const bgs = computed(() => props.backgrounds || []);

const findBg = (key: string) =>
  Array.isArray(bgs.value) ? bgs.value.find((bg: any) => key in bg) : {};

const imageBg = computed(() => findBg('image') as ImageBg);
const videoBg = computed(() => findBg('video') as VideoBg);
const patternBg = computed(() => findBg('pattern') as PatternBg);
const colorScheme = computed(() => findBg('shade') as ColorSchemeBg);
</script>

<template>
  <!-- Background Color Scheme -->
  <div
    v-if="props.renderColorScheme"
    :class="
      cn(
        'absolute -inset-px z-0 overflow-hidden rounded-[inherit]',
        colorScheme?.class
      )
    "
  />

  <!-- Background Image -->
  <img
    :class="
      cn(
        'absolute inset-0 z-0 h-full w-full rounded-[inherit] object-cover',
        imageBg.image?.class
      )
    "
    v-if="imageBg?.image"
    :src="imageBg.image.src"
    :alt="imageBg.image.alt"
  />
  <div
    v-if="imageBg?.image?.src"
    :class="
      cn(
        'absolute top-0 left-0 h-full w-full bg-neutral-100 opacity-50 dark:bg-neutral-900',
        imageBg.image?.overlayClass
      )
    "
  ></div>

  <!-- Background Pattern -->
  <div
    :class="
      cn('absolute -inset-px z-0 rounded-[inherit]', patternBg?.pattern.class)
    "
    :style="patternBg?.pattern.style"
  />

  <!-- Background Video -->
  <video
    v-if="videoBg?.video"
    autoplay
    muted
    loop
    playsinline
    preload="auto"
    :class="
      cn(
        'absolute inset-0 z-0 h-full w-full rounded-[inherit] object-cover',
        videoBg.video.class
      )
    "
  >
    <source :src="videoBg.video.src" />
  </video>
  <div
    v-if="videoBg?.video?.overlayClass"
    :class="
      cn(
        'absolute top-0 left-0 h-full w-full bg-neutral-100 opacity-50 dark:bg-neutral-900',
        videoBg.video?.overlayClass
      )
    "
  ></div>
</template>
