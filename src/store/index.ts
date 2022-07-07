import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: {
      userName: '',
      token: '',
    },
  },
  getters: {},
  mutations: {
    login(state, payload: { userName: string, token: string }) {
      console.log(payload)
      state.userInfo.userName = payload.userName
      state.userInfo.token = payload.token
    },
  },
  actions: {
  },
  modules: {
  },
})
