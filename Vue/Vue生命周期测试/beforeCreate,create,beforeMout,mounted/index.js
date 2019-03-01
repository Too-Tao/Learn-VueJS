var vm = new Vue({
  // el: '#app',
  beforeCreate: function () {
    console.log('调用了beforeCreate方法')
  },
  created: function () {
    console.log('调用了created方法')
  },
  beforeMount: function () {
    console.log('调用了beforeMount方法')
  },
  mounted: function () {
    console.log('调用了mounted方法')
  }
})
vm.$mount('#app')