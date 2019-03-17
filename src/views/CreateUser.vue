<template>
  <div>
    <user-form v-model="user"></user-form>
    <button type="button" class="btn btn-primary" @click="saveUser">
      Сохранить
    </button>
  </div>
</template>

<script>
import axios from '@/axios.js'

export default {
  name: 'CreateUser',
  components: {
    UserForm: () => import('@/components/UserForm.vue')
  },
  data() {
    return {
      user: {}
    }
  },
  computed: {
    url() {
      return '/users'
    }
  },
  methods: {
    saveUser() {
      axios
        .post(this.url, this.user)
        .then(() => {
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
