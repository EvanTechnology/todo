<template lang="pug">
    .todo-list
        .content
            ul.list
                li.item
                    .todo-item
                        label.label
                            .input-block
                                input(
                                    type="checkbox"
                                ).input
                            .title todo name
                        .button
                            button(
                                type="button"
                            ).remove X

        .footer
            .footer-content
                .counter 10 item left
                .filter
</template>
<style lang="postcss" scoped>
    .list {
        font-size: 24px;
        border-bottom: 1px solid #ededed;
    }
    .item {
        border-bottom: 1px solid #ededed;
    }
    .item:last-child {
        border-bottom: none;
    }
    .todo-item {
        display: flex;
        align-items: center;
    }
    .label {
        display: flex;
        align-items: center;
        flex: 1;
    }
    .input-block {
        width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .title {
        padding: 15px 0;
        display: block;
    }
    .button {
        width: 40px;
    }
    .remove {
        background: transparent;
        border: none;
        color: firebrick;
        cursor: pointer;
        font-size: 20px;
        visibility: hidden;
    }
    .remove:hover {
        visibility: visible;
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
</style>
