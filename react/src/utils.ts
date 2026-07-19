import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  DEFAULT_ANIMATION,
  ANIMATION_PRESETS,
  SITE_ANIMATION,
} from './constants';
import { motion } from 'motion/react';

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
    whileInView,
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

/**
 * Resolves element animation configuration and returns the appropriate component
 * (either a base component/tag or a motion-wrapped animated component) along with
 * motion animation details.
 *
 * @param type - The preset category of the element ('card' | 'section' | 'button' | 'image' | 'heading' | 'text' | 'content')
 * @param animationProps - The specific animation configuration of the element
 * @param componentOrTag - The base React component or HTML string tag to use (e.g. 'div', 'section', 'img', Button)
 * @returns An object containing:
 *  - `Component`: The component/tag to render (e.g. standard or motion-wrapped)
 *  - `details`: The motion props to spread on the component (e.g. initial, whileInView, transition, viewport)
 *  - `enabled`: A boolean indicating if animations are enabled
 */
export function getEleAnimation(
  type:
    'card' | 'section' | 'button' | 'image' | 'heading' | 'text' | 'content',
  animationProps: any,
  componentOrTag?: any
) {
  let component = componentOrTag;
  let defaultAnimationPreset = {};

  // Map the animation type to the correct preset config from SITE_ANIMATION
  switch (type) {
    case 'card':
      component = component || 'div';
      defaultAnimationPreset = SITE_ANIMATION.card || {};
      break;
    case 'section':
      component = component || 'section';
      defaultAnimationPreset = SITE_ANIMATION.section || {};
      break;
    case 'button':
      defaultAnimationPreset = SITE_ANIMATION.button || {};
      break;
    case 'image':
      component = component || 'img';
      defaultAnimationPreset = SITE_ANIMATION.image || {};
      break;
    case 'heading':
      component = component || 'h1';
      defaultAnimationPreset = SITE_ANIMATION.heading || {};
      break;
    case 'text':
      component = component || 'p';
      defaultAnimationPreset = SITE_ANIMATION.text || {};
      break;
    case 'content': {
      component = component || 'div';
      // Handled separately: if the preset is numberCounter, animations via motion are disabled here
      if (animationProps?.preset === 'numberCounter') {
        return {
          Component: component,
          details: {},
          enabled: false,
        };
      }
      // If content tag is a heading element, default to heading animation preset, otherwise text preset
      const isHeading = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(
        component
      );
      defaultAnimationPreset = isHeading
        ? SITE_ANIMATION.heading || {}
        : SITE_ANIMATION.text || {};
      break;
    }
    default:
      throw new Error(`Unsupported element type: ${type}`);
  }

  // Merge the default animation configuration for this type with custom props
  const animate = {
    ...defaultAnimationPreset,
    ...animationProps,
  };

  const { enabled, details } = getAnimation(animate);

  // If animations are not enabled, return the base component and empty details
  if (!enabled) {
    return {
      Component: component,
      details: {},
      enabled: false,
    };
  }

  // Create a motion-wrapped component for string tags or custom components
  const MotionComponent = motion.create(component as any);

  return {
    Component: MotionComponent,
    details,
    enabled: true,
  };
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
