<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

  export default {
    mounted() {

    }
  }
</script>

<style lang="scss">
  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    margin: -8px;
    background-color: #e1e1e1;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
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

  #fb-root {
    .fb_dialog {
      z-index: 500 !important;
    }
    iframe {
      z-index: 600 !important;
    }
  }
</style>
