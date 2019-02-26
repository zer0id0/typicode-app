<template>
  <v-data-table
    :headers="headers"
    :items="USERS"
    class="my-3 mx-3 elevation-1"
  >
    <template slot="items" slot-scope="props">
      <tr>
        <td class="text-xs-center">{{ props.item.id }}</td>
        <td class="text-xs-center">{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.email }}</td>
      </tr>
    </template>
  </v-data-table>
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
  },
  data() {
        return {
            headers: [
                {
                    text: 'ID',
                    sortable: true,
                    value: 'id',
                    align: 'center'
                },
                {
                    text: 'Name',
                    sortable: true,
                    value: 'name',
                     align: 'center'
                },
                {
                    text: 'Email',
                    sortable: true,
                    value: 'email',
                    align: 'center'
                }
          
                      ]
                }
          }
}
</script>

<style lang="scss" scoped>
</style>
