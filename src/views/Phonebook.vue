<template>
  <div>
    <h2>Телефонный справочник</h2>
    <div v-if="!users.length" class="alert alert-warning">
      Загрузка...
    </div>
    <users-list v-else :users="users">
      <template v-slot:table-header>
        <tr>
          <th scope="col">Фамилия</th>
          <th scope="col">Телефон</th>
        </tr>
      </template>
      <template v-slot:table-row="{ user }">
        <td>{{ user.lastName }}</td>
        <td>{{ user.phone }}</td>
      </template>
    </users-list>
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
    }
  }
}
</script>
