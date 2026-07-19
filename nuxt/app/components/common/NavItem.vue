<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { LinkElement } from '../common/elements';
const props = defineProps<{
  itemIdx: number | string;
  item: any;
  section: any;
  level?: number;
  mode?: 'desktop' | 'mobile';
}>();
const level = computed(() => props.level ?? 0);
const sectionData = ref(props.section);
const mode = computed(() => props.mode || 'desktop');
</script>
<template>
  <!-- DESKTOP -->
  <NavigationMenuItem
    v-if="mode === 'desktop'"
    class="list-none px-1 py-2"
    :class="
      mode === 'desktop' && 'flex flex-col items-start justify-start gap-2'
    "
  >
    <template v-if="item.submenu?.length">
      <NavigationMenuTrigger
        class="focus:text-transparent-foreground bg-transparent text-inherit hover:bg-transparent hover:text-inherit focus:bg-transparent data-[state=close]:hover:bg-transparent data-[state=close]:focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-inherit data-[state=open]:hover:bg-transparent data-[state=open]:hover:text-inherit data-[state=open]:focus:bg-transparent"
      >
        <LinkElement v-bind="item" />
      </NavigationMenuTrigger>
      <NavigationMenuContent class="bg-muted flex flex-col gap-1 px-2 py-4">
        <div>
          <NavItem
            v-for="(child, idx) in item.submenu"
            :key="child.id"
            :itemIdx="idx"
            :item="child"
            :section="sectionData"
            :level="level + 1"
            mode="desktop"
          />
        </div>
      </NavigationMenuContent>
    </template>
    <LinkElement v-else v-bind="item" />
  </NavigationMenuItem>
  <!-- MOBILE -->
  <AccordionItem v-else :value="item.id" class="mx-4 border-b-0">
    <template v-if="item.submenu?.length">
      <AccordionTrigger class="flex items-center py-2 hover:no-underline">
        <LinkElement
          v-bind="item"
          class="flex-1 text-left"
          :class="
            item.variant == 'none'
              ? 'w-full justify-start px-0'
              : 'w-full justify-start'
          "
          @click.stop
        />
      </AccordionTrigger>
      <AccordionContent class="pb-2 pl-4">
        <div class="flex flex-col gap-2">
          <NavItem
            v-for="(child, idx) in item.submenu"
            :key="child.id"
            :itemIdx="idx"
            :item="child"
            :section="sectionData"
            :level="level + 1"
            mode="mobile"
          />
        </div>
      </AccordionContent>
    </template>
    <div v-else>
      <LinkElement
        v-bind="item"
        :class="
          item.variant == 'none'
            ? 'w-full justify-start px-0'
            : 'w-full justify-start'
        "
      />
    </div>
  </AccordionItem>
</template>
