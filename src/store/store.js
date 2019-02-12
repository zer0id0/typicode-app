import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import Api from '@/services/Api'

Vue.use(Vuex)
Vue.use(VueAxios, Api)

export const store = new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    SET_USERS (state, users) {
      state.users = users
    }
  },
  actions: {
    loadUsers ({ commit }) {
      Api()
        .get('/users')
        .then(response => response.data)
        .then(users => commit('SET_USERS', users))
        .catch(err => console.log(err))
    }
  }
})
