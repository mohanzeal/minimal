import path from 'path';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/vite';
import { DEFAULT_THEME } from './app/constants';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: {
    dirs: [
      '~/components',
      {
        path: '~/components/ui',
        pathPrefix: false,
        extensions: ['vue'],
      },
    ],
  },
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  modules: ['@nuxt/eslint', '@nuxtjs/color-mode'],

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        '@vueuse/core',
        'class-variance-authority',
        'clsx',
        'embla-carousel-vue',
        'lucide-vue-next',
        'motion-v',
        'reka-ui',
        'tailwind-merge',
        'vee-validate',
      ],
    },
  },
  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs',
      },
    },
  },
  colorMode: {
    preference: DEFAULT_THEME,
    fallback: DEFAULT_THEME,
    globalName: '__NUXT_COLOR_MODE__',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage',
    storageKey: 'nuxt-color-mode',
  },
});
