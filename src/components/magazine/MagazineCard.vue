<template>
  <div class="card">
    <h1>{{ magazine.title }}</h1>
    <img :src="magazine.cover" :alt="magazine.title" />
    <p>{{ magazine.year }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Magazine } from '@/services/api'

defineProps<{
  magazine: Magazine
}>()
</script>

<style>
.card {
  min-width: 368px;
  aspect-ratio: 1 / 1.414;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

h1{
  text-transform: uppercase;
  font-family:'Zhirok', sans-serif;
}
.card img {
  min-width: 368px;
  width: 100%;
  height: auto;
}
</style>
