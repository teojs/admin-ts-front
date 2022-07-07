import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import index from '@/pages/index.vue'
import defaultLayout from '@/layouts/default.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: defaultLayout,
    children: [
      {
        path: '/index',
        name: 'home',
        component: index,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
