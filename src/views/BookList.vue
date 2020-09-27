<template>
  <div class="customer-dashboard-container">
    <h1>Book list</h1>
    <b-card-group 
      deck
    >
      <b-card 
      v-for="(book, index) in allBooks" 
      :key='index' 
      :header="book.title" 
      class="text-center">
        <b-card-text>Author: {{book.author_name}}</b-card-text>
        <b-card-text>Cost: {{book.cost}}</b-card-text>
        <button class="btn  btn-primary" @click="buybook(_id)">Buy book</button>
      </b-card>
    </b-card-group>
  </div>
</template>
<script>

import { mapState, mapActions } from 'vuex'
import { authHeader, userService } from '../_services/user.service'
// import PetTable from '@/components/PetTable.vue'

export default {
  // components: {
  //   PetTable
  // },
  data() {
    return {
      allBooks: []
    }
  },
  methods: {
    ...mapActions([
      'getAllBooks'
    ])
  },
  buybook () {
  const apiUrl = 'http://localhost:4000'
  let url = `${apiUrl}/api/buybook`

  fetch(url)
  .then(response => response.json())
  .then(commits => this.allBooks = commits)
  },
  mounted() {
  const apiUrl = 'http://localhost:4000'
  let url = `${apiUrl}/api/getallbooks`

  fetch(url)
  .then(response => response.json())
  .then(commits => this.allBooks = commits)
  }
}
</script>