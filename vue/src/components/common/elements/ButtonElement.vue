<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { Button } from '@/components/ui/button';
import { Icon } from '../elements';
import type { ButtonEle } from '@/types/section.types';
import { cn, getEleAnimation } from '@/utils';
import { DEFAULT_CLASSES } from '../../../constants';

defineOptions({ inheritAttrs: false });

/**
 * Props
 */
const props = withDefaults(defineProps<ButtonEle>(), {
  leftIcon: () => ({ name: '' }),
  rightIcon: () => ({ name: '' }),
});

const attrs = useAttrs();

/**
 * Class Attribute
 */
const classes = computed(() => {
  return cn(
    'font-inherit cursor-pointer',
    Object.values(DEFAULT_CLASSES?.button || {}).join(' '),
    attrs?.class as string,
    props.class,
    ['outline', 'link'].includes(props.variant as string) &&
      'text-foreground dark:text-inherit',
    props.variant === 'none' &&
      'rounded-none border-0 shadow-none shadow-transparent dark:shadow-transparent'
  );
});

/**
 * Animations
 * Button is Shadcn component here
 *
 * returns {
 *   component: Button or motion.create(Button)
 *   details: animation props
 * }
 */
const animation = computed(() =>
  getEleAnimation('button', props.animation, Button)
);
</script>

<template>
  <component
    :is="animation.component"
    :as="props.href ? 'a' : 'button'"
    :class="classes"
    v-bind="{ ...attrs, ...props, ...animation.details }"
  >
    <!-- Left Icon (renders only if name exists) -->
    <Icon
      v-if="props.leftIcon?.name"
      :name="props.leftIcon.name"
      :color="props.leftIcon.color"
      :size="props.leftIcon.size"
    />

    <!-- Default text slot -->
    <slot v-if="props.label">{{ props.label }}</slot>

    <!-- Right Icon (renders only if name exists) -->
    <Icon
      v-if="props.rightIcon?.name"
      :name="props.rightIcon.name"
      :color="props.rightIcon.color"
      :size="props.rightIcon.size"
    />
  </component>
</template>
