<template>
  <div>
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :loop="true"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2"
    >
      <swiper-slide v-for="image in gallery_images" :key="image.id">
        <img :src="'https://api.grizzpicssafari.com/' + image.image_url" />
      </swiper-slide>
    </swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :loop="true"
      :spaceBetween="10"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="image in gallery_images" :key="image.id">
        <img :src="'https://api.grizzpicssafari.com/' + image.image_url" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "../assets/css/style.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default {
  props: ["package_gallery"],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let thumbsSwiper = null;

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper = swiper;
    };

    return {
      modules: [FreeMode, Navigation, Thumbs],
    };
  },
  data: () => ({
    // thumbsSwiper: null,
    // setThumbsSwiper: null,
    gallery_images: [],
  }),
  methods: {},
  created() {
    this.gallery_images = this.package_gallery;
    // console.log(this.gallery_images);
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  /* height: 80%; */
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
