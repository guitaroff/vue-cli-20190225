<template>
  <div>
    <div v-if="!user" class="alert alert-warning">
      Загрузка...
    </div>
    <user-form v-else v-model="user"></user-form>
    <button type="button" class="btn btn-primary" @click="saveUser">
      Сохранить
    </button>
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
      user: null
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    url() {
      return 'http://localhost:3004/users/' + this.id
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
    }
  }
}
</script>
