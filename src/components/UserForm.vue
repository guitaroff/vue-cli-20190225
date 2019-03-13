<template>
  <div>
    <form>
      <div class="form-group">
        <label for="firstName">Имя</label>
        <input
          id="firstName"
          type="text"
          :value="user.firstName"
          class="form-control"
          placeholder="Введите имя"
        />
      </div>

      <div class="form-group">
        <label for="lastName">Фамилия</label>
        <input
          id="lastName"
          type="text"
          :value="user.lastName"
          class="form-control"
          placeholder="Введите фамилию"
        />
      </div>

      <div class="form-group">
        <label for="age">Возраст</label>
        <input id="age" type="text" :value="user.age" class="form-control" placeholder="Возраст" />
      </div>

      <div class="form-group">
        <label for="phone">Телефон</label>
        <input
          id="phone"
          type="text"
          :value="user.phone"
          class="form-control"
          required
          placeholder="Телефон"
        />
      </div>

      <div class="form-group">
        <label for="email">Эл.почта</label>
        <input
          id="email"
          type="text"
          :value="user.email"
          class="form-control"
          required
          placeholder="Эл.почта"
        />
      </div>

      <button type="submit" class="btn btn-primary" @click.prevent="updateUser">Обновить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateUser() {
      console.log('user', this.user)
      this.$emit('user', this.user)
    }
  }
}
</script>
