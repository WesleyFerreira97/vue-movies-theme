<script lang="ts">
import Child from './Child.vue'

export default {
    components: {
        childComponent: Child
    },
    props: {
        title: String,
    }
}
</script>

<template>
    <div>
        {{ title }}
        <h1>Component pai</h1>
        <childComponent />
    </div>
</template>

<style scoped>
</style>