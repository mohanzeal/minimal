<script setup lang="ts">
import { computed, inject } from "vue"
import { Motion } from "motion-v"
import { cn } from "@/utils"
import { ImageComparisonContextKey } from "./comparison-context"

interface Props {
  position: "left" | "right"
  class?: string
}

const props = defineProps<Props>()

const context = inject(ImageComparisonContextKey)

if (!context) {
  throw new Error(
    "ComparisonItem must be used within Comparison",
  )
}

const clipPath = computed(() => {
  const value = context.sliderPosition.value

  return props.position === "left"
    ? `inset(0 0 0 ${value}%)`
    : `inset(0 ${100 - value}% 0 0)`
})
</script>

<template>
  <Motion
    as="div"
    aria-hidden="true"
    role="img"
    :class="
      cn(
        'absolute inset-0 h-full w-full object-cover',
        props.class,
      )
    "
    :style="{ clipPath }"
  >
    <slot />
  </Motion>
</template>