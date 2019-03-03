<template>
  <div id="app">
    <Header />
    <AddTodo @add-todo="addTodo"/>
    <Todos :todos="todos" @del-todo="deleteTodo" />
    
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    Header,
    Todos,
    AddTodo
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
          .then(res => {
            this.todos = res.data
          })
          .catch(err => window.console.log(err))
  },
  data: function () {
    return {
      todos: []
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter( todo => {
        return todo.id !== id
      })
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo]
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    line-height: 1.4;
  }
  input {
    outline: none;
  }
  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: #666;
  }
</style>
