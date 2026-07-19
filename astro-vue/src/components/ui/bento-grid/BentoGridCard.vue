<template>
  <div
    :key="name"
    :class="
      cn(
        'group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-xl',
        // light styles
        'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        // dark styles
        'transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
        props.class,
      )
    "
  >
    <slot name="background" />

    <div class="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <component
        :is="icon"
        v-if="icon"
        class="size-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"
      />
      <div
        v-else
        class="size-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"
      />
      <div class="text-xl font-semibold text-white/90">
        {{ name }}
      </div>
      <p class="max-w-lg text-white/70">
        {{ description }}
      </p>
    </div>

    <div class="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      <a
        :href="href"
        class="pointer-events-auto inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white/90"
      > {{ cta }} → </a>
    </div>
    <div class="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
</template>

<script lang="ts" setup>
  import type { HTMLAttributes } from "vue";
  import { cn } from "@/utils";

  interface Props {
    cta: string;
    name: string;
    href: string;
    icon?: string;
    description: string;
    class?: HTMLAttributes["class"];
  }

  const props = defineProps<Props>();
</script>
