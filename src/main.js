import { createApp } from 'vue'
import App from './App.vue'
import store from '@/pinia/store'
import router from '@/router/router'

const app = createApp(App);
app.use(store);
app.use(router);

router.isReady().then(() => {
    app.mount('#app');
})