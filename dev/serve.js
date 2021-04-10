import Vue from 'vue';
import Dev from './serve.vue';
import vuetify from './plugins/vuetify'
import SweetAlertVuetify from '@/entry.esm';
Vue.use(SweetAlertVuetify);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(Dev),
}).$mount('#app');
