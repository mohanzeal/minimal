import SectionWrapper from '@/components/common/SectionWrapper';
import {
  ContentElement,
  ImageElement,
  ButtonElement,
} from '@/components/common/elements';
import ItemWrapper from '@/components/common/ItemWrapper';
import type { ButtonEle, ContentEle, ImageEle, Section } from '@/types';
import { cn } from '@/utils';

import SectionHeader from '@/components/common/SectionHeader';

type StepItem = {
  id: string;
  img: ImageEle;
  step: ButtonEle;
  title: ContentEle;
  desc: ContentEle;
  className?: string;
};

export default function HowItWorks1() {
  const section = {
    id: 'ib7v9',
    className: 'p-6 lg:p-8 mx-auto',
    data: {
      badge: {
        rightIcon: {
          name: 'ArrowUpRight',
        },
        href: '/features',
        id: '1',
        variant: 'outline',
        label: 'Effortless Email Marketing',
      },
      title: {
        content: 'Streamline Your Communication',
        as: 'h2',
      },
      desc: {
        content:
          'Effortlessly create, send, and track emails that drive results.',
        isHtml: true,
      },
      buttons: [
        {
          href: '/signup',
          id: 'a8v5x',
          variant: 'default',
          label: 'Start Free Trial',
        },
        {
          href: '/features',
          id: '4zfc9',
          variant: 'outline',
          label: 'See Features',
        },
      ],
      steps: [
        {
          id: 4,
          step: {
            id: '4',
            variant: 'default',
            label: '1',
          },
          img: {
            id: 1,
            src: '/images/transparent-39.png',
            alt: 'transparent-6',
          },
          title: {
            content: 'Create Campaigns',
            as: 'h3',
          },
          desc: {
            content: 'Design and send professional emails with ease.',
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
          id: 5,
          step: {
            id: '5',
            variant: 'default',
            label: '2',
          },
          img: {
            id: 1,
            src: '/images/transparent-16.png',
            alt: 'transparent-40',
          },
          title: {
            content: 'Segment Audiences',
            as: 'h3',
          },
          desc: {
            content: 'Target the right people with personalized messages.',
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
          id: 6,
          step: {
            id: '6',
            variant: 'default',
            label: '3',
          },
          img: {
            id: 1,
            src: '/images/transparent-18.png',
            alt: 'transparent-52',
          },
          title: {
            content: 'Track Performance',
            as: 'h3',
          },
          desc: {
            content: 'Access detailed analytics to refine your strategy.',
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
      hideStepLabel: false,
      hideSteps: false,
    },
  } as Section;

  return (
    <SectionWrapper section={section}>
      <SectionHeader section={section} />

      {!section?.metadata?.hideSteps && (
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {section.data.steps?.map((step: StepItem, idx: number) => (
            <ItemWrapper
              key={step.id}
              item={step}
              className={cn('relative', step.className)}
            >
              <div className="relative overflow-hidden">
                <ImageElement
                  {...section.data.steps[idx].img}
                  className={cn(
                    'aspect-square w-full object-cover',
                    section.data.steps[idx].img.className
                  )}
                />
                {!section?.metadata?.hideStepLabel && (
                  <div className="absolute top-5 left-5 flex items-center justify-center">
                    <ButtonElement {...step.step} />
                  </div>
                )}
              </div>
              <div className="px-3 py-4">
                <ContentElement
                  {...step.title}
                  className={cn('!text-lg font-semibold', step.title.className)}
                  as={step.title.as ?? 'h3'}
                />
                <ContentElement
                  {...step.desc}
                  className={cn('mt-2 opacity-80', step.desc.className)}
                />
              </div>
            </ItemWrapper>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
