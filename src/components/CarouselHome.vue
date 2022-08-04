<template>
    <swiper :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
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
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
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