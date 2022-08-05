<template>
  <div class="widget-wrap">
    <header class="header">
      <div class="container">
        <h1 class="widget-title textLg">
          <span class="title-brand">VMax </span>
          {{ title }}
        </h1>
      </div>
    </header>
    <swiper
      :slides-per-view="2"
      :space-between="0"
      :modules="modules"
      :slideToClickedSlide="true"
      :loop="true"
      navigation
      :breakpoints="{
        '500': {
          slidesPerView: 3,
        },
        '650': {
          slidesPerView: 4,
        },
        '950': {
          slidesPerView: 5,
        },
        '1200': {
          slidesPerView: 7,
        },
      }"
    >
      <swiper-slide v-for="(item, index) in movie" :key="index">
        <div
          class="carousel-item"
          @click="statusActiveStyle = item.id"
          :style="statusActiveStyle === item.id ? activeStyle : null"
        >
          <div class="carousel-item__background">
            <img :src="IMAGE_BASE_URL + item.poster_path" />
          </div>
          <div class="carousel-item__info">
            <div class="container">
              <div class="carousel-item__info-wrap">
                <h1 class="carousel-item__title titleSm">
                  <!-- {{ item.title }} -->
                </h1>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      ...
    </swiper>
  </div>
</template>

<script lang="ts" >
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref, onBeforeMount } from "vue";
import { getPopularMovies } from "../services/apiFunctions";
import type { MovieProps } from "../services/apiFunctions";
import { IMAGE_BASE_URL } from "../services/apiData";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const movie = ref<MovieProps[] | null>();

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    onBeforeMount(async () => {
      const { data } = await getPopularMovies();

      movie.value = data.value?.results;
    });
    return {
      movie,
      IMAGE_BASE_URL,
      modules: [Navigation],
    };
  },
  data: () => {
    return {
      statusActiveStyle: null,
      activeStyle: {
        border: "5px solid #fff",
      },
    };
  },
  props: {
    title: String,
  },
};
</script>

<style scoped lang="scss">
.widget-wrap {
  margin: 3rem 0rem;
}

.header {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1rem 0 1rem;
  color: #fff;
}

.widget-title {
  font-size: 1.5rem;
}

.title-brand {
  font-weight: 900;
  color: #16c79a;
  letter-spacing: 0.2rem;
  /* font-size: 1.5rem; */
}

.carousel-item {
  width: 100%;
  position: relative;
  aspect-ratio: 2/3;

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
    /* background: rgba(0, 0, 0, 0.404); */
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

@media (min-width: 768px) {
  .widget-title {
    font-size: 2rem;
  }

  .carousel-item {
    &__info {
      &-wrap {
        width: 60%;
      }
    }
  }
}
</style>


// :style="statusActiveStyle ? activeStyle : null"