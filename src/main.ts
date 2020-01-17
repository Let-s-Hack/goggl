import Vue from 'vue';
import moment from 'moment';
import App from '@/App.vue';
import '@/registerServiceWorker';
import router from '@/router';
import '@/assets/sass/main.scss';
import SvgIcon from '~/atoms/SvgIcon.vue';

Vue.filter('format', (value: string, format: string): string => moment(value).format(format));

Vue.config.productionTip = false;

Vue.component('SvgIcon', SvgIcon);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
