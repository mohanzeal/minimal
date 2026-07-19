import type { ContentEle } from '../../../types/section.types';
import { useMemo } from 'react';
import { getEleAnimation } from '../../../utils';
import { useNumberCounterAnimation } from '../../../hooks/useNumberCounterAnimation';

type Props = ContentEle & { className?: string };

export default function ContentElement(props: Props) {
  const { content, isHtml, as = 'div', ...rest } = props;

  const { ref, displayContent } = useNumberCounterAnimation(
    content as string,
    !!isHtml,
    props.animation?.preset
  );

  const animation = useMemo(() => {
    return getEleAnimation('content', props.animation, as);
  }, [as, props.animation]);

  const Component: any = animation.Component;

  if (isHtml) {
    //  XSS Prevention: dangerouslySetInnerHTML renders raw HTML.
    //  Sanitize any user-generated or external content before rendering.
    return (
      <Component
        {...rest}
        {...animation.details}
        ref={ref}
        dangerouslySetInnerHTML={{ __html: displayContent }}
      />
    );
  }

  return (
    <Component {...rest} {...animation.details} ref={ref}>
      {displayContent}
    </Component>
  );
}
