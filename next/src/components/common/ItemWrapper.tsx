import React, { useMemo } from 'react';
import { cn, getEleAnimation } from '../../utils';
import type { Background, ColorSchemeBg, ElementAnimation } from '../../types';
import RenderBackgrounds from './RenderBackgrounds';
import { DEFAULT_CLASSES } from '../../constants';

type ItemRendererProps = {
  item: {
    id: string | number;
    className?: string | string[];
    backgrounds?: Background[];
    animation?: ElementAnimation;
  };
  className?: string;
  contentClass?: string;
  children?: React.ReactNode;
};

export function ItemWrapper({
  item,
  className,
  children,
  contentClass,
}: ItemRendererProps) {
  // Resolve backgrounds from item data
  const bgs = useMemo<Background[]>(() => {
    return item?.backgrounds ?? [];
  }, [item]);

  // Determine color scheme based on backgrounds
  const colorScheme = useMemo<ColorSchemeBg | undefined>(() => {
    return Array.isArray(bgs)
      ? (bgs.find((bg) => 'shade' in bg) as ColorSchemeBg | undefined)
      : undefined;
  }, [bgs]);

  // Compute CSS classes
  const classes = useMemo(() => {
    const defaultClassesStr = Object.values(DEFAULT_CLASSES?.card || {}).join(
      ' '
    );

    return cn(
      'relative',
      defaultClassesStr,
      colorScheme?.className,
      className,
      item.className // override
    );
  }, [colorScheme, className, item]);

  // Determine Component and animation details
  const { Component, details } = useMemo(() => {
    return getEleAnimation('card', item?.animation, 'div');
  }, [item?.animation]);

  // Render component (standard div or motion.div)
  return (
    <Component {...details} className={classes}>
      <RenderBackgrounds backgrounds={bgs} />

      <div className={cn('relative z-0', contentClass)}>{children}</div>
    </Component>
  );
}

export default ItemWrapper;
