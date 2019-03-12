import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Users from '@/views/Users.vue'
import EditAccount from '@/views/EditAccount.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/accounts/:accountId/edit',
      name: 'editAccount',
      component: EditAccount
    }
  ]
})
