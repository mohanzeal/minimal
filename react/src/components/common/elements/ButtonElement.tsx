import { useMemo } from 'react';
import { Button } from '../../ui/button';
import { cn, getEleAnimation } from '../../../utils';
import Icon from './Icon';
import type { ButtonEle } from '../../../types';
import { DEFAULT_CLASSES } from '../../../constants';

type Props = ButtonEle & { className?: string };

export default function ButtonElement(props: Props) {
  const {
    leftIcon = { name: '' },
    rightIcon = { name: '' },
    label,
    className,
    href,
    children,
    variant = null,
    ...rest
  } = props;

  // Compute button element CSS classes
  const classes = cn(
    'font-inherit cursor-pointer',
    Object.values(DEFAULT_CLASSES?.button || {}).join(' '),
    className,
    ['outline', 'link'].includes(variant as string) &&
      'text-foreground dark:text-inherit', // fix button outline has no text color in button/index
    variant === 'none' &&
      'rounded-none border-0 shadow-none shadow-transparent dark:shadow-transparent'
  );

  // Resolve component type and animation details
  const { Component, details: animationDetails } = useMemo(() => {
    return getEleAnimation('button', props.animation, Button);
  }, [props.animation]);

  // Render button component (standard button or motion.create(Button))
  return (
    <Component
      {...animationDetails}
      {...rest}
      {...(href ? { href } : {})}
      variant={variant as any}
      as={href ? 'a' : 'button'}
      className={classes}
    >
      {leftIcon?.name && <Icon {...leftIcon} />}
      {children || label}
      {rightIcon?.name && <Icon {...rightIcon} />}
    </Component>
  );
}
