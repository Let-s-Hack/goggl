import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import firestore from './firestore';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  data: {
    db: firestore,
  },
  render: h => h(App),
}).$mount('#app');
