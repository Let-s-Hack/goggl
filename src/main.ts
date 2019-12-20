import Vue from 'vue';
import App from '@/App.vue';
import '@/registerServiceWorker';
import router from '@/router';
import store from '@/store';
import '@/assets/sass/main.scss';
import SvgIcon from '~/atoms/SvgIcon.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  components: {
    SvgIcon,
  },
  render: h => h(App),
}).$mount('#app');
