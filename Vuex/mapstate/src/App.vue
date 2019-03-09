<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <Vuexx/> -->
    <avue/>
    <bvue/>
  </div>
</template>

<script>
import avue from './components/a.vue'
import bvue from './components/b.vue'
export default {
  name: 'app',
  components: {
    // Vuexx
    avue,
    bvue
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
