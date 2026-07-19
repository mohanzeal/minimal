import { useMemo } from 'react';
import { z } from 'zod';
import type { FormField, FormFieldValidation } from '../types';

export function useDynamicForm(formFields: FormField[]) {
  // Build a Zod rule for a single field
  const buildFieldSchema = (field: FormField) => {
    let rule = z.string(); // default type

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

  /**
   * Zod schema (memoized)
   */
  const formSchema = useMemo(() => {
    const shape: Record<string, z.ZodTypeAny> = {};

    (formFields || []).forEach((field) => {
      const key = (field.name || field.id || field.label) as string;
      shape[key] = buildFieldSchema(field);
    });

    return z.object(shape);
  }, [formFields]);

  /**
   * Initial values (memoized)
   */
  const initialValues = useMemo(() => {
    const values: Record<string, any> = {};

    (formFields || []).forEach((field) => {
      const key = (field.name || field.label || field.id) as string;
      values[key] = field.value ?? '';
    });

    return values;
  }, [formFields]);

  return {
    formSchema,
    initialValues,
  };
}
