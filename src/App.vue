<template>
  <div id="app">
    <div id="nav" :class="displayNav">
      <div v-if="!adminUser">
        <router-link to="/books">Books</router-link> |
        <router-link to="/bookreturn">Book return</router-link> |
        <router-link to="/history">History</router-link>
      </div>
      <div v-else>
        <router-link to="/addbooks">Add books</router-link> |
        <router-link to="/books">Books</router-link> |
        <router-link to="/fineclosure">Fine closure</router-link> |
        <router-link to="/usershistory">Users history</router-link>
      </div>
      <div @click="logout" class="logout">
        <button class="btn  btn-primary" @click="logout">Logout</button>
      </div>
    </div>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapActions } from 'vuex'

export default {
    data () {
      return {
        adminUser: false,
        displayNav: ''
      }
    },
    methods: {
    ...mapActions([
      'logout'
    ])
    },
    watch:{
      $route (to, from){
        console.log(this.displayNav)
        if (JSON.parse(window.localStorage.getItem('user'))) {
          const user = JSON.parse(window.localStorage.getItem('user'))
          if(user.data.role) this.adminUser = true
          else this.adminUser = false
        }
        console.log(location.pathname)
        if(location.pathname === '/' || location.pathname === '/register') this.displayNav = 'hide'
        else this.displayNav = ''
      }
    },
    mounted() {
      if(location.pathname === '/' || location.pathname === '/register') this.displayNav = 'hide'
    },
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.hide {
  display: none !important;
}
</style>
