import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    navbarTitle: 'REST api app',
    users: []
  },
  getters: {
    titleLength: state => state.navbarTitle.length
  },
  mutations: {
    changeTitle: (state, payload) => (state.navbarTitle = payload),
    setUsers: (state, payload) => (state.users = payload)
  },
  actions: {
    loadUsers({ commit }) {
      console.log('loadUsers')
      axios
        .get('/users')
        .then(response => response.data)
        .then(users => {
          commit('setUsers', users)
        })
    }
  }
})

export default store
