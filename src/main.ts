import Vue from 'vue';
import moment from 'moment';
import App from '@/App.vue';
import '@/registerServiceWorker';
import router from '@/router';
import '@/assets/sass/main.scss';
import SvgIcon from '~/atoms/SvgIcon.vue';

Vue.filter('format', (value: string, format: string): string => moment(value).format(format));
Vue.filter('displayTotal', (total: number): string => {
  const hours: number = Math.floor(total / 3600);
  const minutes: number = Math.floor((total - (hours * 3600)) / 60);
  const seconds: number = total - (hours * 3600) - (minutes * 60);
  const displayTotal: string = (
    `${hours}:`
    + `${minutes < 10 ? '0' : ''}${minutes}:`
    + `${seconds < 10 ? '0' : ''}${seconds}`
  );

  return displayTotal;
});

Vue.config.productionTip = false;

Vue.component('SvgIcon', SvgIcon);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
