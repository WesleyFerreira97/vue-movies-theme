<template >
    <swiper :slides-per-view="1" :space-between="0">
        <swiper-slide v-for="(item, index) in movie" :key="index">
            <div class="carousel-item" >
                <div class="carousel-item__background">
                    <img :src="IMAGE_BASE_URL + item.backdrop_path" />
                </div>
                <div class="carousel-item__info">
                    <div class="container">
                        <div class="carousel-item__info-wrap">
                            <h1 class="carousel-item__title titleLg">
                                {{ item.title }}
                            </h1>
                            <h1 class="carousel-item__overview textLg">
                                {{ item.overview }}
                            </h1>
                            <Button text="Assista" />
                        </div>
                    </div>
                </div>
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
import { IMAGE_BASE_URL } from '../services/apiData';
import Button from './Button.vue';

const movie = ref<MovieProps[] | null>();

export default {
    components: {
        Swiper,
        SwiperSlide,
        Button
    },
    setup() {

        onBeforeMount(async () => {
            const { data } = await getPopularMovies();
            console.log(data.value?.results);

            movie.value = data.value?.results;
        });
        return {
            movie,
            IMAGE_BASE_URL
        };
    },
};
</script>

<style scoped lang="scss">

.carousel-item {
    height: 100vh;
    width: 100%;
    position: relative;

    &__background {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: -1;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    &__info {
        background: rgba(0, 0, 0, 0.404);
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &-wrap {
            width: 100%;
        }
    }

    &__title {
        color: #fff;
        text-transform: uppercase;
    }

    &__overview {
        color: #fff;
    }
}

@media ( min-width: 768px ) {
    .carousel-item { 
        &__info {

            &-wrap {
                width: 60%;
            }
        }   
    }
}
</style>