import Vue from 'vue'

import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import './common/stylus/index.styl'
import Goods from './components/goods/Goods.vue'
import Ratings from './components/ratings/Ratings.vue'
import Seller from './components/seller/Seller.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)



const router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: "/goods",
      component: Goods,
      
    },
    {
      path: "/ratings",
      component: Ratings
    },
    {
      path: "/seller",
      component: Seller
    },
  ]
})



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
