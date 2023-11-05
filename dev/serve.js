import { createApp } from 'vue';
import Dev from './serve1.vue';
import vuetify from './plugins/vuetify';
import SweetAlertVuetify from '@/entry.esm';

const app = createApp(Dev);
app.use(vuetify);
app.use(SweetAlertVuetify, vuetify);

app.mount('#app');
