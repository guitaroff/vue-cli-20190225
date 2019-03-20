<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <router-link class="navbar-brand" to="/">
        {{ title }}
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <router-link to="/" tag="li" class="nav-item" exact>
            <a class="nav-link">Главная</a>
          </router-link>
          <router-link to="/users" tag="li" class="nav-item">
            <a class="nav-link">Пользователи</a>
          </router-link>
          <router-link to="/create-user" tag="li" class="nav-item">
            <a class="nav-link">Добавить пользователя</a>
          </router-link>
          <router-link to="/phonebook" tag="li" class="nav-item">
            <a class="nav-link">Телефонный справочник</a>
          </router-link>
        </ul>
      </div>
    </nav>

    <main role="main" class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    title() {
      return this.$store.state.navbarTitle + ' ' + this.$store.getters.titleLength
    }
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
