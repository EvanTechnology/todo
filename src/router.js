import Vue from 'vue'
import VueRouter from 'vue-router'
import todo from './components/todo.vue'
import todoView from './components/todoView.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: todo
  },
  {
    path: '/view/:todo',
    component: todoView
  }
]

export default new VueRouter({ routes, mode: 'history' })
