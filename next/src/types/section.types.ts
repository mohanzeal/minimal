import { ComponentType } from 'react';
import type { ElementAnimation } from './site.types';

export type Icon = {
  name: string | ComponentType<any>;
  color?: string;
  size?: string;
  className?: string;
  animation?: ElementAnimation;
};

export type ButtonEle = {
  label?: string;
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
  className?: string;
  animation?: ElementAnimation;
  children?: React.ReactNode;
};

export type LinkEle = ButtonEle;

export type Img = {
  id?: string | number;
  src: string;
  alt?: string;
  className?: string;
  overlayClass?: string;
};

export type ImageEle = Img & {
  animation?: ElementAnimation;
  children?: React.ReactNode;
  backgrounds?: Background[];
};

export type ContentEle = {
  content: string | boolean | number;
  className?: string;
  isHtml?: boolean;
  as?: keyof HTMLElementTagNameMap;
  animation?: ElementAnimation;
  children?: React.ReactNode;
};

export type VideoEle = {
  src: any;
  poster?: string;
  className?: string;
  animation?: ElementAnimation;
  children?: React.ReactNode;
};

export type FormActionButton = ButtonEle & { type: 'submit' | 'reset' };
export type Form = {
  id: string;
  action: string;
  method: string;
  fields: FormField[];
  actions: FormActionButton[];
  animation?: ElementAnimation;
  children?: React.ReactNode;
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
  className?: string;
  animation?: ElementAnimation;
  children?: React.ReactNode;
  'test-field'?: string;
};

export type Section = {
  id?: string | number;
  name?: string;
  className?: string;
  itemClass?: string;
  animation?: ElementAnimation;
  backgrounds?: any[];
  children?: React.ReactNode;
  metadata?: Record<string, boolean>;
  data: Record<string, any>;
};

export type ColorSchemeBg = {
  id: string;
  className: any;
  shade: any;
};

export type Video = {
  id?: string | number;
  src: string;
  poster?: string;
  className?: string;
  overlayClass?: string;
};
export type ImageBg = {
  id: string;
  image: Img;
};

export type VideoBg = {
  id: string;
  video: Video;
};

export type PatternBg = {
  id: string;
  pattern: any;
};

export type Background = ColorSchemeBg | ImageBg | VideoBg | PatternBg;
