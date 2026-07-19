import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeader from '@/components/common/SectionHeader';
import { ImageElement } from '@/components/common/elements';
import type { Section } from '@/types';
import { cn } from '@/utils';

export default function Hero13() {
  const section = {
    id: '53rus',
    className: 'p-0',
    data: {
      badge: {
        leftIcon: {
          name: 'CircleDashed',
        },
        rightIcon: {
          name: 'ArrowUpRight',
        },
        href: '/pricing',
        id: '1',
        variant: 'outline',
        label: 'Email Marketing',
      },
      title: {
        content: 'Grow Your Business with MailWavy',
        as: 'h1',
        className: 'lg:text-6xl!',
      },
      desc: {
        content:
          'Create, automate, and analyze emails to boost engagement and sales.',
        isHtml: true,
      },
      buttons: [
        {
          leftIcon: {
            name: 'Play',
          },
          href: '/signup',
          id: 'x7ew2',
          variant: 'default',
          label: 'Start Free Trial',
        },
      ],
      img: {
        id: 1,
        src: '/images/transparent-43.png',
        className: 'rounded-0',
      },
    },
    metadata: {
      isSingleLine: false,
      alignSectionHeaderLeft: true,
      hideBadge: false,
      hideTitle: false,
      hideDesc: false,
      hideButtons: false,
      hideImage: false,
      alignImageLeft: false,
    },
  } as Section;

  return (
    <SectionWrapper section={section}>
      <div
        className={cn(
          'grid items-stretch gap-0',
          section.metadata?.hideImage
            ? 'grid-cols-1'
            : 'grid-cols-1 lg:grid-cols-2'
        )}
      >
        {/* Image Column (takes full height using stretch on the grid) */}
        {!section.metadata?.hideImage && section.data.img && (
          <div
            className={cn(
              'relative min-h-[350px] sm:min-h-[450px] lg:min-h-[600px]',
              section.metadata?.alignImageLeft ? 'lg:order-1' : 'lg:order-2'
            )}
          >
            <ImageElement
              {...section.data.img}
              className={cn(
                'absolute inset-0 h-full w-full object-cover lg:mask-[linear-gradient(to_right,var(--background)_20%,transparent_99%)] lg:mask-no-repeat',
                section.data.img.className
              )}
            />
          </div>
        )}

        {/* Content Column */}
        <div
          className={cn(
            'flex items-center px-6 py-16 sm:px-12 sm:py-24 lg:px-16 xl:px-24',
            section.metadata?.alignImageLeft ? 'lg:order-2' : 'lg:order-1'
          )}
        >
          <SectionHeader section={section} />
        </div>
      </div>
    </SectionWrapper>
  );
}
