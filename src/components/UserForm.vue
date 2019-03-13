<template>
  <div>
    <div class="form-group">
      <label for="firstName">Имя</label>
      <input
        id="firstName"
        v-model="localUser.firstName"
        type="text"
        class="form-control"
        placeholder="Введите имя"
      />
    </div>

    <div class="form-group">
      <label for="lastName">Фамилия</label>
      <input
        id="lastName"
        v-model="localUser.lastName"
        type="text"
        class="form-control"
        placeholder="Введите фамилию"
      />
    </div>

    <div class="form-group">
      <label for="age">Возраст</label>
      <input
        id="age"
        v-model="localUser.age"
        type="text"
        class="form-control"
        placeholder="Возраст"
      />
    </div>

    <div class="form-group">
      <label for="phone">Телефон</label>
      <input
        id="phone"
        v-model="localUser.phone"
        type="text"
        class="form-control"
        required
        placeholder="Телефон"
      />
    </div>

    <div class="form-group">
      <label for="email">Эл.почта</label>
      <input
        id="email"
        v-model="localUser.email"
        type="text"
        class="form-control"
        required
        placeholder="Эл.почта"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  model: {
    prop: 'user'
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localUser: {}
  }),
  watch: {
    localUser: {
      deep: true,
      handler: 'updateUser'
    }
  },
  mounted() {
    this.localUser = Object.assign({}, this.user)
  },
  methods: {
    updateUser() {
      this.$emit('input', Object.assign({}, this.localUser))
    }
  }
}
</script>
