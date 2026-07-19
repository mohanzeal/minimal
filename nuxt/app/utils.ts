import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  DEFAULT_ANIMATION,
  ANIMATION_PRESETS,
  SITE_ANIMATION,
} from './constants';
import { motion } from 'motion-v';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toKebabCase = (string: string) =>
  string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

export function getAnimation(eleAnimation: any) {
  const presetName = eleAnimation?.preset as keyof typeof ANIMATION_PRESETS;
  const preset = presetName ? ANIMATION_PRESETS[presetName] : DEFAULT_ANIMATION;

  const animation = {
    ...preset,
    ...eleAnimation,
  };

  if (!animation.enabled) {
    return { details: {}, enabled: false } as any;
  }

  const offset = Number(animation.offset) || 0;

  //
  // INITIAL STATE
  //
  const initial: any = {
    opacity: animation.opacityStart ?? 0,
    // filter: animation.blur ? `blur(${animation.blur}px)` : "blur(5px)",
    x: 0,
    y: 0,
    scale: animation.scale ?? 1,
    rotate: animation.rotate ?? 0,
    rotateX: animation.rotateX ?? 0,
    rotateY: animation.rotateY ?? 0,
  };

  switch (animation.direction) {
    case 'left':
      initial.x = -offset;
      break;
    case 'right':
      initial.x = offset;
      break;
    case 'up':
      initial.y = offset;
      break;
    case 'down':
      initial.y = -offset;
      break;
    case 'up-left':
      initial.x = -offset;
      initial.y = -offset;
      break;
    case 'up-right':
      initial.x = offset;
      initial.y = -offset;
      break;
    case 'down-left':
      initial.x = -offset;
      initial.y = offset;
      break;
    case 'down-right':
      initial.x = offset;
      initial.y = offset;
      break;
  }

  //
  // FINAL STATE (whileInView)
  //
  const whileInView: any = {
    opacity: 1,
    // filter: "blur(0px)",
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
  };

  //
  // TRANSITION
  //
  const transition = {
    delay: Number(animation.delay) || 0,
    duration: Number(animation.duration) || 0.4,
    ease: animation.ease || 'easeInOut',
  };

  //
  // FINAL STRUCTURE
  //
  const animationDetails = {
    initial,
    'while-in-view': whileInView,
    transition,
    viewport: {
      once: animation.once ?? false,
      margin: '0px 0px -80px 0px',
    },
  };

  return {
    details: animationDetails,
    enabled: animation.enabled,
  };
}

export function getEleAnimation(
  type: 'section' | 'button' | 'image' | 'content',
  animationProps: any,
  componentOrTag?: any
) {
  switch (type) {
    case 'section': {
      const component = componentOrTag || 'section';

      const animate = {
        ...SITE_ANIMATION.section,
        ...animationProps,
      };
      const { enabled, details } = getAnimation(animate);
      if (!enabled) {
        return {
          component,
          details: {},
        };
      }

      return {
        component: motion.create(component, { forwardMotionProps: true }),
        details,
      };
    }

    case 'button': {
      const component = componentOrTag;

      const animate = {
        ...SITE_ANIMATION.button,
        ...animationProps,
      };
      const { enabled, details } = getAnimation(animate);
      if (!enabled) {
        return {
          component,
          details: {},
        };
      }

      return {
        component: motion.create(component, { forwardMotionProps: true }),
        details,
      };
    }

    case 'image': {
      const component = componentOrTag || 'img';

      const animate = {
        ...SITE_ANIMATION.image,
        ...animationProps,
      };
      const { enabled, details } = getAnimation(animate);
      if (!enabled) {
        return {
          component,
          details: {},
        };
      }

      return {
        component: motion.create(component, { forwardMotionProps: true }),
        details,
      };
    }

    case 'content': {
      const component = componentOrTag || 'div';

      if (animationProps?.preset === 'numberCounter') {
        return {
          component,
          details: {},
        };
      }

      const animate = {
        ...SITE_ANIMATION.image,
        ...animationProps,
      };
      const { enabled, details } = getAnimation(animate);
      if (!enabled) {
        return {
          component,
          details: {},
        };
      }

      return {
        component: motion.create(component, { forwardMotionProps: true }),
        details,
      };
    }

    default:
      throw new Error(`Unsupported element type: ${type}`);
  }
}

export const getSiteBackgrounds = () => [];

export const isVideoUrl = (url = '') => {
  if (!url) return false;

  const indexOfTheAssetType = url.split('.').length - 1; // because the extension will always be at the end
  const assetType = url?.split('.')?.[indexOfTheAssetType]?.toUpperCase();
  const isAssetVideoType = [
    'WEBM',
    'MPG',
    'MPEG',
    'MPE',
    'MP4',
    'M4P',
    'M4V',
    'AVI',
    'WMV',
    'MOV',
  ].includes(assetType as string);
  return isAssetVideoType;
};
