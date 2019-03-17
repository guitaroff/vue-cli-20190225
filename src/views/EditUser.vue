<template>
  <div>
    <div v-if="!user" class="alert alert-warning">
      Загрузка...
    </div>
    <user-form v-else v-model="user"></user-form>
    <button v-show="user" type="button" class="btn btn-light margin-button" @click="BackToUsers">
      Отмена
    </button>
    <button v-show="user" type="button" class="btn btn-primary margin-button" @click="saveUser">
      Сохранить
    </button>
  </div>
</template>

<script>
import axios from '@/axios.js'

export default {
  name: 'EditUser',
  components: {
    UserForm: () => import('@/components/UserForm.vue')
  },
  data() {
    return {
      user: null
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    url() {
      return '/users/' + this.id
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios
        .get(this.url)
        .then(response => response.data)
        .then(user => {
          this.user = user
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
    },
    saveUser() {
      axios.patch(this.url, this.user).then(() => {
        this.$router.push('/users')
      })
    },
    BackToUsers() {
      this.$router.push('/users')
    }
  }
}
</script>

<style>
.margin-button {
  margin: 10px 10px;
}
</style>
