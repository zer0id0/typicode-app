<template>
  <div>
    <div class="container">
      <table class="table tabled-striped table-hover borderWhiteAll">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for=" user in USERS"
            :key="user.id"
          >
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UsersTable',
  computed: {
    ...mapGetters(['USERS'])
    // Other computed properties
  },
  created () {
    this.$store.dispatch('loadUsers')
  }
}
</script>

<style lang="scss" scoped>
</style>
