<template>
  <div class="todo-item" :class="{'is-complete': todo.completed}">
    <p>
      <input type="checkbox" @change="markComplete">
      {{ todo.title }}
      <button class="del" @click="$emit('del-todo', todo.id)">X</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
  methods: {
    markComplete: function  () {
      this.todo.completed = !this.todo.completed
    }
  }
}
</script>

<style scoped>
  .todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px dotted #ccc;
  }
  
  .is-complete {
    text-decoration: line-through;
  }

  .del {
    background: #ff0000;
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 20%;
    border: 1px solid transparent;
    outline: none;
    cursor: pointer;
  }
</style>
