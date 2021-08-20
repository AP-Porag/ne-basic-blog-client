<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'AppComponent',
  components: {
  }
}
</script>

<style lang="scss">
.navigation .navbar-nav{
  display: flex !important;
}
.navbar-collapse collapse{
  padding-top: 30px;
  padding-top: 10px;
}

.dropdown-toggle::after {
  display: none !important;
}
</style>
