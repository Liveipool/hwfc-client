import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logged: false
  },
  mutations: {
    logIn (state) {
      state.logged = true
    },
    logOut (state) {
      state.logged = false
    }
  }
})
