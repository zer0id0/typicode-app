import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import Api from '@/services/Api'

Vue.use(Vuex)
Vue.use(VueAxios, Api)
// Todo will need to move into modules
export const store = new Vuex.Store({
  state: {
    users: [],
    posts: [],
    comments: []
  },
  mutations: {
    SET_USERS (state, payload) {
      state.users = payload
    },
    SET_POSTS (state, payload) {
      state.posts = payload
    },
    SET_COMMENTS (state, payload) {
      state.comments = payload
    }
  },
  actions: {
    loadUsers ({ commit }) {
      Api()
        .get('/users')
        .then(response => response.data)
        .then(users => commit('SET_USERS', users))
        .catch(err => console.log(err))
    },
    loadPosts ({ commit }) {
      Api()
        .get('/posts')
        .then(response => response.data)
        .then(posts => commit('SET_POSTS', posts))
        .catch(err => console.log(err))
    },
    loadComments ({ commit }) {
      Api()
        .get('/comments')
        .then(response => response.data)
        //* you can change the name of data at second then
        .then(comments => commit('SET_COMMENTS', comments))
        .catch(err => console.log(err))
    }
  },
  getters: {
    POSTS: state => {
      return state.posts
    },
    USERS: state => {
      return state.users
    }
  }
})
