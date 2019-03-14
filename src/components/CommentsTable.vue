<template>
  <div>
    <div class="container">
      <h3>Comments</h3>
      <input type="numer" step="5" min="5" max="20" />

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
      <select v-model="pages" class="page-number">
        <option>10</option>
        <option>15</option>
        <option>20</option>
      </select>
      <br>
      <span>Selected: {{ pages }}</span>
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
  data () {
    return {
      pages: '',
      pageChange(pages) {
        // API.get(`http://localhost:3000/comments?_page=2&_limit=${pages}`)
        console.log(pages)
      }
    }
  },
  methods: {
    getPages() {
      this.$store.dispatch('loadComments',pages)
    }
  }
}
</script>

<style lang="scss" scoped>

  .page-number {
    border: 2px solid green;
  }

</style>
