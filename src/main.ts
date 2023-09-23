import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import i18n from './i18n';
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/lara-dark-blue/theme.css';

import './styles/index.scss'

const app = createApp(App);

app.use(i18n);
app.use(PrimeVue);
app.use(router);

app.mount('#app');
