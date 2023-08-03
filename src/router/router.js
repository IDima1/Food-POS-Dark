import { 
    createRouter, 
    createWebHistory 
} from 'vue-router';

import ROUTE_NAMES from '@/enums/enums.js'

const routes = [
    {
        path: '/',
        name: ROUTE_NAMES.home,
        component: () => import('@/pages/wrappers/Homepage.vue'),
    },
    {
        path: '/dashboard',
        name: ROUTE_NAMES.dashboard,
        component: () => import('@/pages/wrappers/Dashboard.vue'),
    },
    {
        path: '/settings',
        name: ROUTE_NAMES.settings,
        component: () => import('@/pages/wrappers/Settings.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: () =>({top: 0, left: 0}),
    
});

export default router;
