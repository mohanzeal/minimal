import React, { useMemo } from 'react';
import type { Page } from '../../types';
import { cn } from '../../utils';
import RenderBackgrounds from './RenderBackgrounds';
import { SITE_BACKGROUNDS } from '../../constants';
import { ColorSchemeBg } from '../../types';

interface PageWrapperProps {
  page: Page;
  children?: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ page, children }) => {
  // merge site + page backgrounds
  const bgs = useMemo(() => {
    return [...SITE_BACKGROUNDS, ...(page.backgrounds || [])];
  }, [page.backgrounds]);

  // find color scheme (bg with "shade" key)
  const colorScheme = useMemo(() => {
    return Array.isArray(bgs)
      ? (bgs.find((bg: any) => 'shade' in bg) as ColorSchemeBg)
      : ({} as ColorSchemeBg);
  }, [bgs]);

  return (
    <main
      data-page={page.id}
      id={page.id}
      className={cn(
        'relative mx-auto min-h-screen max-w-7xl min-w-min overflow-clip',
        colorScheme?.className
      )}
    >
      {/* Page Backgrounds */}
      {bgs?.length > 0 && <RenderBackgrounds backgrounds={bgs} />}

      {/* Page Sections Contents */}
      <div className={cn('relative', page.className)}>{children || ''}</div>
    </main>
  );
};

export default PageWrapper;
