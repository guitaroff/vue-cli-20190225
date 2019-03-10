<template>
  <div>
    <b-form @submit.prevent="updateAccount">
      <b-form-group id="firstNameInputGroup" label="Имя" label-for="firstName">
        <b-form-input
          id="firstName"
          type="text"
          v-model="account.firstName"
          required
          placeholder="Введите имя"
        />
      </b-form-group>

      <b-form-group id="lastNameInputGroup" label="Фамилия" label-for="lastName">
        <b-form-input
          id="lastName"
          type="text"
          v-model="account.lastName"
          required
          placeholder="Введите фамилию"
        />
      </b-form-group>

      <b-form-group id="ageInputGroup" label="Возраст" label-for="age">
        <b-form-input id="age" type="text" v-model="account.age" required placeholder="Возраст" />
      </b-form-group>

      <b-form-group id="phoneInputGroup" label="Телефон" label-for="phone">
        <b-form-input
          id="phone"
          type="text"
          v-model="account.phone"
          required
          placeholder="Телефон"
        />
      </b-form-group>

      <b-form-group id="emailInputGroup" label="Эл.почта" label-for="email">
        <b-form-input
          id="email"
          type="text"
          v-model="account.email"
          required
          placeholder="Эл.почта"
        />
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
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
