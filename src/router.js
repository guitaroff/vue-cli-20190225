import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Users from '@/views/Users.vue'
import EditUser from '@/views/EditUser.vue'
import CreateUser from '@/views/CreateUser.vue'

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
      path: '/edit/:id',
      name: 'EditUser',
      component: EditUser
    },
    {
      path: '/create-user',
      name: 'CreateUser',
      component: CreateUser
    }
  ]
})
