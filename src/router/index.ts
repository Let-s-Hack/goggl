import Vue from 'vue';
import VueRouter from 'vue-router';
import Timer from '../pages/Timer.vue';
import Reports from '../pages/Reports.vue';
import Calendar from '../pages/Calendar.vue';

Vue.use(VueRouter);

const routes = [
  // TimerページをHome画面とする（本家と同じ）
  {
    path: '/',
    redirect: '/timer',
  },
  {
    path: '/timer',
    name: 'timer',
    component: Timer,
  },
  {
    path: '/reports',
    name: 'reports',
    // 遅延ロード。こうすることでページを開いた時に読み込まれる。
    component: () => import(/* webpackChunkName: "reports" */ '../pages/Reports.vue'),
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import(/* webpackChunkName: "calendar" */ '../pages/Calendar.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
