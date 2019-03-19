<template>
  <div>
    <slot name="header"></slot>

    <table class="table table-hover">
      <thead>
        <slot name="table-header">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Имя</th>
            <th scope="col">Фамилия</th>
            <th scope="col">Возраст</th>
            <th scope="col">Телефон</th>
            <th scope="col">Эл.почта</th>
            <th scope="col">Статус юзера</th>
            <th scope="col">Баланс</th>
            <th scope="col">Фото профиля</th>
            <th scope="col">Уровень доступа</th>
            <th scope="col">Наименование компании</th>
            <th scope="col">Адрес</th>
            <th scope="col">О себе</th>
            <th scope="col">Дата регистрации</th>
            <th scope="col">Удалить</th>
          </tr>
        </slot>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <slot name="table-row" :user="user" :deleteUser="deleteUser">
            <td>{{ user.id }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.isActive }}</td>
            <td>{{ user.balance }}</td>
            <td>{{ user.picture }}</td>
            <td>{{ user.accessLevel }}</td>
            <td>{{ user.company }}</td>
            <td>{{ user.address | truncate(50, '...') }}</td>
            <td>{{ user.about | truncate(50, '...') }}</td>
            <td>{{ user.registered }}</td>
            <td>
              <router-link :to="'/edit/' + user.id">Редактировать</router-link>
            </td>
            <td>
              <button type="button" class="btn btn-danger" @click="deleteUser(user.id)">
                Удалить
              </button>
            </td>
          </slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UsersList',
  filters: {
    truncate: function(text, length, suffix) {
      if (text.length > 0) {
        return text.substring(0, length) + suffix
      } else {
        return 'Не заполнено'
      }
    }
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  methods: {
    deleteUser(id) {
      this.$emit('delete-user', id)
    }
  }
}
</script>

<style>
.container {
  margin-left: 10px;
}
</style>
