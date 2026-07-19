<script setup lang="ts">
  import { ArrowLeft } from "lucide-vue-next";
  import { cn } from "@/utils";
  import type { WithClassAsProps } from "./interface";
  import { useCarousel } from "./useCarousel";
  import { Button, type ButtonVariants } from "../button";

  const props = withDefaults(
    defineProps<
      {
        variant?: ButtonVariants["variant"];
        size?: ButtonVariants["size"];
      } & WithClassAsProps
    >(),
    {
      size: "icon",
      variant: "outline",
    },
  );

  const { canScrollPrev, orientation, scrollPrev } = useCarousel();
</script>

<template>
  <Button
    data-slot="carousel-previous"
    :disabled="!canScrollPrev"
    :class="cn('absolute size-8 rounded-full', orientation === 'horizontal' ? '-left-12 top-1/2 -translate-y-1/2' : '-top-12 left-1/2 -translate-x-1/2 rotate-90', props.class)"
    :variant="variant"
    :size="size"
    @click="scrollPrev"
  >
    <slot>
      <ArrowLeft />
      <span class="sr-only">Previous Slide</span>
    </slot>
  </Button>
</template>
