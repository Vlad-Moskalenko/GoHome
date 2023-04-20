// import Vuex from 'vuex'
import { createStore } from 'vuex'
import authModules from './modules/auth'
// import VuexPersist from 'vuex-persist'

// const vuexLocalStorage = new VuexPersist({
//   key: 'auth',
//   storage: window.localStorage,
//   reducer: (state) => ({ token: state.auth.token })
// })

const store = createStore({
  modules: {
    auth: authModules
  }
  // plugins: [vuexLocalStorage.plugin]
})

export default store
