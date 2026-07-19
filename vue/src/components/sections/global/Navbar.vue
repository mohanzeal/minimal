<script setup lang="ts">
import { AlignLeft } from 'lucide-vue-next';
import { cn } from '@/utils';
import { Button } from '@/components/ui/button';
import { ImageElement, ContentElement } from '@/components/common/elements';
import ToggleMode from '@/components/common/ToggleMode.vue';
import SectionWrapper from '@/components/common/SectionWrapper.vue';
import type { Section } from '@/types/section.types';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavigationMenu } from '@/components/ui/navigation-menu';
import { Accordion } from '@/components/ui/accordion';
import NavItem from '@/components/common/NavItem.vue';
import { ref } from 'vue';

const section = ref({
  id: 'navbar1_bqkex',
  class: 'p-6 lg:p-8 mx-auto',
  data: {
    siteName: {
      content: 'MailWavy',
    },
    siteLogo: {
      id: 1,
      src: '/images/bolt.svg',
    },
    menu: [
      {
        href: '/faq',
        id: '4',
        variant: 'none',
        label: 'Faqs',
      },
      {
        href: '/pricing',
        id: '73v95',
        variant: 'none',
        label: 'Pricing',
      },
      {
        href: '/#',
        id: 'hppgv',
        variant: 'default',
        label: 'Login',
      },
    ],
  },
  metadata: {
    useHeroBg: true,
    hideLogo: false,
    hideSiteName: false,
    hideMenu: false,
    hideThemeToggle: false,
  },
} as Section);

const container = ref<HTMLElement | null>(null);
</script>
<template>
  <SectionWrapper
    :section="section"
    :class="['z-5', section.metadata?.useHeroBg ? 'useHeroBg' : '']"
  >
    <div class="mx-auto" ref="container">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo Left -->
        <div class="z-20 flex items-center gap-2">
          <ImageElement
            v-if="!section.metadata?.hideLogo"
            v-bind="section.data.siteLogo"
            :class="
              cn(
                'h-8 w-auto rounded-none border-none shadow-none',
                section.data.siteLogo.class
              )
            "
          />
          <ContentElement
            v-if="!section.metadata?.hideSiteName"
            v-bind="section.data.siteName"
          />
        </div>
        <!-- Menu Center (Desktop) -->
        <div
          v-if="!section.metadata?.hideMenu"
          class="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex"
        >
          <NavigationMenu as-child>
            <div class="flex list-none items-center gap-1">
              <NavItem
                v-for="(item, idx) in section.data.menu"
                :key="item.id"
                :itemIdx="idx"
                :item="item"
                :section="section"
                mode="desktop"
              />
            </div>
          </NavigationMenu>
        </div>
        <!-- Buttons Right / Mobile Toggle -->
        <div class="z-20 flex items-center gap-2">
          <ToggleMode v-if="!section.metadata?.hideThemeToggle" />
          <!-- Mobile Trigger -->
          <Sheet v-if="!section.metadata?.hideMenu">
            <SheetTrigger as-child>
              <Button variant="ghost" size="icon" class="lg:hidden">
                <AlignLeft class="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent :to="container?.ownerDocument.body" side="right">
              <Accordion type="multiple" collapsible as-child>
                <div
                  class="mt-8 flex flex-1 flex-col items-start gap-4 overflow-y-auto px-4 pb-10"
                >
                  <NavItem
                    v-for="(item, idx) in section.data.menu"
                    :key="item.id"
                    :itemIdx="idx"
                    :item="item"
                    :section="section"
                    mode="mobile"
                  />
                </div>
              </Accordion>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
