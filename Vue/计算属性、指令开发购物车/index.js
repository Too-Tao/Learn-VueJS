var app = new Vue({
  el: '#app',
  data: {
    list: [{
        id: 1,
        name: 'iPhone7',
        price: 6188,
        count: 1,
        checked: false
      },
      {
        id: 2,
        name: 'iPad Pro',
        price: 5888,
        count: 1,
        checked: false
      },
      {
        id: 3,
        name: 'MacBook Pro',
        price: 21488,
        count: 1,
        checked: false
      },
    ]
  },
  methods: {
    handleReduce: function (index) {
      if (this.list[index].count === 1) return
      return this.list[index].count--
    },
    handleAdd: function (index) {
      return this.list[index].count++
    },
    
    handelChecked: function (index) {
      this.list[index].checked = !this.list[index].checked
    },
    isChecked: function (index) {
      return this.list[index].checked
    },
    handleRemove: function (index) {
      return this.list.splice(index, 1)
    },
    handleSelectAll: function () {
      var checked = this.isCheckedAll();
      checked = checked ? 0 : 1;
		  		for(var i = 0; i < this.list.length; i++) {
		  			this.list[i].checked = checked;
		  		} 
    },
    isSelectAll: function () {
      //列表全为true该status才为true，否则为false
      var checked = true;
      for(var i = 0; i < this.list.length; i++) {
        //一旦列表的status有一个为false则status就为false
        if(!this.list[i].checked) {
          checked = false;
          return checked;
        }
      }
      return checked;
    }
    
  },
  computed: {
    totalPrice: function () {
      var total = 0
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].checked) {
          var item = this.list[i]
          total += item.price * item.count
        }
      }
      return total.toString().replace(/\B(?=(\d{3})+$)/g, ',')
    }
  }
})