<template>
  <div>
    <h2>Список пользователей</h2>
    <div v-if="!users.length" class="alert alert-warning">
      Загрузка...
    </div>
    <users-list v-else :users="users" @delete-user="deleteUser"></users-list>
  </div>
</template>

<script>
import axios from '@/axios.js'

export default {
  name: 'Users',
  components: {
    'users-list': () => import('@/components/UsersList.vue')
  },
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      axios
        .get('/users')
        .then(response => response.data)
        .then(users => {
          this.users = users
        })
    },
    deleteUser(user) {
      axios
        .delete('/users/' + user.id)
        .then(() => {
          this.loadUsers()
          this.$router.push('/users')
        })
        .catch(error => {
          if (error.response) {
            console.log('error response', error.response)
          } else if (error.request) {
            console.log('error request', error.request)
          } else {
            console.log('Error message', error.message)
          }
        })
    }
  }
}
</script>
