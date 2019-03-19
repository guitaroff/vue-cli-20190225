<template>
  <div>
    <div class="form-group">
      <label for="firstName">Имя</label>
      <input
        id="firstName"
        v-model.trim="localUser.firstName"
        type="text"
        class="form-control"
        placeholder="Введите имя"
      />
    </div>

    <div class="form-group">
      <label for="lastName">Фамилия</label>
      <input
        id="lastName"
        v-model.trim="localUser.lastName"
        type="text"
        class="form-control"
        placeholder="Введите фамилию"
      />
    </div>

    <div class="form-group">
      <label for="age">Возраст</label>
      <input
        id="age"
        v-model.trim.number="localUser.age"
        type="number"
        class="form-control"
        placeholder="Возраст"
      />
    </div>

    <div v-if="localUser.birthday" class="form-group">
      <label for="birthday">День Рождения</label>
      <input
        id="birthday"
        v-model.trim="localUser.birthday"
        type="hidden"
        class="form-control"
        placeholder="День Рождения"
      />

      <datepicker v-model.trim="localUser.birthday"></datepicker>
    </div>

    <div class="form-group">
      <label for="phone">Телефон</label>
      <input
        id="phone"
        v-model.trim="localUser.phone"
        type="tel"
        class="form-control"
        placeholder="Телефон"
      />
    </div>

    <div class="form-group">
      <label for="email">Эл.почта</label>
      <input
        id="email"
        v-model.trim="localUser.email"
        type="text"
        class="form-control"
        placeholder="Эл.почта"
      />
    </div>

    <div class="form-check">
      <input
        id="isActive"
        v-model.trim="localUser.isActive"
        class="form-check-input"
        type="radio"
        name="exampleRadios"
        value="true"
      />
      <label class="form-check-label" for="isActive">
        Действующий юзер
      </label>
    </div>
    <div class="form-check">
      <input
        id="removed"
        v-model.trim="localUser.isActive"
        class="form-check-input"
        type="radio"
        name="exampleRadios"
        value="false"
      />
      <label class="form-check-label" for="removed">
        Запись неактивирована
      </label>
    </div>

    <div class="form-group">
      <label for="balance">Баланс</label>
      <input
        id="balance"
        v-model.trim="localUser.balance"
        type="text"
        class="form-control"
        placeholder="Баланс"
      />
    </div>

    <div class="form-group">
      <label for="picture">Фото профиля</label>
      <input
        id="picture"
        v-model.trim="localUser.picture"
        type="text"
        class="form-control"
        placeholder="Фото профиля"
      />
    </div>

    <div class="form-group">
      <label for="Access">Уровень доступа</label>
      <select id="Access" v-model.trim="localUser.accessLevel" class="form-control">
        <option value="admin">Админ</option>
        <option value="user">Обычный юзер</option>
        <option value="guest">Гость</option>
      </select>
    </div>

    <div class="form-group">
      <label for="company">Наименование компании</label>
      <input
        id="company"
        v-model.trim="localUser.company"
        type="text"
        class="form-control"
        placeholder="Наименование компании"
      />
    </div>

    <div class="form-group">
      <label for="address">Адрес</label>
      <textarea
        id="address"
        v-model.trim="localUser.address"
        class="form-control"
        rows="2"
      ></textarea>
    </div>

    <div class="form-group">
      <label for="about">О себе</label>
      <textarea id="about" v-model.trim="localUser.about" class="form-control" rows="3"></textarea>
    </div>

    <div v-if="localUser.registered" class="form-group">
      <label for="registered">Дата регистрации</label>
      <input
        id="registered"
        v-model.trim="localUser.registered"
        type="hidden"
        class="form-control"
        placeholder="Дата регистрации"
      />

      <datepicker v-model.trim="localUser.registered"></datepicker>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  components: {
    datepicker: () => import('@/components/datepicker.vue')
  },
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
