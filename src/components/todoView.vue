<template lang="pug">
    div
        h1 Component description {{$route.params.todo}}
        button(
            @click = "goBack"
        ) Back
</template>
<script>
export default {
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="postcss" scoped>

</style>
