<template lang="pug">
    .todo-list
        .content
            ul.list
                li.item(v-for = "todo in todos")
                    todo-list-item(
                        :todo = "todo"
                    )
        .footer
            .footer-content
                .counter {{todos.length}} item left
                .filter
                    todo-list-filter
</template>
<script>
import todoListFilter from './todoListFilter'
import todoListItem from './todoListItem'
export default {
  props: {
    todos: Array
  },
  methods: {
  },
  components: {
    todoListFilter,
    todoListItem
  }
}
</script>
<style lang="postcss" scoped>
    .list {
        font-size: 24px;
        border-bottom: 1px solid #ededed;
    }
    .item {
        border-bottom: 1px solid #ededed;
        list-style: none;
    }
    .item:last-child {
        border-bottom: none;
    }
    .footer {
        color: #777777;
        padding: 10px 15px;
        text-align: center;
        position: relative;
        font-size: 14px;

    }
    .footer:before {
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        height: 50px;
        overflow: hidden;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2)
    }
    .footer-content {
        position: relative;
        display: flex;
        align-items: center;
    }
    .filter {
        flex: 1;
    }
</style>
