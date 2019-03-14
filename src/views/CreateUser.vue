<template>
  <div>
    <user-form v-model="user"></user-form>
    <button type="button" class="btn btn-primary" @click="saveUser">
      Сохранить
    </button>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import axios from 'axios'

export default {
  name: 'CreateUser',
  components: {
    UserForm
  },
  data() {
    return {
      user: { id: 2005 }
    }
  },
  computed: {
    url() {
      return 'http://localhost:3004/users'
    }
  },
  methods: {
    saveUser() {
      console.log('saveUser')
      axios
        .post(this.url, { id: 25535, firstName: 'Fred', lastName: 'Flintstone' })
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
