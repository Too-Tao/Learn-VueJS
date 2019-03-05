<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/header/Header.vue'
export default {
  name: 'app',
  components: {
    'v-header': Header,
  },
  data: function () {
    return {
      seller: {}
    }
  },
  created: function () {
        axios
          .get('https://www.easy-mock.com/mock/5c7bd05d5aff8d30f9ea7cd8/api/api')
            .then(data => {
                  data = data.data.data
                  // window.console.log(data.seller)
                  this.seller = data.seller
                })            
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../static/css/reset.css'
  @import './common/stylus/mixin.styl'
  #app
    .tab
      display flex
      width 100%
      height 40px
      line-height 40px
      border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex 1
        text-align center
        & > a
          display block
          font-size 14px
          color rgb( 77, 85, 93 )
          &.active
            color rgb( 240, 20, 20 )
</style>

