import { createRouter, createWebHistory } from 'vue-router'
import defaultLayout from '@/layouts/default.vue'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: defaultLayout,
      children: routes,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue'),
    },
  ],
})

export default router
