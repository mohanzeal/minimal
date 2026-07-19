<script setup lang="ts">
import { useId, computed } from 'vue';
import type { FormField } from '@/types/section.types';
import { Field as VeeField } from 'vee-validate';
import { cn } from '@/utils';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from '@/components/ui/select';
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldDescription,
  FieldTitle,
  FieldError,
} from '@/components/ui/field';

const props = defineProps<FormField>();
const id = useId();

const formFieldComponent = computed(() => {
  switch (props.type) {
    case 'text': {
      return Input;
    }
    case 'email': {
      return Input;
    }
    case 'password': {
      return Input;
    }
    case 'checkbox': {
      return Checkbox;
    }
    case 'number': {
      return Input;
    }
    case 'textarea': {
      return Textarea;
    }
    case 'color': {
      return Input;
    }
    case 'range': {
      return Input;
    }
    case 'file': {
      return Input;
    }
    case 'select': {
      return Select;
    }

    default:
      break;
  }
});
</script>

<template>
  <VeeField v-slot="{ field, errors }" :name="props.name">
    <Field :data-invalid="!!errors.length">
      <!-- Label for Checkbox -->
      <div class="flex items-center gap-4" v-if="props.type === 'checkbox'">
        <Checkbox :id="id" v-bind="field" :aria-invalid="!!errors.length" />
        <Label :for="id">
          {{ props.label }}
        </Label>
      </div>
      <!-- Label for all other fields -->
      <FieldLabel v-else :for="id"> {{ props.label }} </FieldLabel>

      <!-- RADIO FIELD  -->
      <RadioGroup
        :id="id"
        v-if="props.type === 'radio'"
        :name="props.name"
        :model-value="field.value"
        :aria-invalid="!!errors.length"
        @update:model-value="field.onChange"
      >
        <FieldLabel
          v-for="option in props?.options || []"
          :key="option.value"
          :for="`form-vee-radiogroup-${option.value}`"
        >
          <Field orientation="horizontal" :data-invalid="!!errors.length">
            <FieldContent>
              <FieldTitle>{{ option.label }}</FieldTitle>
              <FieldDescription v-if="option?.desc">
                {{ option?.desc }}
              </FieldDescription>
            </FieldContent>
            <RadioGroupItem
              :id="`form-vee-radiogroup-${option.value}`"
              :value="option.value"
              :aria-invalid="!!errors.length"
            />
          </Field>
        </FieldLabel>
      </RadioGroup>

      <!-- SELECT FIELD -->
      <Select
        :id="id"
        :name="props.name"
        :type="props.type"
        v-model="field.value"
        @blur="field.onBlur"
        @update:model-value="field.onChange"
        v-if="props.type === 'select'"
      >
        <SelectTrigger :class="cn('w-full')" :aria-invalid="!!errors.length">
          <SelectValue :placeholder="props.placeholder" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem
            v-for="option in props.options"
            :value="option.value || 'empty'"
            >{{ option.label }}</SelectItem
          >
        </SelectContent>
      </Select>

      <!-- TEXT, EMAIL, PASSWORD, NUMBER, TEXTAREA, COLOR, RANGE, FILE, ETC FIELDS -->
      <component
        v-else-if="!['checkbox', 'select', 'radio'].includes(`${props.type}`)"
        :is="formFieldComponent"
        class="placeholder:text-inherit/90"
        :id="id"
        v-bind="field"
        :placeholder="props.placeholder"
        :type="props.type"
        :aria-invalid="!!errors.length"
      />

      <!-- ERROR MESSAGE -->
      <FieldError v-if="errors.length">
        <div v-for="error in errors" :key="error">
          {{ error }}
        </div>
      </FieldError>
    </Field>
  </VeeField>
</template>
