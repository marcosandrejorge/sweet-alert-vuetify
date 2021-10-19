import Vue from 'vue';
import Dev from './serve1.vue';
import vuetify from './plugins/vuetify';
import SweetAlertVuetify from '@/entry.esm';
Vue.use(
  SweetAlertVuetify, 
  vuetify,
  // {
  //   property: '$dialog' //this.$dialog() => default this.$swal()
  // }
);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(Dev),
}).$mount('#app');
