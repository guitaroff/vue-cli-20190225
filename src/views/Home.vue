<template>
  <div>
    <h2>Список пользователей</h2>
    <div v-if="!users.length" class="alert alert-warning">
      Загрузка...
    </div>
    <users-list v-else v-bind:users="users"></users-list>
  </div>
</template>

<script>
import UsersList from '@/components/UsersList.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    'users-list': UsersList
  },
  data: function() {
    return {
      users: []
    }
  },
  mounted() {
    this.loadUsers()
  },
  watch: {
    users: function() {
      console.log('Обновился список пользователей.')
    }
  },
  methods: {
    loadUsers() {
      axios
        .get('http://localhost:3004/users')
        .then(response => response.data)
        .then(users => {
          console.log('DATA', users)
          this.users = users
          console.log('USERS', this.users)
        })
    }
  }
}
</script>
