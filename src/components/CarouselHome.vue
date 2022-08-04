<template>
    <swiper :slides-per-view="1" :space-between="0" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide>
            <div class="swiper-item">
                <h1 class="swiper-title">Slide 1</h1>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-item">
                <h1 class="swiper-title">Slide 2</h1>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-item">
                <h1 class="swiper-title">Slide 3</h1>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-item">
                <h1 class="swiper-title">Slide 3</h1>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-item">
                <h1 class="swiper-title">Slide 3</h1>
            </div>
        </swiper-slide>
        ...
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            // console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
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
</style>