<template>
  <div>
    <h2>Домашняя страница</h2>

    <div class="form-group">
      <label>Vuex title: </label>
      <input v-model="title" type="text" class="form-control" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    title: {
      get() {
        return this.$store.state.navbarTitle
      },
      set(value) {
        this.$store.commit('changeTitle', value)
      }
    }
  }
}
</script>
