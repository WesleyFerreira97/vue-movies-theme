<template>
    <div v-for="item in movie">
        {{ item.title }}
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { getPopularMovies } from '../services/apiFunctions';
import type { MovieProps } from '../services/apiFunctions'

const movie = ref<MovieProps[] | null>();

onBeforeMount(async () => {
    const { data } = await getPopularMovies();

    movie.value = data.value?.results;
});

</script>

<style lang="scss">
.movie-detail {
    padding: 16px;

    h2 {
        color: #FFF;
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 16px;
    }

    .featured-img {
        display: block;
        max-width: 200px;
        margin-bottom: 16px;
    }

    p {
        color: #FFF;
        font-size: 18px;
        line-height: 1.4;
    }
}
</style>