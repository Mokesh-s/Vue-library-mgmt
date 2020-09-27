<template>
  <div>
        <h1>{{ species }} for adoption</h1>
        <b-table striped hover :items="data">
          <template v-slot:cell(name)="data">
            <!-- `data.value` is the value after formatted by the Formatter -->
            <router-link 
              :to="`/pets/${species}/${data.index}`">
                {{ data.value }}
            </router-link>
          </template>
        </b-table>
  </div>
</template>
<script>
export default {
  props: {
    species: String,
    data: Array
  },
  mounted() {
    console.log(this.data)
  }
}
</script>