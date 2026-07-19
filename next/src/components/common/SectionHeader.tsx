import { ButtonEle, Section } from '../../types';
import { cn } from '../../utils';
import { ButtonElement, ContentElement } from '../common/elements';

type Props = {
  section: Section;
  className?: string;
  children?: React.ReactNode;
};

export default function SectionHeader({ section, className }: Props) {
  const { metadata, data } = section;

  return (
    <div
      className={cn(
        'mb-4 flex w-full flex-col',
        !metadata?.alignSectionHeaderLeft && 'jusitify-center items-center',
        metadata?.isSingleLine &&
          'flex-col items-start justify-between gap-4 md:flex-row',
        className
      )}
    >
      <div
        className={cn([
          'flex w-full flex-col',
          !metadata?.alignSectionHeaderLeft && 'items-center justify-center',
        ])}
      >
        {/* Badge */}
        {!metadata?.hideBadge && data.badge && (
          <div>
            <ButtonElement
              {...data.badge}
              className={cn('my-1 h-auto py-0.5', data.badge?.className)}
            />
          </div>
        )}

        {/* Title */}
        {!metadata?.hideTitle && (
          <ContentElement
            {...data.title}
            as={data.title?.as ?? 'h2'}
            className={cn(
              'mt-2.5 mb-2 max-w-5xl',
              !metadata?.alignSectionHeaderLeft && 'text-center',
              data.title?.className
            )}
          />
        )}
      </div>

      <div
        className={cn([
          'my-2 flex w-full flex-col',
          !metadata?.alignSectionHeaderLeft && 'items-center justify-center',
        ])}
      >
        {/* Desc */}
        {!metadata?.hideDesc && (
          <ContentElement
            {...data.desc}
            className={cn(
              'my-2 max-w-5xl opacity-80',
              !metadata?.alignSectionHeaderLeft && 'text-center',
              data.desc?.className
            )}
          />
        )}

        {/* Buttons */}
        {data.buttons && !metadata?.hideButtons && (
          <div
            className={cn([
              'my-4 flex gap-2',
              metadata?.isSingleLine && metadata?.hideDesc
                ? 'flex-row items-center justify-end'
                : 'justify-start',
            ])}
          >
            {data.buttons.map((button: ButtonEle) => (
              <ButtonElement {...button} key={button.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
