import { useRef, useState, useMemo } from 'react';
import { isVideoUrl } from '../../../utils';
import { Play } from 'lucide-react';
import ImageElement from './ImageElement';
import type { VideoEle } from '../../../types/section.types';

type Props = VideoEle & { className?: string };

export default function VideoElement(props: Props) {
  const isVideoFile = useMemo(() => isVideoUrl(props.src), [props.src]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showOverlay, setShowOverlay] = useState(true);

  const playVideo = async () => {
    if (!isVideoFile) {
      setShowOverlay(false);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    try {
      await video.play();
      setShowOverlay(false);
      video.setAttribute('controls', '');
    } catch (err) {
      console.warn('Playback failed:', err);
      video.setAttribute('controls', '');
    }
  };

  const onVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!video.paused) {
      video.pause();
      setShowOverlay(true);
      video.removeAttribute('controls');
    }
  };

  const onVideoEnded = () => {
    setShowOverlay(true);
    videoRef.current?.removeAttribute('controls');
  };

  return (
    <div className="relative aspect-video overflow-hidden">
      {/* VIDEO */}
      {isVideoFile && (
        <video
          {...props}
          ref={videoRef}
          preload="metadata"
          playsInline
          className="h-full w-full object-cover"
          onClick={onVideoClick}
          onEnded={onVideoEnded}
        />
      )}

      {/* VIDEO embed */}
      {!isVideoFile && props.src && !showOverlay && (
        <iframe
          src={`${props.src}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="size-full"
          title="Embedded Video"
        />
      )}

      {/* preview for iframe embeds */}
      {!isVideoFile && (
        <ImageElement
          {...{ src: props.poster as string }}
          className="size-full object-cover transition-all duration-200 ease-out group-hover:brightness-[0.8]"
          alt="Video Poster"
        />
      )}

      {/* PLAY button */}
      {showOverlay && (
        <div
          onClick={playVideo}
          className="absolute inset-0 flex scale-[0.9] cursor-pointer items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100"
        >
          <div className="bg-primary/10 z-30 flex size-28 items-center justify-center rounded-full backdrop-blur-md">
            <div className="from-primary/30 to-primary relative flex size-20 scale-100 items-center justify-center rounded-full bg-linear-to-b shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]">
              <Play
                className="size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
                style={{
                  filter:
                    'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))',
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
