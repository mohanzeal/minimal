<script setup lang="ts">
import '@/assets/css/main.css';
import { useRoute } from 'vue-router';
import { DEFAULT_LANG, DEFAULT_DIR } from '@/constants';
import type { Seo } from '@/types';

const route = useRoute();
const seo = route.meta.seo as Seo;

useHead({
  htmlAttrs: {
    dir: DEFAULT_DIR,
    lang: DEFAULT_LANG,
  },
  title: seo.title,
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: seo.description },
  ],
});
useColorMode();
</script>

<template>
  <slot></slot>
</template>
