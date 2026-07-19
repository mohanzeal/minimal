import { useMemo } from 'react';
import type {
  Background,
  ImageBg,
  VideoBg,
  PatternBg,
  ColorSchemeBg,
} from '../../types';
import { cn } from '../../utils';

type RenderBackgroundsProps = {
  backgrounds: Background[];
  renderColorScheme?: boolean;
};

export default function RenderBackgrounds({
  backgrounds,
  renderColorScheme,
}: RenderBackgroundsProps) {
  const bgs = useMemo<Background[]>(() => {
    return backgrounds ?? [];
  }, [backgrounds]);

  const findBg = (key: string) => bgs.find((bg) => key in bg);
  const imageBg = useMemo(() => findBg('image') as ImageBg, [bgs]);
  const videoBg = useMemo(() => findBg('video') as VideoBg, [bgs]);
  const patternBg = useMemo(() => findBg('pattern') as PatternBg, [bgs]);
  const colorSchemeBg = useMemo(() => findBg('shade') as ColorSchemeBg, [bgs]);

  return (
    <>
      {/* Color background */}
      {colorSchemeBg && renderColorScheme && (
        <div
          className={cn(
            'absolute -inset-px z-0 overflow-hidden rounded-[inherit]',
            colorSchemeBg?.className
          )}
        />
      )}

      {/* Image background */}
      {imageBg?.image && (
        <img
          className={cn(
            'absolute inset-0 z-0 h-full w-full rounded-[inherit] object-cover',
            imageBg.image.className
          )}
          src={imageBg.image.src}
          alt={imageBg.image.alt}
        />
      )}
      {/* Image Overley */}
      {imageBg?.image?.src && (
        <div
          className={cn(
            'absolute top-0 left-0 h-full w-full bg-neutral-100 opacity-50 dark:bg-neutral-900',
            imageBg.image?.overlayClass
          )}
        ></div>
      )}

      {/* Pattern background */}
      {patternBg && (
        <div
          className={cn(
            'absolute -inset-px z-0 rounded-[inherit]',
            patternBg?.pattern?.className
          )}
          style={patternBg?.pattern?.style}
        />
      )}

      {/* Video background */}
      {videoBg?.video && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={cn(
            'absolute inset-0 z-0 h-full w-full rounded-[inherit] object-cover',
            videoBg.video.className
          )}
        >
          <source src={videoBg.video.src} />
        </video>
      )}
      {/* Video Overley */}
      {videoBg?.video?.overlayClass && (
        <div
          className={cn(
            'absolute top-0 left-0 h-full w-full bg-neutral-100 opacity-50 dark:bg-neutral-900',
            videoBg.video?.overlayClass
          )}
        ></div>
      )}
    </>
  );
}
