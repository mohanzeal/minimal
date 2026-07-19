<script setup lang="ts">
import { useHead } from '@unhead/vue';
import '@/style.css';
import { useColorMode } from '@vueuse/core';
import { DEFAULT_THEME, DEFAULT_DIR, DEFAULT_LANG } from '@/constants';

useColorMode({
  initialValue: DEFAULT_THEME,
  storageKey: 'vueuse-color-scheme',
});
useHead({
  htmlAttrs: {
    dir: DEFAULT_DIR,
    lang: DEFAULT_LANG,
  },
  title: 'Site',
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
});
</script>

<template>
  <slot></slot>
</template>
