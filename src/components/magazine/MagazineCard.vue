<template>
  <router-link
    :to="`/issue/${issue.slug}`" class="card"
    >
    <h1>{{ issue.title }}</h1>
    <img :src="issue.cover" :alt="issue.title" />
    <p>{{ issue.year }}</p>
  </router-link>
</template>

<script setup lang="ts">
import type { Issues } from '@/services/api'

defineProps<{
  issue: Issues
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
  text-decoration: none;
  color: var(--blue);
}

.card h1{
  text-transform: uppercase;
  font-family:'Zhirok', sans-serif;
}
.card img {
  min-width: 368px;
  width: 100%;
  height: auto;
}
</style>
