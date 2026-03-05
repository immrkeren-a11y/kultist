<template>

  <div class="magazine">
<Swiper
  :slidesPerView="2"
  :slidesPerGroup="2"
  :navigation="true"
  :grabCursor="true"
  :pagination="{ clickable: true }"
  class="mySwiper"
>

  <!-- первая страница -->
  <SwiperSlide class="cover-slide">
    <img :src="firstPage" class="magazine-page">
  </SwiperSlide>

  <!-- остальные страницы -->
  <SwiperSlide
    v-for="(page, index) in otherPages"
    :key="index"
  >
    <img :src="page" class="magazine-page">
  </SwiperSlide>

</Swiper>
  </div>
</template>

<script setup lang="ts">

import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

  import 'swiper/css';

  import 'swiper/css/scrollbar';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';




const props = defineProps<{
  pages: string[]
}>()

/* первая страница */
const firstPage = computed(() => props.pages[0])

/* остальные страницы */
const otherPages = computed(() => props.pages.slice(1))

</script>

<style>
.magazine{
  max-width:1200px;
  margin:0 auto;
  padding-top:100px;
  padding-bottom:50px;
}

.swiper-slide{
  display:flex;
  justify-content:center;
  align-items:center;
}

.magazine-page{
  height:calc(100vh - 150px);
  width:auto;
  object-fit:contain;
}
.cover-slide {

  width: 100% !important;
  display: flex;
  justify-content: center;

}
</style>
