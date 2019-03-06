import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Goods from './components/Goods.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
  {
    path: '/HelloWorld',
    component: HelloWorld
  },
  {
    path: '/Goods',
    component: Goods
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
