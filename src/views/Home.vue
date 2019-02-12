<template>
  <div class="home">
    <CryptoTable />
  </div>
</template>

<script>
// @ is an alias to /src
import CryptoTable from '@/components/CryptoTable.vue'

export default {
  name: 'home',
  components: {
    CryptoTable
  }
}
</script>
