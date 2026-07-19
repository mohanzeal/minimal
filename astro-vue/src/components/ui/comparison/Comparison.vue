<script setup lang="ts">
import { provide, ref } from "vue"
import { cn } from "@/utils"
import {
  ImageComparisonContextKey,
  type ComparisonMode,
} from "./comparison-context"

interface Props {
  class?: string
  mode?: ComparisonMode
}

const props = withDefaults(defineProps<Props>(), {
  mode: "drag",
})

const emit = defineEmits<{
  dragStart: []
  dragEnd: []
}>()

const sliderPosition = ref(50)
const isDragging = ref(false)

provide(ImageComparisonContextKey, {
  sliderPosition,
  mode: props.mode,
})

function updatePosition(container: HTMLElement, clientX: number) {
  if (!isDragging.value && props.mode === "drag") return

  const rect = container.getBoundingClientRect()

  const x = clientX - rect.left

  const percentage = Math.min(
    Math.max((x / rect.width) * 100, 0),
    100,
  )

  sliderPosition.value = percentage
}

function handleMouseMove(event: MouseEvent) {
  updatePosition(event.currentTarget as HTMLElement, event.clientX)
}

function handleTouchMove(event: TouchEvent) {
  const touch = event.touches[0]

  if (!touch) return

  updatePosition(
    event.currentTarget as HTMLElement,
    touch.clientX,
  )
}

function handleDragStart() {
  if (props.mode === "drag") {
    isDragging.value = true
    emit("dragStart")
  }
}

function handleDragEnd() {
  if (props.mode === "drag") {
    isDragging.value = false
    emit("dragEnd")
  }
}
</script>

<template>
  <div
    :class="
      cn(
        'relative isolate w-full select-none overflow-hidden',
        props.class,
      )
    "
    aria-label="Comparison slider"
    role="slider"
    tabindex="0"
    :aria-valuemin="0"
    :aria-valuemax="100"
    :aria-valuenow="sliderPosition"
    @mousedown="handleDragStart"
    @mouseup="handleDragEnd"
    @mouseleave="handleDragEnd"
    @mousemove="handleMouseMove"
    @touchstart="handleDragStart"
    @touchend="handleDragEnd"
    @touchmove="handleTouchMove"
  >
    <slot />
  </div>
</template>