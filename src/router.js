import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/Users.vue')
    },
    {
      path: '/edit/:id',
      name: 'EditUser',
      component: () => import('@/views/EditUser.vue')
    },
    {
      path: '/create-user',
      name: 'CreateUser',
      component: () => import('@/views/CreateUser.vue')
    },
    {
      path: '/phonebook',
      name: 'phonebook',
      component: () => import('@/views/Phonebook.vue')
    }
  ]
})
