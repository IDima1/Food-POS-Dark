import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '@/router/index.js'
import '@/styles/app.sass'
import { useI18n } from 'vue-i18n'
import { i18n } from '@/localization'

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount('#app');
