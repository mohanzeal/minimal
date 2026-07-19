import { createBrowserRouter } from 'react-router';
import Index from '@/pages/Index';
import Pricing from '@/pages/Pricing';
import Faq from '@/pages/Faq';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/faq',
    element: <Faq />,
  },
]);
