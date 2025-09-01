import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'captura-pagare',
            component: () => import('../views/FiltroView.vue'),
        },
    ],
})

export default router
