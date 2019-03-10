<template>
  <div>
    <h2>Редактирование профиля</h2>
    {{ account }}
    <!-- <div v-if="!users.length" class="alert alert-warning">
      Загрузка...
    </div> -->
    <edit-account v-bind:account="account" v-on:account="updateAccount"></edit-account>
  </div>
</template>

<script>
import AccountData from '@/components/AccountData.vue'
import axios from 'axios'

export default {
  name: 'editAccount',
  components: {
    'edit-account': AccountData
  },
  data: function() {
    return {
      account: {}
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios.get('http://localhost:3004/users/' + this.$route.params.accountId).then(response => {
        this.account = response.data
      })
    },
    updateAccount(account) {
      this.account = account
    }
  }
}
</script>
