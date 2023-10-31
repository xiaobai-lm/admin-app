import localeMessageBox from '@/components/message-box/locale/zh-CN';
import localeLogin from '@/views/login/locale/zh-CN';

import localeWorkplace from '@/views/dashboard/workplace/locale/zh-CN';
import localeSfda from '@/views/ehs/sfda/locale/zh-CN';
import localeProductLine from '@/views/ehs/product-line/locale/zh-CN';

import localeCare from '@/views/management/care/locale/zh-CN';
import localeRoster from '@/views/management/roster/locale/zh-CN';
import localeAttendance from '@/views/management/attendance/locale/zh-CN';
import localeStatistics from '@/views/management/statistics/locale/zh-CN';

import localeIndex from '@/views/jiangtong/index/locale/zh-CN';
import localeIntroduction from '@/views/jiangtong/index/introduction/locale/zh-CN';
import localeAdvantages from '@/views/jiangtong/index/advantages/locale/zh-CN';
import localeTechnique from '@/views/jiangtong/index/technique/locale/zh-CN';
import localeServes from '@/views/jiangtong/index/serves/locale/zh-CN';
import localeCase from '@/views/jiangtong/index/case/locale/zh-CN';
import localeNews from '@/views/jiangtong/index/news/locale/zh-CN';
import localeMessage from '@/views/jiangtong/index/message/locale/zh-CN';

import localeAbout from '@/views/jiangtong/about/locale/zh-CN';
import localeCulture from '@/views/jiangtong/about/culture/locale/zh-CN';
import localeCertificate from '@/views/jiangtong/about/certificate/locale/zh-CN';
import localeBusiness from '@/views/jiangtong/about/business/locale/zh-CN';
import localeCustomer from '@/views/jiangtong/about/customer/locale/zh-CN';

import localePrescription from '@/views/jiangtong/prescription/locale/zh-CN';
import localeTag from '@/views/jiangtong/prescription/tag/locale/zh-CN';
import localeContent from '@/views/jiangtong/prescription/content/locale/zh-CN';
import localeChanges from '@/views/jiangtong/prescription/changes/locale/zh-CN';

import localeSettings from './zh-CN/settings';

export default {
  'menu.dashboard': '仪表盘',
  'menu.ehs': '不良事件',
  'menu.management': '人员管理',
  'menu.jiangtong': '疆通科技',

  'menu.server.dashboard': '仪表盘-服务端',
  'menu.server.workplace': '工作台-服务端',
  'menu.server.monitor': '实时监控-服务端',
  'menu.list': '列表页',
  'menu.result': '结果页',
  'menu.exception': '异常页',
  'menu.form': '表单页',
  'menu.profile': '详情页',
  'menu.visualization': '数据可视化',
  'menu.user': '个人中心',
  'menu.arcoWebsite': 'Arco Design',
  'menu.faq': '常见问题',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',
  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeWorkplace,
  ...localeSfda,
  ...localeProductLine,
  ...localeCare,
  ...localeRoster,
  ...localeAttendance,
  ...localeStatistics,
  ...localeIndex,
  ...localeIntroduction,
  ...localeAdvantages,
  ...localeTechnique,
  ...localeServes,
  ...localeCase,
  ...localeNews,
  ...localeMessage,
  ...localeAbout,
  ...localeCulture,
  ...localeCertificate,
  ...localeBusiness,
  ...localeCustomer,
  ...localePrescription,
  ...localeTag,
  ...localeContent,
  ...localeChanges,
};
