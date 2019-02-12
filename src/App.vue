<template>
  <div id="app">
    <AppHeader />
    <nav id="nav">
      <div class="nav-item">
        Market cap:
      </div>
      <div class="nav-item">
        24h Vol cap:
      </div>
      <div class="nav-item">
        Btc Dominance:
      </div>
    </nav>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
import AppHeader from './views/AppHeader'
export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  #nav {
    display: flex;
    padding: 30px;
    justify-content: space-evenly;

    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
