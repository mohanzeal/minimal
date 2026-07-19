import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeader from '@/components/common/SectionHeader';
import { ContentElement, ImageElement } from '@/components/common/elements';
import ItemWrapper from '@/components/common/ItemWrapper';
import type { ContentEle, Section } from '@/types';
import { cn } from '@/utils';

type StatItem = {
  id: string;
  value: ContentEle;
  title: ContentEle;
  suffix?: ContentEle;
  desc?: ContentEle;
  className?: string;
};

export default function Stat3() {
  const section = {
    id: 'Stat3_git15',
    className: 'p-6 lg:p-8 mx-auto',
    backgrounds: [
      {
        pattern: {
          style: {
            background: 'var(--bg)',
            clipPath:
              'polygon(0 0, 2880px 352px, 5760px 0, 5760px 100%, 0 100%)',
          },
          className:
            'dark:[--bg:var(--color-secondary-900)] [--bg:var(--color-secondary-100)]',
        },
      },
    ],
    data: {
      badge: {
        rightIcon: {
          name: 'ArrowUpRight',
        },
        href: '/testimonials',
        id: '1',
        variant: 'outline',
        label: 'Trusted by',
      },
      title: {
        content: 'Real Results, Real Business',
        as: 'h2',
      },
      desc: {
        content:
          'Boost engagement and drive sales with proven email marketing solutions. Track your success with real-time analytics.',
        isHtml: true,
      },
      buttons: [
        {
          href: '/signup',
          id: '8v0gy',
          variant: 'default',
          label: 'Start Free Trial',
        },
        {
          href: '/features',
          id: 'zs2k9',
          variant: 'outline',
          label: 'See Features',
        },
      ],
      img: {
        id: 1,
        src: '/images/transparent-34.png',
        alt: 'avatar-22',
        className: 'object-cover object-center',
      },
      stats: [
        {
          id: 1,
          title: {
            content: 'Open Rate',
          },
          value: {
            content: '42%',
            animation: {
              enabled: true,
              preset: 'numberCounter',
            },
          },
          desc: {
            content:
              'Higher than industry average. Engage your audience effectively.',
            isHtml: true,
          },
          backgrounds: [
            {
              pattern: {
                style: {
                  backgroundImage:
                    '        linear-gradient(to right, var(--color-1) 1px, transparent 1px),   linear-gradient(to bottom, var(--color-1) 1px, transparent 1px)     ',
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 0',
                  maskImage:
                    '\n            repeating-linear-gradient(\n              to right,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            repeating-linear-gradient(\n              to bottom,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            radial-gradient(ellipse 80% 80% at 100% 0%, var(--color-2) 50%, transparent 90%)\n          ',
                  WebkitMaskImage:
                    '\n            repeating-linear-gradient(\n              to right,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            repeating-linear-gradient(\n              to bottom,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            radial-gradient(ellipse 80% 80% at 100% 0%, var(--color-2) 50%, transparent 90%)\n          ',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'source-in',
                },
                className:
                  'dark:[--color-1:var(--color-secondary-800)] dark:[--color-2:var(--color-secondary-700)] [--color-1:var(--color-secondary-400)] [--color-2:var(--color-secondary-400)]',
              },
            },
          ],
        },
        {
          id: 2,
          title: {
            content: 'Conversion Rate',
          },
          value: {
            content: '8%',
            animation: {
              enabled: true,
              preset: 'numberCounter',
            },
          },
          desc: {
            content:
              'Drive more sales with targeted campaigns and smart automation.',
            isHtml: true,
          },
          backgrounds: [
            {
              pattern: {
                style: {
                  backgroundImage:
                    '        linear-gradient(to right, var(--color-1) 1px, transparent 1px),   linear-gradient(to bottom, var(--color-1) 1px, transparent 1px)     ',
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 0',
                  maskImage:
                    '\n            repeating-linear-gradient(\n              to right,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            repeating-linear-gradient(\n              to bottom,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            radial-gradient(ellipse 80% 80% at 100% 0%, var(--color-2) 50%, transparent 90%)\n          ',
                  WebkitMaskImage:
                    '\n            repeating-linear-gradient(\n              to right,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            repeating-linear-gradient(\n              to bottom,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            radial-gradient(ellipse 80% 80% at 100% 0%, var(--color-2) 50%, transparent 90%)\n          ',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'source-in',
                },
                className:
                  'dark:[--color-1:var(--color-secondary-800)] dark:[--color-2:var(--color-secondary-700)] [--color-1:var(--color-secondary-400)] [--color-2:var(--color-secondary-400)]',
              },
            },
          ],
        },
        {
          id: 3,
          title: {
            content: 'Autoresponders',
          },
          value: {
            content: '150K+',
            animation: {
              enabled: true,
              preset: 'numberCounter',
            },
          },
          desc: {
            content:
              'Active workflows helping businesses automate customer interactions.',
            isHtml: true,
          },
          backgrounds: [
            {
              pattern: {
                style: {
                  backgroundImage:
                    '        linear-gradient(to right, var(--color-1) 1px, transparent 1px),   linear-gradient(to bottom, var(--color-1) 1px, transparent 1px)     ',
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 0',
                  maskImage:
                    '\n            repeating-linear-gradient(\n              to right,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            repeating-linear-gradient(\n              to bottom,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            radial-gradient(ellipse 80% 80% at 100% 0%, var(--color-2) 50%, transparent 90%)\n          ',
                  WebkitMaskImage:
                    '\n            repeating-linear-gradient(\n              to right,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            repeating-linear-gradient(\n              to bottom,\n              black 0px,\n              black 3px,\n              transparent 3px,\n              transparent 8px\n            ),\n            radial-gradient(ellipse 80% 80% at 100% 0%, var(--color-2) 50%, transparent 90%)\n          ',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'source-in',
                },
                className:
                  'dark:[--color-1:var(--color-secondary-800)] dark:[--color-2:var(--color-secondary-700)] [--color-1:var(--color-secondary-400)] [--color-2:var(--color-secondary-400)]',
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
      fourColumns: false,
      hideStats: false,
      hideImage: false,
    },
  } as Section;

  return (
    <SectionWrapper section={section}>
      <div className="flex flex-col items-center justify-center gap-4">
        <SectionHeader section={section} />

        {/* Center Image Box */}
        {!section?.metadata?.hideImage && section.data.img && (
          <div className="my-2 flex w-full items-center justify-center overflow-hidden p-8">
            <ImageElement
              {...section.data.img}
              className={cn(
                'aspect-16/9 w-full rounded-xl object-contain',
                section.data.img.className
              )}
            />
          </div>
        )}

        {/* Stats Grid */}
        {!section?.metadata?.hideStats && (
          <div
            className={cn(
              'grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12',
              section.metadata?.fourColumns && 'lg:grid-cols-4',
              section.data?.stats?.length < 3 ? 'lg:grid-cols-2' : ''
            )}
          >
            {(section.data.stats || []).map((stat: StatItem) => (
              <ItemWrapper
                key={stat.id}
                item={stat}
                className={cn(
                  'w-full p-4 text-left transition-all duration-300 hover:scale-105',
                  stat.className
                )}
              >
                <ContentElement
                  {...stat.title}
                  className={cn(
                    '!text-sm font-semibold tracking-wide',
                    stat.title?.className
                  )}
                />
                <div className="mt-4 flex items-baseline justify-between gap-1">
                  <ContentElement
                    {...stat.value}
                    as={stat.value?.as ?? 'h3'}
                    className={cn(
                      '!text-5xl font-extrabold tracking-tight',
                      stat.value?.className
                    )}
                  />
                </div>
                {stat.desc && (
                  <ContentElement
                    {...stat.desc}
                    className={cn(
                      'mt-3 !text-sm leading-relaxed font-medium opacity-80',
                      stat.desc.className
                    )}
                  />
                )}
              </ItemWrapper>
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
