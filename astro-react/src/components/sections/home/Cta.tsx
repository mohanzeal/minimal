import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeader from '@/components/common/SectionHeader';
import type { Section } from '@/types';

export default function Cta2() {
  const section = {
    id: 'Cta2_o13y0',
    className: 'p-6 lg:p-8 mx-auto',
    backgrounds: [
      {
        label: 'Neutral',
        shade: {
          light: {
            color: 'neutral',
            value: '950',
          },
          dark: {
            color: 'neutral',
            value: '950',
          },
        },
        className: 'bg-neutral-950  text-white/90 dark:bg-transparent',
      },
      {
        image: {
          id: 1,
          src: '/images/landscape-2.webp',
          alt: 'landscape-1',
          overlayClass: 'bg-neutral-900 opacity-50',
        },
      },
    ],
    data: {
      badge: {
        rightIcon: {
          name: 'ArrowUpRight',
        },
        href: '/signup',
        id: '1',
        variant: 'none',
        label: 'Start Free Trial',
      },
      title: {
        content: 'Elevate Your Email Strategy',
        as: 'h2',
        className: 'lg:text-5xl!',
      },
      desc: {
        content: 'Boost engagement and sales with powerful email tools.',
        isHtml: true,
      },
      buttons: [
        {
          href: '/signup',
          id: 'sc7p7',
          variant: 'default',
          label: 'Get Started',
        },
        {
          leftIcon: {
            name: 'Play',
          },
          href: '/features',
          id: 'ct5kq',
          variant: 'outline',
          label: 'See Features',
        },
      ],
      img: {
        id: 1,
        src: '/images/p.svg',
      },
    },
    metadata: {
      isSingleLine: true,
      alignSectionHeaderLeft: true,
      hideBadge: true,
      hideTitle: false,
      hideDesc: false,
      hideButtons: false,
      hideImage: false,
    },
  } as Section;

  return (
    <SectionWrapper section={section}>
      <SectionHeader
        section={section}
        className="flex min-h-100 flex-col items-center justify-center"
      />
    </SectionWrapper>
  );
}
