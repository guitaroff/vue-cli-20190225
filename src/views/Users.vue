<template>
  <div>
    <h2>Список пользователей</h2>
    <div v-if="!users.length" class="alert alert-warning">
      Загрузка...
    </div>
    <users-list v-else :users="users"></users-list>
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
    }
  }
}
</script>
