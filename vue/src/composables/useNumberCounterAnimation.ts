import { ref, watch, onUnmounted, type Ref, type MaybeRef } from 'vue';
import { useInView, animate } from 'motion-v';

export function useNumberCounterAnimation(
  content: (() => string) | Ref<string>,
  isHtml: (() => boolean) | Ref<boolean>,
  preset: (() => string | undefined) | Ref<string | undefined>,
  editableDiv: Ref<any>
) {
  const domEl = ref<MaybeRef | null>(null);
  watch(editableDiv, (newVal) => {
    domEl.value = newVal?.$el || newVal || null;
  });

  const isInView = useInView(domEl, { once: false } as any);
  let countAnimation: any = null;

  const getContentVal = () =>
    typeof content === 'function' ? content() : content.value;
  const getIsHtmlVal = () =>
    typeof isHtml === 'function' ? isHtml() : isHtml.value;
  const getPresetVal = () =>
    typeof preset === 'function' ? preset() : preset.value;
  const getEl = () => editableDiv.value?.$el || editableDiv.value;

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

  const stopCountAnimation = () => {
    if (countAnimation) {
      countAnimation.stop();
      countAnimation = null;
    }
  };

  const startCountAnimation = () => {
    stopCountAnimation();

    const contentVal = getContentVal();
    const parsed = parseAndFormat(contentVal);
    if (!parsed.isValid) {
      const el = getEl();
      if (el) {
        if (getIsHtmlVal()) {
          el.innerHTML = contentVal;
        } else {
          el.innerText = contentVal;
        }
      }
      return;
    }

    const el = getEl();
    if (el) {
      const initialText = formatValue(0, parsed);
      if (getIsHtmlVal()) {
        el.innerHTML = initialText;
      } else {
        el.innerText = initialText;
      }
    }

    countAnimation = animate(0, parsed.target, {
      duration: 2,
      ease: 'easeOut',
      onUpdate(v) {
        const el = getEl();
        if (el && document.activeElement !== el) {
          const formatted = formatValue(v, parsed);
          if (getIsHtmlVal()) {
            el.innerHTML = formatted;
          } else {
            el.innerText = formatted;
          }
        }
      },
    });
  };

  const handleUpdate = () => {
    if (getPresetVal() !== 'numberCounter') return;

    const el = getEl();
    if (isInView.value && el && document.activeElement !== el) {
      startCountAnimation();
    }
  };

  watch(
    [isInView, () => getContentVal()],
    () => {
      handleUpdate();
    },
    { immediate: false }
  );

  onUnmounted(() => {
    stopCountAnimation();
  });

  return {
    isInView,
    startCountAnimation,
    stopCountAnimation,
    parseAndFormat,
    formatValue,
  };
}
