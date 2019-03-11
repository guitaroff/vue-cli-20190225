<template>
  <div>
    <form>
      <div class="form-group">
        <label for="firstName">Имя</label>
        <input
          type="text"
          v-model="account.firstName"
          class="form-control"
          id="firstName"
          placeholder="Введите имя"
        />
      </div>

      <div class="form-group">
        <label for="lastName">Фамилия</label>
        <input
          type="text"
          v-model="account.lastName"
          class="form-control"
          id="lastName"
          placeholder="Введите фамилию"
        />
      </div>

      <div class="form-group">
        <label for="age">Возраст</label>
        <input
          type="text"
          v-model="account.age"
          class="form-control"
          id="age"
          placeholder="Возраст"
        />
      </div>

      <div class="form-group">
        <label for="phone">Телефон</label>
        <input
          type="text"
          v-model="account.phone"
          class="form-control"
          id="phone"
          required
          placeholder="Телефон"
        />
      </div>

      <div class="form-group">
        <label for="email">Эл.почта</label>
        <input
          type="text"
          v-model="account.email"
          class="form-control"
          id="email"
          required
          placeholder="Эл.почта"
        />
      </div>

      <button type="submit" class="btn btn-primary" @click.prevent="updateAccount">Обновить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AccountData',
  props: {
    account: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateAccount() {
      console.log('account', this.account)
      this.$emit('account', this.account)
    }
  }
}
</script>
