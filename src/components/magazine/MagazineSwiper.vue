<template>

  <div class="magazine">

    <Swiper
      :slides-per-view="1"
      :space-between="20"
      :navigation="true"
      :pagination="{ clickable: true,
        type: 'progressbar'
      }"
    >

      <SwiperSlide
        v-for="(page, index) in pages"
        :key="index"
      >
        <img
          :src="page"
          class="magazine-page"
        >
      </SwiperSlide>

    </Swiper>

  </div>
</template>

<script setup lang="ts">

import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


defineProps<{
  pages: string[]
}>()

</script>

<style>
.magazine {

  width: 900px;
  margin: 120px auto;

}

.magazine-page {

  width: 100%;
  height: auto;

}</style>
