import { AppState } from '@/types/store/app'

export default {
  namespaced: true,
  state: {
    colorScheme: 'light',
  },
  mutations: {
    switchTheme(state: AppState, colorScheme: 'dark' | 'light') {
      state.colorScheme = colorScheme
      document.documentElement.setAttribute('data-theme', colorScheme)
    },
  },
}
