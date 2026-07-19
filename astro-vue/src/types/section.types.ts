import type { Component } from 'vue';
import type { Background, ElementAnimation } from './site.types';

export type Icon = {
  name: string | Component;
  color?: string;
  size?: string;
  animation?: ElementAnimation;
};

export type ButtonEle = {
  label: string;
  id?: string | number;
  variant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'ghost'
    | 'outline'
    | 'secondary'
    | null
    | undefined
    | string;
  leftIcon?: Icon;
  rightIcon?: Icon;
  href?: string;
  target?: string;
  class?: string | string[];
  animation?: ElementAnimation;
};

export type LinkEle = ButtonEle;

export type ImageEle = {
  id?: string | number;
  src: string;
  alt?: string;
  class?: Record<string, string> | string;
  overlayClass?: Record<string, string>;
  animation?: ElementAnimation;
  backgrounds?: Background[];
};

export type ContentEle = {
  content: string;
  class?: Record<string, string> | string;
  isHtml?: boolean;
  as?: keyof HTMLElementTagNameMap;
  animation?: ElementAnimation;
};

export type VideoEle = {
  id?: any;
  src: string;
  poster?: string;
  class?: string | string[];
  overlayClass?: Record<string, string>;
  animation?: ElementAnimation;
};

export type FormActionButton = ButtonEle & { type: 'submit' | 'reset' };
export type Form = {
  id: string;
  action: string;
  method: string;
  fields: FormField[];
  actions: FormActionButton[];
  animation?: ElementAnimation;
};

export type FormFieldValidation = {
  type: string;
  value: string;
  errorMessage: string;
};

export type FormField = {
  id?: string | number;
  label?: string;
  name: string;
  value?: any;
  type?: string;
  desc?: string;
  placeholder?: string;
  options?: { label: string; value: any; desc?: string }[];
  validations?: FormFieldValidation[];
  class?: string;
  animation?: ElementAnimation;
  testField?: string;
};

export type Section = {
  id?: string | number;
  type?: string;
  class?: string | string[];
  containerClass?: string;
  backgrounds?: Background[];
  data: Record<string, any>;
  metadata?: Record<string, boolean>;
  animation?: ElementAnimation;
};
