<template>
    <div class="movie-detail">
        <!-- <h2>{{ movie.Title }}</h2>
        <p>{{ movie.Year }}</p>
    
        <img :src="movie.Poster" alt="Movie Poster" class="featured-img" />
        <p>{{ movie.Plot }}</p> -->
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useFetch } from '../hooks/useFetch';
import { getPopularMovies } from '../services/apiFunctions';

const movie = ref<any | null>([]);

onBeforeMount(async () => {
    const { data } = await getPopularMovies();
    console.log(data.value);
    movie.value = data.value;

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