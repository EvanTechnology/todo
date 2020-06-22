<template lang="pug">
    div
        button(
            v-for = "filter in filters"
            type="button"
            :class = "{active: currentFilter === filter}"
            @click = "filterTodos(filter)"
            ) {{filter}}
</template>
<script>
export default {
  data () {
    return {
      filters: ['all', 'active', 'completed'],
      currentFilter: 'all'
    }
  },
  methods: {
    filterTodos (filter) {
      this.currentFilter = filter
      this.$emit('filterTodos', filter)
    }
  }
}
</script>
<style lang="postcss" scoped>
    button {
        margin-right: 20px;
        background: transparent;
        font-weight: 300;
        color: inherit;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 3px;
        outline: none;
    }
    button:last-child {
        margin-right: 0;
    }
    button.active {
        border-color: rgba(175, 47, 47, 0.2);
    }
</style>
