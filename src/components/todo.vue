<template lang="pug">
    div.todo
      todoInput
      todoList(
        v-if = "todos.length > 0"
        :todos = "filteredTodos"
      )
</template>

<script>
import todoList from './todoList'
import todoInput from './todoInput'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  components: {
    todoList,
    todoInput
  },
  computed: {
    ...mapState({
      todos: state => state.todos.todos,
      filter: state => state.todos.filter
    }),
    filteredTodos () {
      switch (this.filter) {
        case 'all' :
          return this.todos
        case 'active' :
          return this.todos.filter(item => item.checked === false)
        case 'completed' :
          return this.todos.filter(item => item.checked)
      }
    }
  },
  mounted () {
    this.fetchItems()
  },
  methods: {
    ...mapActions(['fetchItems'])
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
