import { AppState, KeepAliveTab } from '@/types/store/app'
import _ from 'lodash'

export default {
  namespaced: true,

  state: {
    colorScheme: 'light',
    keepAliveTabs: [
      {
        title: '首页',
        fullPath: '/home',
        path: '/home',
        name: 'home',
      },
    ],
    cachesRecord: [
      {
        name: 'Home',
        count: 1,
      },
    ],
  } as AppState,

  getters: {
    colorScheme(state: AppState) {
      return state.colorScheme
    },
    keepAliveTabs(state: AppState) {
      return state.keepAliveTabs
    },
    caches(state: AppState) {
      return state.cachesRecord.filter((i) => i.count > 0).map((v) => v.name)
    },
  },

  mutations: {
    /**
     * 切换主题
     *
     * @param {AppState} state
     * @param {('dark' | 'light')} colorScheme
     */
    switchTheme(state: AppState, colorScheme: 'dark' | 'light') {
      state.colorScheme = colorScheme
      document.documentElement.setAttribute('data-theme', colorScheme)
    },

    /**
     * 添加已打开的页面
     *
     * @param {AppState} state
     * @param {MenuOption} tabs
     */
    addKeepAliveTab(state: AppState, tabs: KeepAliveTab) {
      state.keepAliveTabs.push(tabs)
    },

    /**
     * 关闭已打开的页面
     *
     * @param {AppState} state
     * @param {{
     *   tab: KeepAliveTab
     *   isActive: boolean
     * }} payload
     */
    rmKeepAliveTab(
      state: AppState,
      payload: {
        tab: KeepAliveTab
        isActive: boolean
      }
    ) {
      const index = _.findIndex(state.keepAliveTabs, {
        fullPath: payload.tab.fullPath,
      })
      if (index > -1) {
        state.keepAliveTabs.splice(index, 1)
      }
    },

    addCaches(state: AppState, caches: string[]) {
      caches.forEach((i) => {
        const find = state.cachesRecord.find(({ name }) => name === i)
        if (find) {
          ++find.count
        } else {
          state.cachesRecord.push({ name: i, count: 1 })
        }
      })
    },

    rmCaches(state: AppState, caches: string[]) {
      caches.forEach((i) => {
        const find = state.cachesRecord.find(({ name }) => name === i)
        if (find) {
          --find.count
        } else {
          console.error('正在尝试删除一个没有添加进缓存的路由', i)
        }
      })
    },
  },
}
