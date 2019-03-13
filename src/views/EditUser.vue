<template>
  <div>
    <user-form v-if="user" :user="user" @update-user="updateUser"></user-form>
    <button type="button" class="btn btn-primary" @click="saveUser">
      Сохранить
    </button>
    <pre>USER НАВЕРХУ{{ user }}</pre>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import axios from 'axios'

export default {
  name: 'EditUser',
  components: {
    UserForm
  },
  data() {
    return {
      user: {}
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios
        .get('http://localhost:3004/users/' + this.id)
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
      axios.patch('http://localhost:3004/users/' + this.id, this.user).then(() => {
        this.$router.push('/users')
      })
    },
    updateUser(user) {
      console.log('UPDATE USER', user)
    }
  }
}
</script>
