import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/jiangtong',
  name: 'Jiangtong',
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
        roles: ['*'],
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
          path: 'servesTag',
          name: 'ServesTag',
          component: () =>
            import('@/views/jiangtong/index/servesTag/index.vue'),
          meta: {
            locale: 'menu.jiangtong.index.servesTag',
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
    {
      path: 'about',
      name: 'About',
      component: () => import('@/views/jiangtong/about/index.vue'),
      meta: {
        locale: 'menu.jiangtong.about',
        requiresAuth: true,
        roles: ['*'],
      },
      children: [
        {
          path: 'culture',
          name: 'Culture',
          component: () => import('@/views/jiangtong/about/culture/index.vue'),
          meta: {
            locale: 'menu.jiangtong.about.culture',
            requiresAuth: true,
            roles: ['*'],
          },
        },
        {
          path: 'certificate',
          name: 'Certificate',
          component: () =>
            import('@/views/jiangtong/about/certificate/index.vue'),
          meta: {
            locale: 'menu.jiangtong.about.certificate',
            requiresAuth: true,
            roles: ['*'],
          },
        },
        {
          path: 'business',
          name: 'Business',
          component: () => import('@/views/jiangtong/about/business/index.vue'),
          meta: {
            locale: 'menu.jiangtong.about.business',
            requiresAuth: true,
            roles: ['*'],
          },
        },
        {
          path: 'customer',
          name: 'Customer',
          component: () => import('@/views/jiangtong/about/customer/index.vue'),
          meta: {
            locale: 'menu.jiangtong.about.customer',
            requiresAuth: true,
            roles: ['*'],
          },
        },
      ],
    },
    {
      path: 'prescription',
      name: 'Prescription',
      component: () => import('@/views/jiangtong/prescription/index.vue'),
      meta: {
        locale: 'menu.jiangtong.prescription',
        requiresAuth: true,
        roles: ['*'],
      },
      children: [
        {
          path: 'tag',
          name: 'Tag',
          component: () =>
            import('@/views/jiangtong/prescription/tag/index.vue'),
          meta: {
            locale: 'menu.jiangtong.prescription.tag',
            requiresAuth: true,
            roles: ['*'],
          },
        },
        {
          path: 'content',
          name: 'Content',
          component: () =>
            import('@/views/jiangtong/prescription/content/index.vue'),
          meta: {
            locale: 'menu.jiangtong.prescription.content',
            requiresAuth: true,
            roles: ['*'],
          },
        },
        {
          path: 'changes',
          name: 'Changes',
          component: () =>
            import('@/views/jiangtong/prescription/changes/index.vue'),
          meta: {
            locale: 'menu.jiangtong.prescription.changes',
            requiresAuth: true,
            roles: ['*'],
          },
        },
      ],
    },
    {
      path: 'wxjob',
      name: 'Wxjob',
      component: () => import('@/views/jiangtong/wxjob/index.vue'),
      meta: {
        locale: 'menu.jiangtong.wxjob',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default DASHBOARD;
