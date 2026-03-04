<template>
  <div class="card">
    <img :src="magazine.cover" :alt="magazine.title" />
    <h3>{{ magazine.title }}</h3>
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
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
}

.card img {
  width: 100%;
  height: auto;
}
</style>
