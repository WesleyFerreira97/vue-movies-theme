<template >
    <swiper :slides-per-view="1" :space-between="0" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide v-for="(item, index) in movie">
            <div class="swiper-item">
                <h1 class="swiper-title">{{ item.title }}</h1>
            </div>
        </swiper-slide>
        ...
    </swiper>
</template>

<script lang="ts" >
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref, onBeforeMount } from 'vue';
import { getPopularMovies } from '../services/apiFunctions';
import type { MovieProps } from '../services/apiFunctions';

const movie = ref<MovieProps[] | null>();

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {

        const onSwiper = (swiper: any) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        onBeforeMount(async () => {
            const { data } = await getPopularMovies();

            movie.value = data.value?.results;
        });
        return {
            onSwiper,
            onSlideChange,
            movie
        };
    },
};
</script>

<style scoped>
.swiper-item {
    height: 100vh;
    width: 100%;
    background: #FF2E63;
}

.swiper-title {
    display: block;
}
</style>