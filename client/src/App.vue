<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  updated() {
    window.scrollTo(0,0);
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
