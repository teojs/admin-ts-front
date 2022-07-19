import { AppState } from '@/types/store/app'
import _ from 'lodash'
import type { MenuOption } from 'naive-ui'

export default {
  namespaced: true,

  state: {
    colorScheme: 'light',
    keepAliveTabs: [
      {
        key: '/index',
        label: '首页',
      },
    ],
  } as AppState,

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
    addKeepAliveTab(state: AppState, tabs: MenuOption) {
      const index = _.findIndex(state.keepAliveTabs, {
        key: tabs.key,
      })
      if (index === -1) {
        state.keepAliveTabs.push(tabs)
      }
    },

    /**
     * 关闭已打开的页面
     *
     * @param {AppState} state
     * @param {{
     *   tab: MenuOption
     *   isActive: boolean
     * }} payload
     */
    rmKeepAliveTab(
      state: AppState,
      payload: {
        tab: MenuOption
        isActive: boolean
      }
    ) {
      const index = _.findIndex(state.keepAliveTabs, {
        key: payload.tab.key,
      })
      if (index > -1) {
        state.keepAliveTabs.splice(index, 1)
      }
    },
  },
}
