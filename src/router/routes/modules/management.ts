import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/management',
  name: 'management',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '人员管理',
    requiresAuth: true,
    icon: 'icon-management',
    order: 2,
  },
  children: [
    {
      path: '/',
      name: 'Workplace',
      component: () => import('@/views/management/index.vue'),
      meta: {
        locale: '花名册',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
  ],
};

export default DASHBOARD;
