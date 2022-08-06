<script lang="ts">
import CarouselHome from "../components/CarouselHome.vue";
import ListCategory from "../components/ListCategory.vue";

export default {
  components: {
    CarouselHome,
    ListCategory,
  },
};
</script>

<template>
  <div>
    <CarouselHome />
    <ListCategory title="Popular" />
    <ListCategory title="Action" />
    <ListCategory title="Adventure" />
  </div>
</template>

<style scoped lang="scss">
</style>