import { createWebHistory, createRouter } from 'vue-router';
import index from '@/pages/index.vue';
import Pricing from '@/pages/Pricing.vue';
import Faq from '@/pages/Faq.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    props: {
      pageId: 'home',
    },
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing,
    props: {
      pageId: 'pricing',
    },
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq,
    props: {
      pageId: 'faq',
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
