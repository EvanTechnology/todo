const todos = {
  state: {
    todos: [],
    filter: 'all'
  },
  actions: {
    fetchItems (store) {
    }
  },
  getters: {},
  mutations: {
    addTodo (state, todo) {
      state.todos.push(todo)
    },
    removeTodo (state, todoId) {
      state.todos = state.todos.filter(item => {
        return item.id !== todoId
      })
    },
    checkTodo (state, todo) {
      state.todos = state.todos.map(item => (
        item.id === todo.id ? todo : item
      ))
    },
    filterTodos (state, filter) {
      state.filter = filter
    }
  }
}

export default todos
