import { AlignLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Accordion } from '@/components/ui/accordion';
import { ImageElement, ContentElement } from '@/components/common/elements';
import ToggleMode from '@/components/common/ToggleMode';
import SectionWrapper from '@/components/common/SectionWrapper';
import NavItem from '@/components/common/NavItem';
import type { LinkEle, Section } from '@/types';
import { cn } from '@/utils';

type MenuItem = LinkEle & {
  id: string;
  submenu?: MenuItem[];
};

export default function Navbar1() {
  const section = {
    id: 'navbar1_bqkex',
    className: 'p-6 lg:p-8 mx-auto',
    data: {
      siteName: {
        content: 'MailWavy',
      },
      siteLogo: {
        id: 1,
        src: '/images/bolt.svg',
      },
      menu: [
        {
          href: '/faq',
          id: '4',
          variant: 'none',
          label: 'Faqs',
        },
        {
          href: '/pricing',
          id: '73v95',
          variant: 'none',
          label: 'Pricing',
        },
        {
          href: '/#',
          id: 'hppgv',
          variant: 'default',
          label: 'Login',
        },
      ],
    },
    metadata: {
      useHeroBg: true,
      hideLogo: false,
      hideSiteName: false,
      hideMenu: false,
      hideThemeToggle: false,
    },
  } as Section;

  return (
    <SectionWrapper
      section={section}
      className={cn(`z-5 ${section.metadata?.useHeroBg ? 'useHeroBg' : ''}`)}
    >
      <div className="mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* =======================
              Logo (Left)
          ======================= */}
          {(!section.metadata?.hideLogo || !section.metadata?.hideSiteName) && (
            <div className="z-20 flex items-center gap-2">
              {!section.metadata?.hideLogo && (
                <ImageElement
                  {...section.data.siteLogo}
                  className="h-8 w-auto rounded-none border-none shadow-none"
                />
              )}

              {!section.metadata?.hideSiteName && (
                <ContentElement {...section.data.siteName} />
              )}
            </div>
          )}

          {/* =======================
              Menu (Center – Desktop)
              ======================= */}
          {!section.metadata?.hideMenu && (
            <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
              <NavigationMenu>
                <NavigationMenuList asChild>
                  <div className="flex list-none items-center gap-1">
                    {(section.data.menu as MenuItem[]).map(
                      (item: MenuItem, idx: number) => (
                        <NavItem
                          key={item.id}
                          itemIdx={idx}
                          item={item}
                          section={section}
                          mode="desktop"
                        />
                      )
                    )}
                  </div>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          )}

          {/* =======================
              Actions (Right)
              ======================= */}
          <div className="z-20 flex items-center gap-2">
            {!section.metadata?.hideThemeToggle && <ToggleMode />}

            {/* =======================
                Mobile Menu
                ======================= */}
            {!section.metadata?.hideMenu && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <AlignLeft className="size-5" />
                  </Button>
                </SheetTrigger>

                <SheetContent side="right">
                  <Accordion type="multiple" asChild>
                    <div className="mt-8 flex flex-1 flex-col items-start gap-4 overflow-y-auto px-4 pb-10">
                      {(section.data.menu as MenuItem[]).map(
                        (item: MenuItem, idx: number) => (
                          <NavItem
                            key={item.id}
                            itemIdx={idx}
                            item={item}
                            section={section}
                            mode="mobile"
                          />
                        )
                      )}
                    </div>
                  </Accordion>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
