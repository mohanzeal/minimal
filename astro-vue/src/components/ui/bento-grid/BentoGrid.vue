<template>
  <div
    :class="
      cn(
        'mx-auto grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
  import type { HTMLAttributes } from "vue";
  import { cn } from "@/utils";

  interface Props {
    class?: HTMLAttributes["class"];
  }

  const props = defineProps<Props>();
</script>
