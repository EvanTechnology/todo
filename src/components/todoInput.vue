<template lang="pug">
    .todo-input
        input(
            type="text"
            placeholder="todo name"
            autofocus
        ).input
</template>
<style lang="postcss" scoped>
    input {
        font-size: 24px;
        padding: 16px 16px 16px 60px;
        border: none;
        background: rgba(0, 0, 0, 0.03);
        line-height: 1.4em;
        outline: none;
        color: inherit;
        width: 100%;
    }
</style>
