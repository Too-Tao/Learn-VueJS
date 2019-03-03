<template>
  <div>
    <form @submit.prevent="addTodo">
      <input v-model="title" type="text" name="title" placeholder="Add">
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>
import uuid from 'uuid'

export default {
  name: 'AddTodo',
  data: function () {
    return {
      title: ''
    }
  },
  methods: {
    addTodo: function () {
      const newTodo = {
        id: uuid.v4(),
        title: this.title,
        completed: false
      }
      
      this.title = ''
      this.$emit('add-todo', newTodo)
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }
  input[type="text"] {
    flex: 10;
    padding: 5px;
  }

  input[type="submit"] {
    flex: 2
  }
</style>


