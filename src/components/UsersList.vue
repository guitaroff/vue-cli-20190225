<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Имя</th>
          <th scope="col">Фамилия</th>
          <th scope="col">Возраст</th>
          <th scope="col">Телефон</th>
          <th scope="col">Эл.почта</th>
          <th scope="col">Редактировать</th>
          <th scope="col">Удалить</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.email }}</td>
          <td>
            <router-link :to="'/edit/' + user.id">Редактировать</router-link>
          </td>
          <td><button class="btn btn-danger" @click="deleteUser(user)">Удалить</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UsersList',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  methods: {
    deleteUser(user) {
      this.$emit('delete-user', Object.assign({}, user))
    }
  }
}
</script>
