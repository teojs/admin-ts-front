import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
const defaultLayout = () => import('@/layouts/default.vue')

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
      component: () =>
        import(/* webpackChunkName: "login" */ '../views/login.vue'),
    },
  ],
})

export default router
