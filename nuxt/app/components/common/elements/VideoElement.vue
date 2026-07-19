<script setup lang="ts">
import { isVideoUrl } from '@/utils';
import { computed, ref } from 'vue';
import type { VideoEle } from '@/types/section.types';
import { ImageElement } from './index';

defineOptions({ inheritAttrs: false });
const props = defineProps<VideoEle>();

const isVideoFile = computed(() => isVideoUrl(props.src));
const videoRef = ref<HTMLVideoElement | null>(null);
const showOverlay = ref(true);

const playVideo = async () => {
  if (!isVideoFile.value) {
    showOverlay.value = false;
    return;
  }

  const video = videoRef.value;
  if (!video) return;

  try {
    await video.play();
    showOverlay.value = false;
    video.setAttribute('controls', '');
  } catch (err) {
    console.warn('Playback failed:', err);
    video.setAttribute('controls', '');
  }
};

const onVideoClick = () => {
  const video = videoRef.value;
  if (!video) return;

  if (!video.paused) {
    video.pause();
    showOverlay.value = true;
    video.removeAttribute('controls');
  }
};

const onVideoEnded = () => {
  showOverlay.value = true;
  videoRef.value?.removeAttribute('controls');
};
</script>

<template>
  <div class="relative aspect-video overflow-hidden">
    <!-- VIDEO -->
    <video
      v-if="isVideoFile"
      v-bind="{ ...props, ...$attrs }"
      ref="videoRef"
      preload="metadata"
      playsinline
      class="h-full w-full object-cover"
      @click="onVideoClick"
      @ended="onVideoEnded"
    ></video>
    <!-- VIDEO embed -->
    <iframe
      v-else-if="props.src && !showOverlay"
      :src="`${props.src}?autoplay=1`"
      allow="autoplay; encrypted-media"
      allowfullscreen
      class="h-full w-full rounded-lg"
    />

    <!-- preview for iframe embeds -->
    <ImageElement
      v-if="!isVideoFile"
      v-bind="{ src: props.poster as string }"
      :dialog="{ src: props.poster as string }"
      class="size-full object-cover transition-all duration-200 ease-out group-hover:brightness-[0.8]"
    />

    <!-- PLAY button -->
    <div
      v-if="showOverlay"
      class="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100"
    >
      <div
        class="bg-primary/10 z-30 flex size-28 items-center justify-center rounded-full backdrop-blur-md"
      >
        <div
          @click="playVideo"
          class="from-primary/30 to-primary relative flex size-20 scale-100 items-center justify-center rounded-full bg-gradient-to-b shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]"
        >
          <!-- SVG PLAY ICON -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-play size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
            style="
              filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
                drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
            "
          >
            <polygon points="6 3 20 12 6 21 6 3"></polygon>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
