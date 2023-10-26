import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/management',
  name: 'management',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.management',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 3,
  },
  children: [
    {
      path: 'roster',
      name: 'Roster',
      component: () => import('@/views/management/roster/index.vue'),
      meta: {
        locale: 'menu.management.roster',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
    {
      path: 'care',
      name: 'Care',
      component: () => import('@/views/management/care/index.vue'),
      meta: {
        locale: 'menu.management.care',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
    {
      path: 'attendance',
      name: 'Attendance',
      component: () => import('@/views/management/attendance/index.vue'),
      meta: {
        locale: 'menu.management.attendance',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
    {
      path: 'statistics',
      name: 'Statistics',
      component: () => import('@/views/management/statistics/index.vue'),
      meta: {
        locale: 'menu.management.statistics',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
  ],
};

export default DASHBOARD;
