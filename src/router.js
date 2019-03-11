import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import EditAccount from '@/views/EditAccount.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/accounts/:accountId/edit',
      name: 'editAccount',
      component: EditAccount
    }
  ]
})
