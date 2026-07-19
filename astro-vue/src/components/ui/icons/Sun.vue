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
    <svg :width="computedSize" :height="computedSize" :fill="props.color || 'currentColor'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
</template>