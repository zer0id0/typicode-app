<template>
  <div>
    <div class="container">
      <h3>Comments</h3>
      <input type="numer" step="5" min="5" max="20" />

      <table class="table tabled-striped table-hover borderWhiteAll">
        <thead>
          <tr>
            <th>Comment ID</th>
            <th>User ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for=" comment in COMMENTS"
            :key="comment.id"
          >
            <td>{{comment.id}}</td>
            <td>{{comment.userId}}</td>
            <td>{{comment.title}}</td>
          </tr>
        </tbody>
      </table>
      <div>
        Filter Comments:
        <select @change="filterComments($event)">
          <option value="100">100</option>
          <option value="50">50</option>
          <option value="20">20</option>
          <option value="10">10</option>
          <option value="5">5</option>
        </select>
      </div>
      <br>
    </div>
  </div>
</template> 

<script>
import { mapActions , mapGetters} from 'vuex'
export default {
  name: 'CommentsTable',
  computed: mapGetters(["COMMENTS"]),
  methods: {
    ...mapActions(['filterComments'])
    },
    updated () {
    console.log(this.COMMENTS)
  }
}


</script>

<style lang="scss" scoped>

  .page-number {
    border: 2px solid green;
  }

  select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}

</style>
