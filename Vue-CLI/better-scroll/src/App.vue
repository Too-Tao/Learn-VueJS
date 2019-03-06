<template>
  <div id="app">
    <div class="item-wrapper">
      <div class="item">
        <router-link to="/HelloWorld">Go to HelloWorld</router-link>
      </div>
      <div class="item">
        <router-link to="/Goods">Go to Goods</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data: function () {
    return {
      seller : {
        type: Object
      }
    }
  },
  created: function () {
    axios.get('https://www.easy-mock.com/mock/5c7bd05d5aff8d30f9ea7cd8/api/api')
          .then( res => {
            this.goods = res.data.data.goods
            window.console.log(this.goods)
          } )
  }
}
</script>

<style lang="stylus">
   @import './reset.css'
   #app
    .item-wrapper
      display flex
      width 100%
      height 50px
      line-height 50px
      background green 
      .item
        flex 1
        text-align center
        & > a
          display block
          color #ffffff
</style>

