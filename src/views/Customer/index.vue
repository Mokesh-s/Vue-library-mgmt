<template>
  <div id="app">
    <div id="nav">
      <router-link to="/books">books</router-link> |
      <router-link to="/history">History</router-link> |
      <router-link to="/bookreturn">book return</router-link>
    </div>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>