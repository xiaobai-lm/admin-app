import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/jiangtong',
  name: 'jiangtong',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.jiangtong',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 3,
  },
  children: [
    {
      path: 'index',
      name: 'Index',
      component: () => import('@/views/jiangtong/index/index.vue'),
      meta: {
        locale: 'menu.jiangtong.index',
        requiresAuth: true,
        roles: ['admin'],
      },
      children: [
        {
          path: 'introduction',
          name: 'Introduction',
          component: () =>
            import('@/views/jiangtong/index/introduction/index.vue'),
          meta: {
            locale: 'menu.jiangtong.index.introduction',
            requiresAuth: true,
            roles: ['*'],
          },
        },
        {
          path: 'advantages',
          name: 'Advantages',
          component: () =>
            import('@/views/jiangtong/index/advantages/index.vue'),
          meta: {
            locale: 'menu.jiangtong.index.advantages',
            requiresAuth: true,
            roles: ['*'],
          },
        },
        {
          path: 'technique',
          name: 'Technique',
          component: () =>
            import('@/views/jiangtong/index/technique/index.vue'),
          meta: {
            locale: 'menu.jiangtong.index.technique',
            requiresAuth: true,
            roles: ['*'],
          },
        },
        {
          path: 'serves',
          name: 'Serves',
          component: () => import('@/views/jiangtong/index/serves/index.vue'),
          meta: {
            locale: 'menu.jiangtong.index.serves',
            requiresAuth: true,
            roles: ['*'],
          },
        },
        {
          path: 'case',
          name: 'Caes',
          component: () => import('@/views/jiangtong/index/case/index.vue'),
          meta: {
            locale: 'menu.jiangtong.index.case',
            requiresAuth: true,
            roles: ['*'],
          },
        },
        {
          path: 'news',
          name: 'News',
          component: () => import('@/views/jiangtong/index/news/index.vue'),
          meta: {
            locale: 'menu.jiangtong.index.news',
            requiresAuth: true,
            roles: ['*'],
          },
        },
        {
          path: 'message',
          name: 'Message',
          component: () => import('@/views/jiangtong/index/message/index.vue'),
          meta: {
            locale: 'menu.jiangtong.index.message',
            requiresAuth: true,
            roles: ['*'],
          },
        },
      ],
    },
  ],
};

export default DASHBOARD;
