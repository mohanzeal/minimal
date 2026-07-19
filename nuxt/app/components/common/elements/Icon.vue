<script setup lang="ts">
import { toKebabCase } from '@/utils';
import { computed, defineAsyncComponent, type Component } from 'vue';

interface Props {
  name: string | Component;
  size?: number | string;
  color?: string;
}

const props = defineProps<Props>();

// 1. Load icons in icons dir
const modules = import.meta.glob('@/components/ui/icons/*.vue');

// 2. Build a stable registry: iconName → loader
const iconRegistry = Object.fromEntries(
  Object.entries(modules).map(([path, loader]) => {
    const file = path.split('/').pop()!; // ArrowLeft.vue
    const name = file.replace('.vue', ''); // ArrowLeft
    return [toKebabCase(name), loader]; // arrow-left → loader
  })
);

// 3. Resolve component
const IconComponent = computed(() => {
  if (typeof props.name !== 'string') {
    return props.name;
  }

  const key = toKebabCase(props.name);
  const loader = iconRegistry[key];

  if (!loader) {
    console.warn(`[Icon] "${props.name}" not found`);
    return null;
  }

  return defineAsyncComponent(loader as any);
});

// 4. Compute bound properties/attributes
const iconProps = computed(() => {
  if (typeof props.name !== 'string') {
    return {
      size: props.size,
      color: props.color,
    };
  }

  return {
    width: props.size,
    height: props.size,
    fill: props.color || 'none',
  };
});
</script>

<template>
  <component :is="IconComponent" v-if="IconComponent" v-bind="iconProps" />
</template>
