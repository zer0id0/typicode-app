<template>
  <div id="app-header">
    <h3>API Users and other stuff</h3>
    <nav id="nav">
      <div class="nav-item">
        Users: <strong>{{users.length}}</strong>
      </div>
      <div class="nav-item">
        Posts: <strong>{{posts.length}}</strong>
      </div>
      <div class="nav-item">
        Comments: <strong>{{comments.length}}</strong>
      </div>
    </nav>
    <div id="nav">
      <router-link to="/">User Table</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppHeader',
  computed: {
    ...mapState([
      'users',
      'posts',
      'comments'
    ]) },
  created () {
    this.$store.dispatch('loadUsers')
    this.$store.dispatch('loadPosts')
    this.$store.dispatch('loadComments')
  }
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
