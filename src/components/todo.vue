<template lang="pug">
    div.todo
        todoInput
        todoList
</template>

<script>
import todoList from './todoList'
import todoInput from './todoInput'
export default {
  components: {
    todoList,
    todoInput
  }
}
</script>

<style lang="postcss" scoped>
    .todo {
        margin-top: 100px;
        background: #ffffff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    }
</style>
