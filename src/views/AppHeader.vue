<template>
  <div id="app-header">
    <h3>Top 100 Cryptos</h3>
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
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppHeader',
  created () {
    this.$store.dispatch('loadCoins')
  },
  computed: mapState([
    'coins'
  ])
}
</script>

<style lang="scss" scoped>
#app-header {
  h3 {
    margin: 1rem 0;
  }
  #nav {
    display: flex;
    padding: 1rem;
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
