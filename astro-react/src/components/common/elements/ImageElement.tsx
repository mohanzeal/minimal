import { useMemo } from 'react';
import type { ImageEle } from '../../../types/section.types';
import { cn, getEleAnimation } from '../../../utils';
import { DEFAULT_CLASSES } from '../../../constants';
import RenderBackgrounds from '../RenderBackgrounds';

export default function ImageElement(props: ImageEle) {
  const { className, ...rest } = props;

  // Compute image element CSS classes
  const classes = cn(
    Object.values(DEFAULT_CLASSES?.img || {}).join(' '),
    className
  );

  // Resolve component type and animation details
  const { Component, details: animationDetails } = useMemo(() => {
    return getEleAnimation('image', props.animation, 'img');
  }, [props.animation]);

  const backgrounds = props.backgrounds ?? [];

  // Render image component (standard img or motion.img)
  return (
    <>
      {/* image backgrounds */}
      <Component
        {...animationDetails}
        {...rest}
        className={classes}
        alt={props.alt ?? 'image'}
        loading="lazy"
      />

      {/* main image backgrounds */}
      {backgrounds.length > 0 && (
        <div className={cn('absolute inset-0 -z-1', classes)}>
          <RenderBackgrounds
            backgrounds={backgrounds}
            renderColorScheme={true}
          />
        </div>
      )}
    </>
  );
}
