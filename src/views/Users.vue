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
import UsersList from '@/components/UsersList.vue'
import axios from 'axios'

export default {
  name: 'Users',
  components: {
    'users-list': UsersList
  },
  data() {
    return {
      users: []
    }
  },
  watch: {
    users: {
      deep: true,
      handler: 'loadUsers'
    }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      axios
        .get('http://localhost:3004/users')
        .then(response => response.data)
        .then(users => {
          this.users = users
        })
    },
    deleteUser(user) {
      axios
        .delete('http://localhost:3004/users/' + user.id)
        .then(() => {
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
