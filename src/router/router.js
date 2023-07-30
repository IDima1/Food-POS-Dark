import { createRouter, createWebHistory } from 'vue-router';

import vHomepage from '../components/Homepage/v-homepage.vue'
import vDashboard from '../components/Dashboad/v-dashboard.vue'
import vSetting from '../components/Settings/v-setting.vue'

import vPayment from '../components/Homepage/v-payment.vue'

const routes = [
    {
        path: '/',
        component: vHomepage
    },
    {
        path: '/dashboard',
        component: vDashboard
    },
    {
        path: '/settings',
        component: vSetting
    },
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;