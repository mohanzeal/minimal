import * as React from 'react';
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '../ui/navigation-menu';
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../ui/accordion';
import LinkElement from './elements/LinkElement';
import { Section } from '../../types';
import { cn } from '../../utils';

type Mode = 'desktop' | 'mobile';

type NavItemProps = {
  itemIdx: number | string;
  item: any;
  section: Section;
  level?: number;
  mode?: Mode;
};

export function NavItem({
  itemIdx,
  item,
  section,
  level = 0,
  mode = 'desktop',
}: NavItemProps) {
  const hasSubmenu = Array.isArray(item?.submenu) && item.submenu.length > 0;

  // Desktop layout
  if (mode === 'desktop') {
    return (
      <NavigationMenuItem
        key={itemIdx}
        className={
          'flex list-none flex-col items-start justify-start gap-2 px-1 py-2'
        }
      >
        {/* Submenu */}
        {hasSubmenu ? (
          <>
            <NavigationMenuTrigger className="focus:text-transparent-foreground bg-transparent text-inherit hover:bg-transparent hover:text-inherit focus:bg-transparent data-[state=close]:hover:bg-transparent data-[state=close]:focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-inherit data-[state=open]:hover:bg-transparent data-[state=open]:hover:text-inherit data-[state=open]:focus:bg-transparent">
              <LinkElement {...item} />
            </NavigationMenuTrigger>

            <NavigationMenuContent className="bg-muted flex flex-col gap-1 px-2 py-4">
              {item.submenu.map((child: any, idx: number) => (
                <NavItem
                  key={idx}
                  itemIdx={idx}
                  item={child}
                  section={section}
                  level={level + 1}
                  mode="desktop"
                />
              ))}
            </NavigationMenuContent>
          </>
        ) : (
          // Nav Item
          <LinkElement {...item} />
        )}
      </NavigationMenuItem>
    );
  }

  // Mobile layout
  return (
    <AccordionItem value={item.id} className="border-b-0">
      {/* Submenu */}
      {hasSubmenu ? (
        <>
          <AccordionTrigger className="flex items-center py-2 hover:no-underline">
            <LinkElement
              {...item}
              className={cn(
                'flex-1 text-left',
                item.variant == 'none'
                  ? 'w-full justify-start px-0'
                  : 'w-full justify-start'
              )}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            />
          </AccordionTrigger>

          <AccordionContent className="pb-2 pl-4">
            <div className="flex flex-col gap-2">
              {item.submenu.map((child: any, idx: number) => (
                <NavItem
                  key={child.id}
                  itemIdx={idx}
                  item={child}
                  section={section}
                  level={level + 1}
                  mode="mobile"
                />
              ))}
            </div>
          </AccordionContent>
        </>
      ) : (
        // Nav Item
        <div className="py-2">
          <LinkElement
            {...item}
            variant={item.variant ?? 'none'}
            className="w-full justify-start"
          />
        </div>
      )}
    </AccordionItem>
  );
}

export default NavItem;
