import { createRouter, createWebHistory, isNavigationFailure } from 'vue-router'
import defaultLayout from '@/layouts/default.vue'
import routes from './routes'
import { loadingBar } from '@/utils/createDiscreteApi'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: defaultLayout,
      children: routes,
      meta: {
        title: '后台管理',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  loadingBar.start()
  next()
})

router.afterEach((to, from, failure) => {
  if (isNavigationFailure(failure)) {
    loadingBar.error()
  }
  loadingBar.finish()
})

export default router
