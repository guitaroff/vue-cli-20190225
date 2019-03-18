<template>
  <div>
    <h2>Список пользователей</h2>
    <div v-if="!users.length" class="alert alert-warning">
      Загрузка...
    </div>
    <users-list v-else :users="users" @delete-user="deleteUser">
      <template v-slot:table-header>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Имя</th>
          <th scope="col">Фамилия</th>
          <th scope="col">Возраст</th>
          <th scope="col">День Рождения</th>
          <th scope="col">Телефон</th>
          <th scope="col">Эл.почта</th>
          <th scope="col">Редактировать</th>
          <th scope="col">Удалить</th>
        </tr>
      </template>
      <template v-slot:table-row="{ user, deleteUser }">
        <td>{{ user.id }}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.age }}</td>
        <td>{{ user.birthday }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.email }}</td>
        <td>
          <router-link :to="'/edit/' + user.id">Редактировать</router-link>
        </td>
        <td>
          <button type="button" class="btn btn-danger" @click="deleteUser(user.id)">
            Удалить
          </button>
        </td>
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
    },
    deleteUser(id) {
      axios
        .delete('/users/' + id)
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
