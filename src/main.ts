import Vue from 'vue';
import moment from 'moment';
import App from '@/App.vue';
import '@/registerServiceWorker';
import router from '@/router';
import '@/assets/sass/main.scss';
import SvgIcon from '~/atoms/SvgIcon.vue';

Vue.filter('format', (value: string, format: string): string => moment(value).format(format));
Vue.filter('toTime', (value: number): string => {
  if (value <= 0) return '0:00:00';

  const hours: number = Math.floor(value / 3600);
  const minutes: number = Math.floor((value - hours * 3600) / 60);
  const seconds: number = Math.floor(value - hours * 3600 - minutes * 60);

  return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
});

Vue.config.productionTip = false;

Vue.component('SvgIcon', SvgIcon);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
