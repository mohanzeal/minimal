import { useMemo } from 'react';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeader from '@/components/common/SectionHeader';
import { ImageElement, ButtonElement } from '@/components/common/elements';
import ItemWrapper from '@/components/common/ItemWrapper';
import type { ButtonEle, ImageEle, Section } from '@/types';
import { cn } from '@/utils';

type IntegrationItem = {
  id: string;
  img: ImageEle;
  className?: string;
};

export default function Integration3() {
  const section = {
    id: 'Integration3_egets',
    className: 'p-6 lg:p-8 mx-auto',
    data: {
      badge: {
        href: '/testimonials',
        id: '1',
        variant: 'outline',
        label: 'Trusted by 10,000+ Businesses',
      },
      title: {
        content: 'Seamless Integrations for Your Workflow',
        as: 'h2',
      },
      desc: {
        content:
          'Easily connect MailWavy with your favorite tools and streamline your email marketing.',
        isHtml: true,
      },
      buttons: [
        {
          href: '/integrations',
          id: '1',
          variant: 'default',
          label: 'See all',
        },
      ],
      integrations: [
        {
          id: '40',
          title: {
            content: 'Facebook',
            as: 'h3',
          },
          desc: {
            content:
              'Easily sync your data with facebook for seamless automation.',
            isHtml: true,
          },
          img: {
            id: 1,
            src: '/images/c-40.svg',
          },
          backgrounds: [
            {
              pattern: {
                style: {
                  backgroundImage:
                    'repeating-linear-gradient(45deg, transparent, transparent 2px, var(--color-1) 2px, var(--color-1) 4px)',
                },
                className:
                  'dark:[--color-1:var(--color-secondary-800)] [--color-1:var(--color-primary-100)]',
              },
            },
          ],
        },
        {
          id: '41',
          title: {
            content: 'Instagram',
            as: 'h3',
          },
          desc: {
            content:
              'Receive updates and notifications directly in your instagram channels.',
            isHtml: true,
          },
          img: {
            id: 1,
            src: '/images/c-41.svg',
          },
          backgrounds: [
            {
              pattern: {
                style: {
                  backgroundImage:
                    'repeating-linear-gradient(45deg, transparent, transparent 2px, var(--color-1) 2px, var(--color-1) 4px)',
                },
                className:
                  'dark:[--color-1:var(--color-secondary-800)] [--color-1:var(--color-primary-100)]',
              },
            },
          ],
        },
        {
          id: '42',
          title: {
            content: 'Tiktok',
            as: 'h3',
          },
          desc: {
            content:
              'Import your videos from tictok and streamline your reel creation process.',
            isHtml: true,
          },
          img: {
            id: 1,
            src: '/images/c-42.svg',
          },
          backgrounds: [
            {
              pattern: {
                style: {
                  backgroundImage:
                    'repeating-linear-gradient(45deg, transparent, transparent 2px, var(--color-1) 2px, var(--color-1) 4px)',
                },
                className:
                  'dark:[--color-1:var(--color-secondary-800)] [--color-1:var(--color-primary-100)]',
              },
            },
          ],
        },
        {
          id: '43',
          title: {
            content: 'Reddit',
            as: 'h3',
          },
          desc: {
            content: 'Collaborate blazing-fast with reddit integration.',
            isHtml: true,
          },
          img: {
            id: 1,
            src: '/images/c-43.svg',
          },
          backgrounds: [
            {
              pattern: {
                style: {
                  backgroundImage:
                    'repeating-linear-gradient(45deg, transparent, transparent 2px, var(--color-1) 2px, var(--color-1) 4px)',
                },
                className:
                  'dark:[--color-1:var(--color-secondary-800)] [--color-1:var(--color-primary-100)]',
              },
            },
          ],
        },
        {
          id: '44',
          title: {
            content: 'Discord',
            as: 'h3',
          },
          desc: {
            content:
              'Sync your discord store data and streamline order management.',
            isHtml: true,
          },
          img: {
            id: 1,
            src: '/images/c-44.svg',
          },
          backgrounds: [
            {
              pattern: {
                style: {
                  backgroundImage:
                    'repeating-linear-gradient(45deg, transparent, transparent 2px, var(--color-1) 2px, var(--color-1) 4px)',
                },
                className:
                  'dark:[--color-1:var(--color-secondary-800)] [--color-1:var(--color-primary-100)]',
              },
            },
          ],
        },
        {
          id: '49',
          title: {
            content: 'Claude',
            as: 'h3',
          },
          desc: {
            content:
              'Automate your workflows and track changes with claude integration.',
            isHtml: true,
          },
          img: {
            id: 1,
            src: '/images/c-49.svg',
          },
          backgrounds: [
            {
              pattern: {
                style: {
                  backgroundImage:
                    'repeating-linear-gradient(45deg, transparent, transparent 2px, var(--color-1) 2px, var(--color-1) 4px)',
                },
                className:
                  'dark:[--color-1:var(--color-secondary-800)] [--color-1:var(--color-primary-100)]',
              },
            },
          ],
        },
      ],
    },
    metadata: {
      isSingleLine: true,
      alignSectionHeaderLeft: true,
      hideBadge: false,
      hideTitle: false,
      hideDesc: false,
      hideButtons: false,
      hideGrayscale: true,
      fourColumns: false,
      hideImages: false,
    },
  } as Section;

  const { metadata, data } = section;

  const sectionHeaderData = useMemo(() => {
    return {
      ...section,
      metadata: {
        ...metadata,
        hideButtons: true,
      },
    };
  }, [section, metadata]);

  return (
    <SectionWrapper section={section}>
      {/* Header: Centered Title & Description */}
      <SectionHeader section={sectionHeaderData} />

      {/* Centered Logo Row Containment */}
      {!metadata?.hideImages && data.integrations && (
        <div className="mx-auto mb-10 flex w-full max-w-4xl flex-wrap items-center justify-center gap-6 px-8 py-6">
          {data.integrations.map((item: IntegrationItem) => (
            <div
              key={item.id}
              className="transition-all duration-300 hover:scale-110"
            >
              <ItemWrapper
                item={item}
                className={cn(
                  'flex items-center justify-center p-2',
                  item.className
                )}
              >
                <ImageElement
                  {...item.img}
                  className={cn(
                    'aspect-square max-h-30 min-w-20 object-contain p-1',
                    !section?.metadata?.hideGrayscale &&
                      'grayscale dark:brightness-200 dark:invert',
                    item.img.className
                  )}
                />
              </ItemWrapper>
            </div>
          ))}
        </div>
      )}

      {/* Centered Bottom Button */}
      {data.buttons && data.buttons.length > 0 && !metadata?.hideButtons && (
        <div className="flex items-center justify-center gap-2">
          {data.buttons.map((button: ButtonEle) => (
            <ButtonElement {...button} key={button.id} />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
