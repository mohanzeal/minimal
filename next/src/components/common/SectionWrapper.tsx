import { cn, getEleAnimation } from '../../utils';
import React, { useMemo } from 'react';
import RenderBackgrounds from './RenderBackgrounds';
import { Section } from '../../types';

type Props = {
  section: Section;
  className?: string;
  children?: React.ReactNode;
};

export const SectionWrapper = ({ section, className, children }: Props) => {
  // Determine color scheme based on backgrounds
  const colorScheme = useMemo(() => {
    return Array.isArray(section.backgrounds)
      ? section.backgrounds.find((bg: any) => 'shade' in bg)
      : {};
  }, [section.backgrounds]);

  // Resolve component type and animation details
  const { Component, details } = useMemo(() => {
    return getEleAnimation('section', section?.animation, 'section');
  }, [section?.animation]);

  // Compute CSS classes
  const classes = cn(
    'max-w-screen relative',
    className,
    colorScheme?.className
  );

  // Render section component (standard section or motion.section)
  return (
    <Component
      {...details}
      data-section={section.id}
      id={section.id}
      className={classes}
    >
      {/* Render section backgrounds */}
      <RenderBackgrounds backgrounds={section.backgrounds || []} />

      {/* Section Contents */}
      <div className={cn('relative', section.className)}>{children}</div>
    </Component>
  );
};

export default SectionWrapper;
