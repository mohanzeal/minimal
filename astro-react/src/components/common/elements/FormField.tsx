import { useId, ComponentType } from 'react';
import { Controller, Control } from 'react-hook-form';
import type { FormField } from '../../../types/section.types';
import {
  Field,
  FieldError,
  FieldContent,
  FieldTitle,
  FieldDescription,
} from '../../../components/ui/field';
import { Label } from '../../../components/ui/label';
import { ErrorBoundary } from 'react-error-boundary';
import { Input } from '../../../components/ui/input';
import { Textarea } from '../../../components/ui/textarea';
import { Checkbox } from '../../../components/ui/checkbox';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '../../../components/ui/select';
import { RadioGroup, RadioGroupItem } from '../../../components/ui/radio-group';
import { ErrorHandler } from '../ErrorBoundary';

type FormFieldProps = FormField & {
  control?: Control<any>;
};

export default function FormFieldRenderer(props: FormFieldProps) {
  const id = useId();

  const getComponent = (): ComponentType<any> | null => {
    switch (props.type) {
      case 'text':
      case 'password':
      case 'email':
      case 'number':
      case 'color':
      case 'range':
      case 'file':
        return Input;

      case 'textarea':
        return Textarea;

      case 'checkbox':
        return Checkbox;

      case 'select':
        return Select;

      default:
        return null;
    }
  };

  const Component = getComponent();

  return (
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <Controller
        name={props.name}
        control={props.control}
        render={({ field, fieldState }) => {
          const hasError = !!fieldState.error;

          return (
            <Field data-invalid={hasError}>
              {/* Checkbox */}
              {props.type === 'checkbox' && (
                <div className="flex items-center gap-4">
                  <Checkbox
                    id={`checkbox-` + id}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-invalid={hasError}
                  />
                  <Label htmlFor={`checkbox-` + id}>{props.label}</Label>
                </div>
              )}

              {/* Label (non-checkbox) */}
              {props.type !== 'checkbox' && (
                <Label htmlFor={id} data-test-field={props['test-field']}>
                  {props.label}
                </Label>
              )}

              {/* Radio */}
              {props.type === 'radio' && (
                <RadioGroup
                  id={`radiogroup-` + id}
                  name={props.name}
                  value={field.value}
                  onValueChange={field.onChange}
                  aria-invalid={hasError}
                >
                  {props.options?.map((option) => (
                    <Label
                      key={option.value}
                      htmlFor={`form-radio-${option.value}`}
                    >
                      <Field orientation="horizontal" data-invalid={hasError}>
                        <FieldContent>
                          <FieldTitle>{option.label}</FieldTitle>
                          {option?.desc && (
                            <FieldDescription>{option.desc}</FieldDescription>
                          )}
                        </FieldContent>

                        <RadioGroupItem
                          id={`form-radio-${option.value}`}
                          value={option.value}
                          aria-invalid={hasError}
                        />
                      </Field>
                    </Label>
                  ))}
                </RadioGroup>
              )}

              {/* Select */}
              {props.type === 'select' && (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id={id}
                    className="w-full"
                    aria-invalid={hasError}
                  >
                    <SelectValue placeholder={props.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {props.options?.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value ?? 'empty'}
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              {/* DEFAULT INPUT */}
              {!['checkbox', 'select', 'radio'].includes(`${props.type}`) &&
                Component && (
                  <Component
                    className="placeholder:text-inherit/90"
                    {...field}
                    id={`input-` + id}
                    type={props.type}
                    placeholder={props.placeholder}
                    aria-invalid={hasError}
                  />
                )}

              {/* ERROR */}
              {fieldState.error && (
                <FieldError>{fieldState.error.message}</FieldError>
              )}
            </Field>
          );
        }}
      />
    </ErrorBoundary>
  );
}
