import Vuex from 'vuex'
import authModules from './modules/auth'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  key: 'auth',
  storage: window.localStorage,
  reducer: (state) => ({ token: state.auth.token })
})

const store = new Vuex.Store({
  modules: {
    auth: authModules
  },
  plugins: [vuexLocal.plugin]
})

export default store
