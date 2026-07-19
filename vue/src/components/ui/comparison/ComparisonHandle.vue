<script setup lang="ts">
import { computed, inject } from "vue"
import { Motion } from "motion-v"
import { GripVertical } from "lucide-vue-next"
import { cn } from "@/utils"
import { ImageComparisonContextKey } from "./comparison-context"

interface Props {
  class?: string
}

const props = defineProps<Props>()

const context = inject(ImageComparisonContextKey)

if (!context) {
  throw new Error(
    "ComparisonHandle must be used within Comparison",
  )
}

const left = computed(
  () => `${context.sliderPosition.value}%`,
)
</script>

<template>
  <Motion
    as="div"
    aria-hidden="true"
    role="presentation"
    :class="
      cn(
        '-translate-x-1/2 absolute top-0 z-50 flex h-full w-10 items-center justify-center',
        context.mode === 'drag' &&
          'cursor-grab active:cursor-grabbing',
        props.class,
      )
    "
    :style="{ left }"
  >
    <slot>
      <div
        class="-translate-x-1/2 absolute left-1/2 h-full w-1 bg-background"
      />

      <div
        v-if="context.mode === 'drag'"
        class="z-50 flex items-center justify-center rounded-sm bg-background px-0.5 py-1"
      >
        <GripVertical
          class="h-4 w-4 select-none text-muted-foreground"
        />
      </div>
    </slot>
  </Motion>
</template>