<template>
  <div class="shopcart">
    <div class="content" @click="toggleList">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highlight': totalCount > 0}">
            <i class="icon-shopping_cart" :class="{'highlight': totalCount > 0}"></i>
          </div>
          <div class="num" v-show="totalCount > 0">{{ totalCount }}</div>
        </div>
        <div class="price" :class="{'highlight': totalPrice > 0}">￥{{ totalPrice }}</div>
        <div class="desc">另需配送费{{ deliveryPrice }}￥</div>
      </div>
      <div class="content-right" >
        <div class="pay" :class="payClass">
          {{ payDesc }}
        </div>
      </div>
      
    </div>
    <div class="shopcart-list"
            v-show="listShow">
        <div class="list-header">
          <h1 class="title">购物车</h1>
          <span class="empty">清空</span>
        </div>
        <div class="list-content">
          <ul>
            <li class="food"
                v-for="(food,index) in selectFoods"
                :key="index"
            >
              <span class="name">{{ food.name }}</span>
              <div class="price">
                <span>￥{{ food.price * food.count }}</span>
              </div>
              <div class="cartcontrol-wrapper">
                <cartcontrol :food="food"></cartcontrol>
              </div>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
import Cartcontrol from '../cartcontrol/Cartcontrol.vue'
export default {
  name: 'Shopcart',
  props: {
    selectFoods: {
      type: Array,
      default: function () {
        return [
          {
            
          }
        ]
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  data: function () {
    return {
      fold: true,
      collapsed: true
    }
  },
  components: {
    'cartcontrol': Cartcontrol
  },
  computed: {
    totalPrice: function () {
      let total = 0
      this.selectFoods.forEach((food) => {
        total += food.price * food.count
      })
      return total
    },
    totalCount: function () {
      let count = 0
      this.selectFoods.forEach( (food) => {
        count += food.count
      } )
      return count
    },
    payDesc: function () {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}元起送`
      } else if ( this.totalPrice < this.minPrice ) {
        let diff = this.minPrice - this.totalPrice
        return `还差￥${diff}元起送`
      } else {
        return '去结算'
      }
    },
    payClass: function () {
      if(this.totalPrice < this.minPrice) {
        return 'not-enough'
      } else {
        return 'enough'
      }
    },
    listShow: function () {
      if(!this.totalCount) {
        // this.fold = true
        return false
      }
      if(this.totalCount > 0 && !this.collapsed) {
        return true
      }
      return true
    }
  },
  methods: {
    toggleList: function () {
      if (!this.totalCount) {
        return
      }
      this.fold = !this.fold
    }
  }
}
</script>

<style lang="stylus" scoped>
  .shopcart
    position fixed
    left 0
    bottom 0
    z-index 999
    width 100%
    height 48px
    // background #000
    .content
      display flex
      background #141d27
      .content-left
        flex 1
        font-size 0
        .logo-wrapper
          display inline-block
          position relative
          top -10px
          margin 0 12px
          padding 6px
          width 56px
          height 56px
          box-sizing border-box
          vertical-align top
          border-radius 50%
          background #141d27
          .logo
            width 100%
            height 100%
            border-radius 50%
            text-align center
            background #2b343c
            &.highlight
              background rgb(0,160,220)
            .icon-shopping_cart
              line-height 44px
              font-size 24px
              color #80858a
              &.highlight
                color #ffffff
          .num 
            position absolute
            top 0
            right 0
            width 24px
            height 16px
            line-height 16px
            text-align center
            border-radius 16px
            font-size 9px
            font-weight 700
            color #ffffff
            background rgb(240,20,20)
            box-shadow 0 4px 8px 0 rgba(0,0,0,0.4)
        .price
          display inline-block
          vertical-align top
          line-height 24px
          margin-top 12px
          padding-right 12px
          box-sizing border-box
          border-right 1px solid rgba(255,255,255,0.1)
          font-size 16px
          font-weight 700
          color rgba(255,255,255,0.4)
          &.highlight
            color #ffffff
        .desc
          display inline-block
          vertical-align top
          margin 12px 0 0 12px
          line-height 24px
          color rgba(255,255,255,0.4)
          font-size 10px
      .content-right
        flex 0 0 105px
        width 105px
        .pay
          height 48px
          line-height 48px
          text-align center
          font-size 12px
          font-weight 700
          background #2b333b
          color rgba(255,255,255,0.4)
          &.not-enough
            background #2b333b
          &.enough
            background #00b43c
            color #ffffff
    .shopcart-list
      position absolute
      left 0
      top 0
      z-index -1
      width 100%
</style>

