<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    size?: number | string;
    color?: string;
}>();

const computedSize = computed(() => {
    return Number(props.size) || 20;
});
</script>
<template>
    <svg :width="computedSize" :height="computedSize" :fill="props.color || 'currentColor'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun">
        <rect width="20" height="14" x="2" y="3" rx="2" />
  <line x1="8" x2="16" y1="21" y2="21" />
  <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
</template>