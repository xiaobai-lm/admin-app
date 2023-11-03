import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/ehs',
  name: 'ehs',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.ehs',
    requiresAuth: true,
    roles: ['admin'],

    icon: 'icon-dashboard',
    order: 0,
  },
  children: [
    {
      path: 'sfda',
      name: 'sfda',
      component: () => import('@/views/ehs/sfda/index.vue'),
      meta: {
        locale: 'menu.ehs.sfda',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'product-line',
      name: 'ProductLine',
      component: () => import('@/views/ehs/product-line/index.vue'),
      meta: {
        locale: 'menu.ehs.product',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default DASHBOARD;
