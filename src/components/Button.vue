<template>
    <button class="button textLg">{{ text }}</button>
</template>

<script>

export default {
    props: {
        text: String,
    }
}
</script>

<style scoped>
    .button {
        padding: .5rem 2rem;
        background-color: #252A34;
        outline: none;
        border: none;
        color: #fff;
        margin: 1.5rem 0;
    }
</style>