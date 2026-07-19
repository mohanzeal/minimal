import SectionWrapper from '@/components/common/SectionWrapper';
import {
  ContentElement,
  LinkElement,
  ImageElement,
} from '@/components/common/elements';
import ItemWrapper from '@/components/common/ItemWrapper';
import type { LinkEle, ContentEle, ImageEle, Section } from '@/types';
import { cn } from '@/utils';
import SectionHeader from '@/components/common/SectionHeader';

type TestimonialItem = {
  id: string | number;
  logo?: ImageEle;
  quote: ContentEle;
  links?: LinkEle[];
  name: ContentEle;
  role: ContentEle;
  avatar?: ImageEle;
  className?: string;
};

export default function Testimonial8() {
  const section = {
    id: 'pu624',
    className: 'p-6 lg:p-8 mx-auto',
    data: {
      badge: {
        rightIcon: {
          name: 'ArrowUpRight',
        },
        id: '1',
        variant: 'outline',
        label: 'v2 Released',
      },
      title: {
        content: 'Loved by Customers Worldwide',
        as: 'h2',
      },
      desc: {
        content:
          "See what our customers have to say about their experience and the results they've achieved.",
        isHtml: true,
      },
      buttons: [
        {
          id: 'vcrhn',
          variant: 'default',
          label: 'Get Started Now',
        },
        {
          id: 'k74y0',
          variant: 'outline',
          label: 'View More',
        },
      ],
      testimonials: [
        {
          id: 1,
          logo: {
            id: 1,
            src: '/images/c-1.svg',
          },
          quote: {
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu hendrerit libero, at dignissim turpis. Nullam ut facilisis metus.',
            isHtml: true,
          },
          links: [
            {
              id: '1',
              variant: 'none',
              label: 'Read more',
            },
          ],
          name: {
            content: 'Koen Bok',
          },
          role: {
            content: 'CEO, Framer',
          },
          avatar: {
            id: 1,
            src: '/images/male-1.webp',
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
          logo: {
            id: 1,
            src: '/images/c-2.svg',
          },
          quote: {
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu hendrerit libero, at dignissim turpis. Nullam ut facilisis metus.',
            isHtml: true,
          },
          links: [
            {
              id: '1',
              variant: 'none',
              label: 'Read more',
            },
          ],
          name: {
            content: 'Johnny Ho',
          },
          role: {
            content: 'Co-founder, Perplexity',
          },
          avatar: {
            id: 1,
            src: '/images/male-2.webp',
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
          logo: {
            id: 1,
            src: '/images/c-3.svg',
          },
          quote: {
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu hendrerit libero, at dignissim turpis. Nullam ut facilisis metus.',
            isHtml: true,
          },
          links: [
            {
              id: '1',
              variant: 'none',
              label: 'Read more',
            },
          ],
          name: {
            content: 'Yasser Elsaid',
          },
          role: {
            content: 'Founder, CEO, Chatbase',
          },
          avatar: {
            id: 1,
            src: '/images/male-3.webp',
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
          id: 4,
          logo: {
            id: 1,
            src: '/images/c-4.svg',
          },
          quote: {
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu hendrerit libero, at dignissim turpis. Nullam ut facilisis metus.',
            isHtml: true,
          },
          links: [
            {
              id: '1',
              variant: 'none',
              label: 'Read more',
            },
          ],
          name: {
            content: 'Grant Shaddick',
          },
          role: {
            content: 'Co-founder, Tella',
          },
          avatar: {
            id: 1,
            src: '/images/male-4.webp',
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
      isSingleLine: false,
      alignSectionHeaderLeft: false,
      hideBadge: false,
      hideTitle: false,
      hideDesc: false,
      hideButtons: false,
      hideTestimonials: false,
      hideTestimonialLogo: false,
      hideQuote: false,
      hideLinks: false,
      hideName: false,
      hideRole: false,
      hideAvatar: false,
    },
  } as Section;

  return (
    <SectionWrapper section={section}>
      {/* Title, Desc & Badge */}
      <SectionHeader section={section} />

      {/* Testimonials Grid */}
      {!section.metadata?.hideTestimonials && (
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          {(section.data.testimonials as TestimonialItem[])?.map((item) => (
            <ItemWrapper
              key={item.id}
              item={item}
              className={cn(
                'flex flex-col justify-between p-8 transition-all duration-300 lg:p-12',
                item.className
              )}
            >
              {/* Logo */}
              <div className="mb-8 flex items-center justify-between">
                {!section.metadata?.hideTestimonialLogo && item.logo && (
                  <ImageElement
                    {...item.logo}
                    className={cn(
                      'max-h-16 min-h-12 w-auto bg-neutral-200 object-contain px-2.5 py-1',
                      item.logo.className
                    )}
                  />
                )}
              </div>

              {/* Quote block */}
              <div className="flex-1 text-left">
                {/* Quote Text */}
                {!section.metadata?.hideQuote && item.quote && (
                  <ContentElement
                    {...item.quote}
                    as="span"
                    className="inline"
                  />
                )}
              </div>

              {/* Footer Row: Tags (Left) and Author (Right) */}
              <div className="mt-8 flex w-full flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                {/* Tags list */}
                {!section.metadata?.hideLinks &&
                  item?.links &&
                  item?.links?.length > 0 && (
                    <div className="flex flex-col gap-0.5">
                      {item?.links?.map((link: LinkEle) => (
                        <LinkElement {...link} key={link.id} />
                      ))}
                    </div>
                  )}

                {/* Author profile */}
                <div className="flex items-center gap-3 self-end text-right sm:self-auto">
                  <div>
                    {!section.metadata?.hideName && item.name && (
                      <ContentElement
                        {...item.name}
                        className="text-sm font-bold"
                      />
                    )}
                    {!section.metadata?.hideRole && item.role && (
                      <ContentElement
                        {...item.role}
                        className="mt-0.5 text-xs"
                      />
                    )}
                  </div>
                  {!section.metadata?.hideAvatar && item.avatar && (
                    <ImageElement
                      {...item.avatar}
                      className="size-11 shrink-0 rounded-lg object-cover"
                    />
                  )}
                </div>
              </div>
            </ItemWrapper>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
