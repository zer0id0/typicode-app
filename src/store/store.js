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
    async loadUsers ({ commit }) {
      try {
        const response = await Api().get('/users')
        commit('SET_USERS', response.data)
      } catch (err) {
        console.log(err)
      }
    },
    loadPosts ({ commit }) {
      Api()
        .get('/posts')
        .then(response => response.data)
        .then(posts => commit('SET_POSTS', posts))
        .catch(err => console.log(err))
    },
    loadComments ({ commit, pages }) {
      Api()
        .get(`/comments?_limit=${pages}`)
        .then(response => response.data)
        //* you can change the name of data at second then
        .then(comments => commit('SET_COMMENTS', comments))
        .catch(err => console.log(err))
    },
    async filterComments ({ commit }, e) {
      // Get selected number
      try {
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
        const response = await Api().get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        commit('SET_COMMENTS', response.data)
      } catch (err) {
        console.log(err)
      }
    }
  },
  getters: {
    POSTS: state => {
      return state.posts
    },
    USERS: state => {
      return state.users
    },
    COMMENTS: state => {
      return state.comments
    }
  }
})
