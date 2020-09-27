<template>
  <div class="customer-dashboard-container">
    <h1>Book list</h1>
    <b-card-group 
      deck
    >
      <b-card 
      v-for="(book, index) in bookList" 
      :key='index' 
      :header="book.title" 
      class="text-center">
        <b-card-text>{{book.caption}}</b-card-text>
        <button class="btn  btn-primary">Buy book</button>
      </b-card>
    </b-card-group>
  </div>
</template>
<script>

import { mapState } from 'vuex'
// import PetTable from '@/components/PetTable.vue'

export default {
  // components: {
  //   PetTable
  // },
  data() {
    return {}
  },
  computed: {
    ...mapState([
      'bookList'
    ])
  }
}
</script>