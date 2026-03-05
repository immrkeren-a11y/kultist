<template>

  <div class="magazine">
<Swiper
  :modules="[Navigation, Pagination]"
  :slidesPerView="2"
  :slidesPerGroup="2"
  :slides-per-group-skip="1"
  :navigation="true"
  :zoom="true"
  :pagination="{ clickable: true }"
  class="mySwiper"
>

  <SwiperSlide class="cover-slide">
    <img :src="firstPage" class="magazine-page">
  </SwiperSlide>
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
import { Navigation, Pagination} from 'swiper/modules'

  import 'swiper/css';

  import 'swiper/css/zoom';
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
  max-width:1160px;
  margin:0 auto;
  padding-top:100px;
  padding-bottom:50px;
}

.swiper-slide{
  display:flex;
}

.magazine-page{
  height:calc(100vh - 150px);
  width:auto;
  object-fit:contain;
}

.cover-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 40px;
}
</style>
