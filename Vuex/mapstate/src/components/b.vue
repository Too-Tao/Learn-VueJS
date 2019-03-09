<template>
  <div class="div">bbb {{ $store.state.count.count }}
    <button @click="add">增加</button>
    <button @click="reduce">减少</button>
  </div>
  
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: mapActions('count',['add','reduce'])
}
</script>

<style>

</style>
