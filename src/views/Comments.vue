<template>
  <div class="comments">
    <CommentsTable />
  </div>
</template>

<script>
// @ is an alias to /src
import CommentsTable from '@/components/CommentsTable.vue'

export default {
  name: 'Comments',
  components: {
    CommentsTable
  }
}
</script>
