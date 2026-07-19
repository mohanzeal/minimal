import React, { useMemo, Suspense } from 'react';
import type { SVGProps } from 'react';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: string | React.ComponentType<any>;
  size?: number | string;
  color?: string;
}

export default function Icon({
  name,
  size = 24,
  color = 'currentColor',
  ...props
}: IconProps) {
  const computedSize = typeof size === 'string' ? parseInt(size, 10) : size;

  const isComponent = typeof name !== 'string';

  const LazyIcon = useMemo(() => {
    if (isComponent) return null;
    return React.lazy(() =>
      import(`../../ui/icons/${name}.tsx`).catch(() => {
        console.warn(`[Icon] "${name}.tsx" not found`);
        return { default: () => null };
      })
    );
  }, [name, isComponent]);

  if (isComponent) {
    const Component = name as React.ComponentType<any>;
    return <Component {...props} size={computedSize} color={color} />;
  }

  const LazyIconComponent = LazyIcon!;

  return (
    <Suspense fallback={null}>
      <LazyIconComponent
        {...props}
        width={computedSize}
        height={computedSize}
        stroke={color}
        fill="none"
      />
    </Suspense>
  );
}
