import { loginUser, registerUser, logout } from '../../services/auth.service'

const initialState = {
  user: null,
  token: ''
}

const authModules = {
  namespaced: true,
  state: { ...initialState },
  getters: {
    isLoggedIn(state) {
      return Boolean(state.token)
    }
  },
  mutations: {
    setUserData(state, userData) {
      state.user = userData
    },
    setToken(state, token) {
      console.log(state.user)
      state.token = token
    },
    clearState(state) {
      Object.assign(state, { ...initialState })
    }
  },
  actions: {
    async login({ commit }, payload) {
      const {
        data: { user, token }
      } = await loginUser(payload)

      commit('setUserData', user)
      commit('setToken', token)
    },
    async register({ commit }, payload) {
      const {
        data: { user, token }
      } = await registerUser(payload)

      commit('setUserData', user)
      commit('setToken', token)
    },
    async logout({ commit }) {
      await logout()
      commit('clearState')
    }
  }
}

export default authModules
