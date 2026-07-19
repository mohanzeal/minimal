// defaults
export const SITE_ANIMATION = { section: { enabled: true } } as Record<
  string,
  any
>;

export const DEFAULT_CLASSES = {
  button: { borderCls: 'rounded-md  ', shadowCls: 'shadow-sm' },
  img: { borderCls: 'rounded-md  ' },
  card: {
    borderCls: 'rounded-md border-0 border-2   dark:border-neutral-900',
    shadowCls: 'shadow-sm',
  },
};

export const SITE_BACKGROUNDS = [];

export const DEFAULT_THEME = 'dark';
export const DEFAULT_DIR = 'ltr';
export const DEFAULT_LANG = 'en';
export const DEFAULT_PLACEHOLDER_IMG = '/images/p.svg';
export const DEFAULT_ANIMATION = {
  enabled: false,
  preset: 'slide',
  offset: 20,
  direction: 'up',
  duration: 0.4,
  delay: 0,
  ease: 'linear',
  opacityStart: 0,
  scale: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
};
export const ANIMATION_PRESETS = {
  // EXISTING (kept as-is)
  slide: {
    enabled: true,
    offset: 40,
    direction: 'up',
    duration: 0.4,
    delay: 0,
    ease: 'linear',
    opacityStart: 1,
    blur: 0,
  },

  zoom: {
    enabled: true,
    offset: 0,
    direction: 'none',
    duration: 0.45,
    delay: 0,
    ease: 'linear',
    scale: 0.85,
    opacityStart: 0,
    blur: 0,
  },

  fade: {
    enabled: true,
    offset: 0,
    direction: 'none',
    duration: 0.4,
    delay: 0,
    ease: 'linear',
    opacityStart: 0,
    blur: 20,
  },

  // -----------------------------
  // NEW HIGH-QUALITY PRESETS
  // -----------------------------

  slideFade: {
    enabled: true,
    offset: 30,
    direction: 'up',
    duration: 0.45,
    delay: 0,
    ease: 'linear',
    opacityStart: 0,
    blur: 0,
  },

  slideScale: {
    enabled: true,
    offset: 30,
    direction: 'up',
    duration: 0.45,
    delay: 0,
    ease: 'linear',
    scale: 0.92,
    opacityStart: 0,
  },

  bounce: {
    enabled: true,
    offset: 50,
    direction: 'up',
    duration: 0.6,
    delay: 0,
    ease: 'linear', // spring-like
    opacityStart: 0,
  },

  pop: {
    enabled: true,
    offset: 0,
    direction: 'none',
    duration: 0.35,
    delay: 0,
    ease: 'linear',
    scale: 0.7,
    opacityStart: 0,
  },

  swing: {
    enabled: true,
    offset: 0,
    direction: 'none',
    duration: 0.6,
    delay: 0,
    ease: 'linear',
    rotate: -10,
    opacityStart: 0,
  },

  flipX: {
    enabled: true,
    offset: 0,
    direction: 'none',
    duration: 0.5,
    delay: 0,
    ease: 'linear',
    rotateX: -90,
    opacityStart: 0,
  },

  flipY: {
    enabled: true,
    offset: 0,
    direction: 'none',
    duration: 0.5,
    delay: 0,
    ease: 'linear',
    rotateY: -90,
    opacityStart: 0,
  },

  rotateScale: {
    enabled: true,
    offset: 0,
    direction: 'none',
    duration: 0.5,
    delay: 0,
    ease: 'linear',
    rotate: -15,
    scale: 0.8,
    opacityStart: 0,
  },

  blurFade: {
    enabled: true,
    offset: 0,
    direction: 'none',
    duration: 0.5,
    delay: 0,
    ease: 'linear',
    blur: 40,
    opacityStart: 0,
  },

  expand: {
    enabled: true,
    offset: 0,
    direction: 'none',
    duration: 0.45,
    delay: 0,
    ease: 'linear',
    scale: 0.6,
    opacityStart: 0,
  },

  collapseIn: {
    enabled: true,
    offset: 0,
    direction: 'none',
    duration: 0.4,
    delay: 0,
    ease: 'linear',
    scaleY: 0.6,
    opacityStart: 0,
  },

  slideLeft: {
    enabled: true,
    offset: 40,
    direction: 'left',
    duration: 0.4,
    delay: 0,
    ease: 'linear',
    opacityStart: 0,
  },

  slideRight: {
    enabled: true,
    offset: 40,
    direction: 'right',
    duration: 0.4,
    delay: 0,
    ease: 'linear',
    opacityStart: 0,
  },

  reveal: {
    enabled: true,
    offset: 0,
    direction: 'none',
    duration: 0.6,
    delay: 0,
    ease: 'linear',
    clipPath: 'inset(0 100% 0 0)', // left-to-right reveal
    opacityStart: 1,
  },

  maskUp: {
    enabled: true,
    offset: 0,
    direction: 'none',
    duration: 0.6,
    delay: 0,
    ease: 'linear',
    clipPath: 'inset(100% 0 0 0)',
    opacityStart: 1,
  },

  // MICRO INTERACTION STYLE (for hover/active reuse)
  subtleLift: {
    enabled: true,
    offset: 10,
    direction: 'up',
    duration: 0.25,
    delay: 0,
    ease: 'linear',
    scale: 1.02,
  },

  // custom handled animations
  numberCounter: {
    enabled: true,
  },

  // UTILITY
  none: {
    enabled: false,
  },
};
