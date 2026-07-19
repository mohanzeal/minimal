import SectionWrapper from '@/components/common/SectionWrapper';
import {
  ContentElement,
  LinkElement,
  ImageElement,
} from '@/components/common/elements';
import type { LinkEle, Section } from '@/types';
import { cn } from '@/utils';

export default function Footer2() {
  const section = {
    id: 'footer4_50fcm',
    className: 'p-6 lg:p-8 mx-auto',
    data: {
      siteName: {
        content: 'Logo',
      },
      siteLogo: {
        id: 1,
        src: '/images/bolt.svg',
      },
      credits: {
        content: '© 2025 MailWavy. All rights reserved.',
        isHtml: true,
      },
      links: [
        {
          id: '1',
          variant: 'none',
          label: 'About us',
        },
        {
          id: '2',
          variant: 'none',
          label: 'Pricing',
        },
        {
          id: '3',
          variant: 'none',
          label: 'Contact us',
        },
      ],
    },
    metadata: {
      hideLogo: false,
      hideSiteName: false,
      hideCredits: false,
      hideLinks: false,
    },
  } as Section;

  return (
    <SectionWrapper section={section}>
      <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
        <div className="flex flex-col items-center gap-2 text-center lg:flex-row lg:text-left">
          {!section.metadata?.hideLogo && (
            <ImageElement
              {...section.data.siteLogo}
              className={cn(
                'mx-auto size-8 rounded-none border-none shadow-none lg:mx-0',
                section.data.siteLogo.className
              )}
            />
          )}
          {!section.metadata?.hideSiteName && (
            <ContentElement {...section.data.siteName} />
          )}
          <ContentElement
            {...section.data.credits}
            className={cn('opacity-80', section.data.credits.className)}
          />
        </div>

        {!section.metadata?.hideLinks && (
          <div className="flex flex-col items-center gap-2 text-center lg:flex-row lg:flex-wrap lg:justify-end lg:gap-6">
            {section.data.links?.map((link: LinkEle) => (
              <LinkElement key={link.id} {...link} />
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
