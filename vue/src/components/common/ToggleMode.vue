<script setup lang="ts">
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Icon from './elements/Icon.vue';
import { useColorMode } from '@vueuse/core';

const { system, store } = useColorMode();
</script>

<template>
  <div>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon-sm" variant="ghost" aria-label="Select theme">
          <Icon
            name="Sun"
            class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
          />
          <Icon
            name="Moon"
            class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
          />
          <span class="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" class="z-[1001] min-w-32">
        <DropdownMenuItem @click="store = 'light'">
          <Icon name="Sun" class="size-4 opacity-60" aria-hidden="true" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem @click="store = 'dark'">
          <Icon name="Moon" class="size-4 opacity-60" aria-hidden="true" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem @click="store = 'auto'">
          <Icon name="Monitor" class="size-4 opacity-60" aria-hidden="true" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
