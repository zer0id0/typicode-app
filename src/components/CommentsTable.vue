<template>
  <div>
    <div class="container">
      <h3>Comments</h3>
      <table class="table tabled-striped table-hover borderWhiteAll">
        <thead>
          <tr>
            <th>Post ID</th>
            <th>Name</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for=" comment in COMMENTS"
            :key="comment.id"
          >
            <td>{{comment.id}}</td>
            <td>{{comment.name}}</td>
            <td>{{comment.email}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CommentsTable',
  computed: {
    ...mapGetters(['COMMENTS'])
    // Other computed properties
  },
  created () {
    this.$store.dispatch('loadComments')
  }
}
</script>

<style lang="scss" scoped>
</style>
