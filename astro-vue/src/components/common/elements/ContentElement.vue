<script setup lang="ts">
import type { ContentEle } from '@/types/section.types';
import { getEleAnimation } from '@/utils';
import { computed, useAttrs, ref, onMounted, nextTick, watch } from 'vue';
import { useNumberCounterAnimation } from '@/composables/useNumberCounterAnimation';

const props = defineProps<ContentEle>();
const attrs = useAttrs();

const { content, isHtml, as = 'div', ...restProps } = props;
const mergedAttrs = { ...attrs, ...restProps };
const contentEl = ref<any>(null);

/**
 * Animation for content element
 * as: h1,h2,h3,h4,h5,h6, or div
 *
 * returns {
 *   component: as or motion.create(as)
 *   details: animation props
 * }
 */
const animation = computed(() =>
  getEleAnimation('content', restProps.animation, as)
);

// For Number animation only (safe to remove below code if number animation not required)
const {
  isInView,
  startCountAnimation,
  stopCountAnimation,
  parseAndFormat,
  formatValue,
} = useNumberCounterAnimation(
  () => content as string,
  () => !!isHtml,
  () => restProps.animation?.preset,
  contentEl
);
// For Number animation only (safe to remove if animation not required)
onMounted(async () => {
  await nextTick();
  const el = contentEl.value?.$el || contentEl.value;
  if (!el) return;

  if (restProps.animation?.preset === 'numberCounter') {
    const parsed = parseAndFormat(content as string);
    if (stopCountAnimation) stopCountAnimation();

    if (parsed.isValid) {
      const initialText = formatValue(0, parsed);
      if (isHtml) {
        el.innerHTML = initialText;
      } else {
        el.innerText = initialText;
      }
    } else {
      if (isHtml) {
        el.innerHTML = content as string;
      } else {
        el.innerText = content as string;
      }
    }

    if (restProps.animation?.preset === 'numberCounter' && isInView.value) {
      startCountAnimation();
    }
  } else {
    if (isHtml) {
      el.innerHTML = content as string;
    } else {
      el.innerText = content as string;
    }
  }
});
// For Number animation only (safe to remove if animation not required)
watch(
  () => content,
  async () => {
    await nextTick();
    const el = contentEl.value?.$el || contentEl.value;
    if (!el) return;

    if (stopCountAnimation) stopCountAnimation();

    el.innerHTML = content as string;

    if (restProps.animation?.preset === 'numberCounter' && isInView.value) {
      startCountAnimation();
    }
  },
  { deep: true }
);
</script>

<template>
  <component
    v-if="isHtml"
    ref="contentEl"
    :is="animation.component"
    v-bind="{ ...mergedAttrs, ...animation.details }"
  >
    <!-- XSS Prevention: v-html renders raw HTML. 
     Sanitize any user-generated or external content before rendering. -->
    <span v-html="content"></span>
  </component>

  <!-- Render plain content -->
  <component
    v-else
    ref="contentEl"
    :is="animation.component"
    v-bind="{ ...mergedAttrs, ...animation.details }"
  >
    {{ content }}
  </component>
</template>
