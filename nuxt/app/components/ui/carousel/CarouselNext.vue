<script setup lang="ts">
  import { ArrowRight } from "lucide-vue-next";
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

  const { canScrollNext, orientation, scrollNext } = useCarousel();
</script>

<template>
  <Button
    data-slot="carousel-next"
    :disabled="!canScrollNext"
    :class="cn('absolute size-8 rounded-full', orientation === 'horizontal' ? '-right-12 top-1/2 -translate-y-1/2' : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90', props.class)"
    :variant="variant"
    :size="size"
    @click="scrollNext"
  >
    <slot>
      <ArrowRight />
      <span class="sr-only">Next Slide</span>
    </slot>
  </Button>
</template>
