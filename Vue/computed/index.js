var vm = new Vue({
  el: '#app',
  data: {
    message: 'Hello'
  },
  computed: {
    reverseMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
})