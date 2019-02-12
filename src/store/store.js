import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import Api from '@/services/Api'

Vue.use(Vuex)
Vue.use(VueAxios, Api)

export const store = new Vuex.Store({
  state: {
    coins: []
  },
  mutations: {
    SET_COINS (state, coins) {
      state.coins = coins
    }
  },
  actions: {
    loadCoins ({ commit }) {
      // Api()
      //   .get('/listings/latest?limit=100/')
      //   .then(r => r.data)
      //   .then(coins => console.log(coins))
      //   .catch(err => console.log(err))
    }
  }
})
