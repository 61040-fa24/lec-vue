import './assets/base.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from '@/router';

import AppRouter from './AppRouter.vue'

const pinia = createPinia();
const app = createApp(AppRouter);

app.use(pinia);
app.use(router);
app.mount('#app')
