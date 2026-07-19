import { computed } from 'vue';
import { z } from 'zod';
import { toTypedSchema } from '@vee-validate/zod';
import type { FormField, FormFieldValidation } from '@/types';

export function useDynamicForm(formFields: FormField[]) {
  // Generate Form Field schema
  const buildFieldSchema = (field: FormField) => {
    let rule = z.string(); // Default type is string — can extend to others

    field.validations?.forEach((validation: FormFieldValidation) => {
      const numericValue = Number(validation.value);

      switch (validation.type) {
        case 'required':
          rule = rule.min(1, validation.errorMessage);
          break;

        case 'min':
          rule = rule.refine(
            (val) => !isNaN(Number(val)) && Number(val) >= numericValue,
            validation.errorMessage
          );
          break;

        case 'max':
          rule = rule.refine(
            (val) => !isNaN(Number(val)) && Number(val) <= numericValue,
            validation.errorMessage
          );
          break;

        case 'minLength':
          rule = rule.min(numericValue, validation.errorMessage);
          break;

        case 'maxLength':
          rule = rule.max(numericValue, validation.errorMessage);
          break;

        case 'pattern':
          rule = rule.regex(
            new RegExp(validation.value),
            validation.errorMessage
          );
          break;
      }
    });

    return rule;
  };

  // Generate Zod Schema
  const formSchema = computed(() => {
    const schema: Record<string, any> = {};

    (formFields || []).forEach((field) => {
      const key = (field.name || field.id || field.label) as string;
      schema[key] = buildFieldSchema(field);
    });

    return toTypedSchema(z.object(schema));
  });

  // Generate initial form values
  const initialValues = computed(() => {
    const values: Record<string, any> = {};

    (formFields || []).forEach((field) => {
      const key = (field.name || field.label || field.id) as string;
      values[key] = field.value ?? '';
    });

    return values;
  });

  return {
    initialValues,
    formSchema,
  };
}
