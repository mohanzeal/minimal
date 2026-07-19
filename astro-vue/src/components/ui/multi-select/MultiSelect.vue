<script setup lang="ts">
import { computed, ref } from 'vue'
import { Check, ChevronsUpDown, X } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/utils'

export interface Option {
  label: string
  value: string | number
}

const props = defineProps<{
  options: Option[]
  placeholder?: string
  modelValue: string[]
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', val: string[]): void
}>()

const open = ref(false)

const onToggle = (val: string) => {
  const current = [...props.modelValue]
  if (current.includes(val)) {
    emits(
      'update:modelValue',
      current.filter((item) => item !== val)
    )
  } else {
    emits('update:modelValue', [...current, val])
  }
}

const removeVal = (val: string) => {
  emits(
    'update:modelValue',
    props.modelValue.filter((item) => item !== val)
  )
}
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="w-full justify-between h-auto min-h-10 py-1 px-3 font-normal"
      >
        <div class="flex flex-wrap gap-1 items-center max-w-[90%] w-full">
          <template v-if="modelValue?.length > 0">
            <Badge
              v-for="val in modelValue"
              :key="val"
              variant="secondary"
              class="mr-1 py-0 px-2 flex items-center gap-1 font-normal"
            >
              {{ props.options.find(o => o.value === val)?.label || val }}
              <div
                class="ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-muted cursor-pointer"
                @click.stop="removeVal(val)"
              >
                <X class="h-3 w-3 text-muted-foreground hover:text-foreground" />
              </div>
            </Badge>
          </template>
          <span v-else class="text-muted-foreground font-normal">
            {{ placeholder || 'Select items...' }}
          </span>
        </div>
        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-[full] p-0" align="start">
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandEmpty>No item found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="option in options"
              :key="option.value"
              :value="option.label"
              @select="onToggle(option.value as string)"
            >
              <div
                :class="cn(
                  'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                  modelValue.includes(option.value as string)
                    ? 'bg-primary text-primary-foreground'
                    : 'opacity-50 [&_svg]:invisible'
                )"
              >
                <Check class="h-4 w-4" />
              </div>
              <span>{{ option.label }}</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
