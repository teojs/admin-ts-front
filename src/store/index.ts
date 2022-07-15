import { createStore } from 'vuex'
import { RootState } from '@/types/store'

export default createStore<RootState>({
  state: {
    userInfo: {
      userName: '',
      token: '',
    },
    colorScheme: 'light',
  },
  getters: {},
  mutations: {
    login(state, payload: { userName: string; token: string }) {
      state.userInfo.userName = payload.userName
      state.userInfo.token = payload.token
    },
    switchTheme(state, colorScheme: 'dark' | 'light') {
      state.colorScheme = colorScheme
      document.documentElement.setAttribute('data-theme', colorScheme)
    },
  },
  actions: {},
  modules: {},
})
