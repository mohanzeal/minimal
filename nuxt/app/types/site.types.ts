export type ElementAnimation = {
  enabled?: boolean;
  direction?: string;
  duration?: number;
  delay?: number;
  offset?: number;
  ease?: string;
  once?: boolean;
  preset?: string;
  rotate?: number;
  rotateX?: number;
  rotateY?: number;
  scale?: number;
};

export type ColorSchemeBg = {
  id: string | number;
  label?: string;
  class: string;
  shade: {
    light: any;
    dark: any;
  };
};

export type Img = {
  id?: string | number;
  src: string;
  alt?: string;
  class?: string;
  overlayClass?: string;
};

export type Video = {
  id?: string | number;
  src: string;
  poster?: string;
  class?: string;
  overlayClass?: string;
};
export type ImageBg = {
  id: string | number;
  class?: string;
  image: Img;
};

export type VideoBg = {
  id: string | number;
  class?: string;
  video: Video;
};

export type PatternBg = {
  id: string | number;
  pattern: any;
};

export type Background = ColorSchemeBg | ImageBg | VideoBg | PatternBg;
