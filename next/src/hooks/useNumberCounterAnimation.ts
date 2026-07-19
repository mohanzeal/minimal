import { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'motion/react';

export function useNumberCounterAnimation(
  content: string,
  isHtml: boolean,
  preset: string | undefined
) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as any, { once: false });
  const [displayContent, setDisplayContent] = useState(content);

  function parseAndFormat(contentStr: string) {
    if (!contentStr) {
      return {
        isValid: false,
        prefix: '',
        suffix: '',
        target: 0,
        decimals: 0,
        hasCommas: false,
      };
    }
    const match = contentStr.match(/^([^\d-]*)([\d,.-]+)(.*)$/);
    if (!match) {
      return {
        isValid: false,
        prefix: '',
        suffix: contentStr,
        target: 0,
        decimals: 0,
        hasCommas: false,
      };
    }

    const prefix = match[1] || '';
    const numStr = match[2];
    const suffix = match[3] || '';

    const cleanNumStr = numStr.replace(/,/g, '');
    const target = parseFloat(cleanNumStr);

    if (isNaN(target)) {
      return {
        isValid: false,
        prefix: '',
        suffix: contentStr,
        target: 0,
        decimals: 0,
        hasCommas: false,
      };
    }

    const decimalParts = cleanNumStr.split('.');
    const decimals = decimalParts.length > 1 ? decimalParts[1].length : 0;
    const hasCommas = numStr.includes(',');

    return {
      isValid: true,
      prefix,
      suffix,
      target,
      decimals,
      hasCommas,
    };
  }

  function formatValue(v: number, parsed: ReturnType<typeof parseAndFormat>) {
    let formattedNum = v.toFixed(parsed.decimals);
    if (parsed.hasCommas) {
      const parts = formattedNum.split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      formattedNum = parts.join('.');
    }
    return parsed.prefix + formattedNum + parsed.suffix;
  }

  useEffect(() => {
    if (preset !== 'numberCounter') {
      setDisplayContent(content);
      return;
    }

    const parsed = parseAndFormat(content);
    if (!parsed.isValid) {
      setDisplayContent(content);
      return;
    }

    if (!isInView) {
      setDisplayContent(formatValue(0, parsed));
      return;
    }

    const controls = animate(0, parsed.target, {
      duration: 2,
      ease: 'easeOut',
      onUpdate(v) {
        setDisplayContent(formatValue(v, parsed));
      },
    });

    return () => {
      controls.stop();
    };
  }, [content, preset, isInView]);

  return {
    ref,
    displayContent,
  };
}
