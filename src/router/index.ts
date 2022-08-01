import { createRouter, createWebHistory, isNavigationFailure } from 'vue-router'
import defaultLayout from '@/layouts/default.vue'
import NotFound from '@/views/404.vue'
import routes from './routes'
import { loadingBar } from '@/utils/createDiscreteApi'
import store from '@/store'
import _ from 'lodash'
import type { KeepAliveTab } from '@/types/store/app'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: defaultLayout,
      children: routes,
      redirect: '/home',
      meta: {
        title: '后台管理',
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login.vue'),
    },
    {
      name: 'NotFound',
      path: '/:pathMatch(.*)*',
      component: NotFound,
      meta: {
        title: '页面不存在',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  loadingBar.start()
  const currentRoute = _.last(to.matched)
  if (currentRoute?.meta.keepAlive) {
    const keepAliveTabs: KeepAliveTab[] = store.getters['app/keepAliveTabs']
    const existIndex = _.find(keepAliveTabs, { fullPath: to.fullPath })
    const caches = to.matched.map((i) => i.name)
    if (!existIndex) {
      store.commit('app/addKeepAliveTab', {
        path: to.path,
        title: to.meta.title,
        fullPath: to.fullPath,
        caches,
      } as KeepAliveTab)
      store.commit('app/addCaches', caches)
    }
  }
  next()
})

router.afterEach((to, from, failure) => {
  if (isNavigationFailure(failure)) {
    loadingBar.error()
    return
  }
  const title = to.meta.title
    ? to.meta.title + ' - 后台管理模板'
    : '后台管理模板'
  document.title = title
  loadingBar.finish()
})

export default router
