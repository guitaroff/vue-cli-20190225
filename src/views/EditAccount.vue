<template>
  <div>
    <h2>Редактирование профиля</h2>
    <!-- <div v-if="!users.length" class="alert alert-warning">
      Загрузка...
    </div> -->
    <edit-account v-bind:user="user"></edit-account>
  </div>
</template>

<script>
import UserData from '@/components/UserData.vue'

export default {
  name: 'editAccount',
  components: {
    'edit-account': UserData
  },
  data: function() {
    return {
      user: []
    }
  }
}
</script>
