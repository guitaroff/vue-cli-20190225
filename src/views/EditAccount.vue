<template>
  <div>
    <h2>Редактирование профиля</h2>
    {{ account }}
    <!-- <div v-if="!account.length" class="alert alert-warning">
      Загрузка...
    </div> -->
    <edit-account :account="account" @account="updateAccount"></edit-account>
  </div>
</template>

<script>
import AccountData from '@/components/AccountData.vue'
import axios from 'axios'

export default {
  name: 'EditAccount',
  components: {
    'edit-account': AccountData
  },
  data() {
    return {
      account: {}
    }
  },
  mounted() {
    this.loadUser()
    console.log('account', this.account.id)
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
